import { Navbar } from "@/components/navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            {/* @ts-expect-error Server Component */}
            <Navbar />
            {children}
        </>
    );
}


