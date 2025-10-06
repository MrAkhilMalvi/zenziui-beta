import { Header } from "@/components/landing/header";
import { Footer } from "@/components/layout/Footer";
import type { Metadata } from "next";
// import { usePathname } from "next/navigation";

export const metadata: Metadata = {
    title: {
        template: "%s | ZenZi UI - Open Source Components",
        default: "ZenZi UI - Open Source Components",
    },
};

export default function HomeLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Header />
            <main className="relative w-full pt-0 md:pt-0 bg-white dark:bg-black">
                {children}
            </main>
            <Footer />
        </>
    );
}
