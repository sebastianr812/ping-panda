import { FREE_QUOTA, PRO_QUOTA } from "@/config";
import { db } from "@/db";
import { DiscordClient } from "@/lib/discord-client";
import { CATEGORY_NAME_VALIDATOR } from "@/lib/validators/category-validator";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const REQUEST_VALIDATOR = z.object({
    category: CATEGORY_NAME_VALIDATOR,
    fields: z.record(z.string().or(z.number()).or(z.boolean())).optional(),
    description: z.string().optional(),
}).strict();

export async function POST(req: NextRequest,) {
    const authHeader = req.headers.get("Authorization");

    if (!authHeader) {
        return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    if (!authHeader.startsWith("Bearer ")) {
        return NextResponse.json({
            message: "Invalid auth header format. Expected 'Bearer [API_KEY]'"
        }, { status: 401 });
    }

    const apiKey = authHeader.split(" ")[1];

    if (!apiKey || apiKey.trim() === "") {
        return NextResponse.json({ message: "Invalid API key" }, { status: 401 });
    }

    const user = await db.user.findUnique({
        where: { apiKey },
        include: { EventCategories: true },
    });

    if (!user) {
        return NextResponse.json({ message: "Invalid API key" }, { status: 401 });
    }

    if (!user.discordId) {
        return NextResponse.json(
            { message: "Please enter your discordf ID in your account settings" },
            { status: 403 });
    }

    const currentDate = new Date();
    const currentMonth = currentDate.getMonth() + 1;
    const currentYear = currentDate.getFullYear();

    const quota = await db.quota.findUnique({
        where: {
            userId: user.id,
            month: currentMonth,
            year: currentYear
        }
    });

    const quotaLimit = user.plan === "FREE"
        ? FREE_QUOTA.maxEventsPerMonth
        : PRO_QUOTA.maxEventsPerMonth;

    if (quota && quota.count >= quotaLimit) {
        return NextResponse.json(
            { message: "Monthly quota reached. Please upgrade your plan for more events" },
            { status: 429 }
        );
    }

    const discord = new DiscordClient(process.env.DISCORD_BOT_TOKEN);

    const dmChannel = await discord.createDM(user.discordId);

    let requestData: unknown;

    try {
        requestData = await req.json();
    } catch (e) {
        return NextResponse.json(
            { message: "Invalid JSON request body" },
            { status: 400 }
        );
    }

    const validationResult = REQUEST_VALIDATOR.parse(requestData);

    const category = user.EventCategories.find((cat) =>
        cat.name === validationResult.category);

    if (!category) {
        return NextResponse.json(
            { message: `You don't have a category named "${validationResult.category}"` },
            { status: 404 }
        );
    }

    const eventData = {
        title: `${category.emoji || "🔔"} ${category.name.charAt(0).toUpperCase() + category.name.slice(1)}`,
        description: validationResult.description || `A new ${category.name} event has occurred!`,
        color: category.color,
        timestamp: new Date().toISOString(),
        fields: Object.entries(validationResult.fields || {})
            .map(([key, val]) => ({
                name: key,
                value: String(val),
                inline: true,
            }))
    }


}
