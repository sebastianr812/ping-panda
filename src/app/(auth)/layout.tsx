import { ReactNode } from "react";
import { Navbar } from "@/components/navbar";

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <>
            {/* @ts-expect-error Server Component */}
            <Navbar />
            {children}
        </>
    );
}

