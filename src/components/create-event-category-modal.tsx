"use client";

import { useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { PropsWithChildren, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CATEGORY_NAME_VALIDATOR } from "@/lib/validators/category-validator";
import { Modal } from "./ui/modal";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { cn } from "@/utils";

const EVENT_CATEGORY_VALIDATOR = z.object({
    name: CATEGORY_NAME_VALIDATOR,
    color: z.string().min(1, "Color is required").regex(/^#[0-9A-F]{6}$/i,
        "Invalid color format."),
    emoji: z.string().emoji("Invalid emoji").optional(),
});

type EventCategoryForm = z.infer<typeof EVENT_CATEGORY_VALIDATOR>

const COLOR_OPTIONS = [
    "#FF6B6B", // bg-[#FF6B6B] ring-[#FF6B6B] Bright Red
    "#4ECDC4", // bg-[#4ECDC4] ring-[#4ECDC4] Teal
    "#45B7D1", // bg-[#45B7D1] ring-[#45B7D1] Sky Blue
    "#FFA07A", // bg-[#FFA07A] ring-[#FFA07A] Light Salmon
    "#98D8C8", // bg-[#98D8C8] ring-[#98D8C8] Seafoam Green
    "#FDCB6E", // bg-[#FDCB6E] ring-[#FDCB6E] Mustard Yellow
    "#6C5CE7", // bg-[#6C5CE7] ring-[#6C5CE7] Soft Purple
    "#FF85A2", // bg-[#FF85A2] ring-[#FF85A2] Pink
    "#2ECC71", // bg-[#2ECC71] ring-[#2ECC71] Emerald Green
    "#E17055", // bg-[#E17055] ring-[#E17055] Terracotta
];

export const CreateEventCategoryModal = ({ children }: PropsWithChildren) => {
    const [isOpen, setIsOpen] = useState(false);
    const queryClient = useQueryClient();

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<EventCategoryForm>({
        resolver: zodResolver(EVENT_CATEGORY_VALIDATOR),
    });

    const onSubmit = (data: EventCategoryForm) => {

    }

    return (
        <>
            <div onClick={() => setIsOpen(true)}>{children}</div>
            <Modal
                className="max-w-xl p-8"
                showModal={isOpen}
                setShowModal={setIsOpen}>
                <form
                    className="space-y-6"
                    onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <h2 className="text-lg/7 font-medium tracking-tight">
                            New Event Category
                        </h2>
                        <p className="text-sm/6 text-gray-600">
                            Create a new category to organize your events.
                        </p>
                    </div>

                    <div className="space-y-5">
                        <div>
                            <Label htmlFor="name">Name</Label>
                            <Input
                                id="name"
                                autoFocus
                                placeholder="e.e. user-sign-up"
                                className="w-full"
                                {...register("name")} />
                            {errors.name ? (
                                <p className="mt-1 text-sm text-red-500">
                                    {errors.name.message}
                                </p>
                            ) : null}
                        </div>
                        <div>
                            <Label>Color</Label>
                            <div className="flex flex-wrap gap-3">
                                {COLOR_OPTIONS.map((premadeColor) => (
                                    <button
                                        key={premadeColor}
                                        type="button"
                                        className={cn(
                                            `bg-[${premadeColor}]`,
                                            "size-10 rounded-full ring-2 ring-offset-2 transition-all",
                                        )}
                                    >

                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </form>
            </Modal>
        </>
    );
}

