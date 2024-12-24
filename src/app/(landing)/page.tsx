import { Heading } from "@/components/heading";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { Check } from "lucide-react";
import { ShinyButton } from "@/components/shiny-button";
import { MockDiscordUI } from "@/components/mock-discord-ui";
import { AnimatedList } from "@/components/ui/animated-list";
import { DiscordMessage } from "@/components/discord-message";
import Image from "next/image";

export default function Page() {
    return (
        <>
            {/* HERO */}
            <section className="relative py-24 sm:py-32 bg-brand-25">
                <MaxWidthWrapper className="text-center">
                    <div className="relative mx-auto text-center flex flex-col items-center gap-10">
                        <div>
                            <Heading>
                                <span>
                                    Real-Time SaaS Insights,
                                </span>
                                <br />
                                <span className="relative bg-gradient-to-r from-brand-700 to-brand-800 text-transparent bg-clip-text">
                                    Delivered to Your Discord
                                </span>
                            </Heading>
                        </div>
                        <p className="text-base/7 text-gray-600 max-w-prose text-center text-pretty">
                            PingPanda is the easiest way to monitor your SaaS.
                            Get instant notifications for <span
                                className="font-semibold text-gray-700">sales, new
                                users, or any other event {' '}</span>sent directly to
                            your Discord.
                        </p>
                        <ul className="space-y-2 text-base/7 text-gray-600 text-left flex flex-col items-start">
                            {[
                                "Real-time Discord alerts for critical events",
                                "Buy once use forever",
                                "Track sales, new users, or any other event"
                            ].map((item, idx) => (
                                <li key={idx}
                                    className="flex gap-1.5 items-center text-left">
                                    <Check
                                        className="size-5 shrink-0 text-brand-700" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <div className="w-full max-w-80">
                            <ShinyButton
                                href="/sign-up"
                                className="relative z-10 h-14 w-full text-base shadow-lg transition-shadow duration-300 hover:shadow-xl">
                                Start For Free Today
                            </ShinyButton>
                        </div>
                    </div>
                </MaxWidthWrapper>
            </section>

            {/* DISCORD DEMO */}
            <section className="relative bg-brand-25 pb-4">
                <div className="absolute inset-x-0 bottom-24 top-24 bg-brand-700" />
                <div className="relative mx-auto">
                    <MaxWidthWrapper className="relative">
                        <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                            <MockDiscordUI>
                                <AnimatedList>
                                    <DiscordMessage
                                        avatarSrc="/brand-asset-profile-picture.png"
                                        avatarAlt="PingPanda avatar"
                                        username="PingPanda"
                                        timestamp="Today at 12:35 PM"
                                        badgeColor="#43b581"
                                        badgeText="SignUp"
                                        title="👤 New user signed up"
                                        content={{
                                            name: "Max Ortiz",
                                            email: "m.ortiz@gmail.com"
                                        }}
                                    />
                                    <DiscordMessage
                                        avatarSrc="/brand-asset-profile-picture.png"
                                        avatarAlt="PingPanda avatar"
                                        username="PingPanda"
                                        timestamp="Today at 12:35 PM"
                                        badgeColor="#faa61a"
                                        badgeText="Revenue"
                                        title="💰 Payment received"
                                        content={{
                                            amount: "$49.00",
                                            email: "zoe.martinez@email.com",
                                            plan: "PRO"
                                        }}
                                    />
                                    <DiscordMessage
                                        avatarSrc="/brand-asset-profile-picture.png"
                                        avatarAlt="PingPanda avatar"
                                        username="PingPanda"
                                        timestamp="Today at 5:11 am"
                                        badgeColor="#5865f2"
                                        badgeText="Milestone"
                                        title="🚀 Revenue Milestone Achieved"
                                        content={{
                                            recurringRevenue: "$5,000 USD",
                                            growth: "+12.4%"
                                        }}
                                    />
                                </AnimatedList>
                            </MockDiscordUI>
                        </div>
                    </MaxWidthWrapper>
                </div>
            </section>

            {/* Bento Grid */}
            <section className="relative py-24 sm:py-32 bg-brand-25">
                <MaxWidthWrapper className="flex flex-col items-center gap-16 sm:gap-20">
                    <div>
                        <h2 className="text-center text-base/7 font-semibold text-brand-600">
                            Intuitive Monitoring
                        </h2>
                        <Heading>Stay ahead with real-time insights</Heading>
                    </div>
                    <div className="grid gap-4 lg:grid-cols-3 lg:grid-rows-2">
                        {/* First bento element */}
                        <div className="relative lg:row-span-2">
                            <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-[2rem]" />
                            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
                                <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                                    <p className="mt-2 text-lg/7 tracking-tight text-brand-950 max-lg:text-center">
                                        Real-time notifications
                                    </p>
                                    <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                                        Get notified about criticial events the
                                        moment they happen, no matter if you're
                                        at home or on the go.
                                    </p>
                                </div>
                                {/* weird class sets it as a parent - when use cqw allows us to set val relative to parent */}
                                <div className="relative min-h-[30rem] w-full grow [container-type:inline-size] max-lg:mx-auto max-lg:max-w-sm">
                                    <div className="absolute inset-x-10 bottom-0 top-10 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-3cqw] border-gray-700 bg-gray-900 shadow-2xl">
                                        <Image
                                            className="size-full object-cover object-top"
                                            src="/phone-screen.png"
                                            alt="Phone screen displaying app interface"
                                            fill
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-l-[2rem]" />
                        </div>
                        {/* second  bento element */}
                        <div className="relative max-lg:row-start-1">
                            <div className="absolute inset-px rounded-lg bg-white max-lg-rounded-t-[2rem]" />
                            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t[calc(2rem+1px)]">
                                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                                    <p className="mt-2 text-lg/7 tracking-tight text-brand-950 max-lg:text-center">
                                        Track Any Event
                                    </p>
                                    <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                                        From new user signups to successfull
                                        payments, PingPanda notifies you for all
                                        critical events in your Saas.
                                    </p>
                                </div>
                                <div className="flex flex-1 items-center justify-center px-8 max-lg:pb-12 max-lg:pt-10 sm:px-10 lg:pb-2">
                                    <Image
                                        className="w-full max-lg:max-w-xs"
                                        src="/bento-any-event.png"
                                        alt="Bento box illustrating event tracking"
                                        width={500}
                                        height={300}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </MaxWidthWrapper>
            </section>
            <section>
            </section>
        </>
    );
}


