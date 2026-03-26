import type {Metadata} from "next";
import {Inter, Space_Grotesk} from 'next/font/google';
import "./globals.css";
import React from "react";
import ThemeProvider from "@/context/Theme";
import {Toaster} from "@/components/ui/sonner";
import {SessionProvider} from "next-auth/react";
import {auth} from "@/auth";

const inter = Inter({
    variable: "--font-Inter",
    subsets: ["latin"],

});
const spaceGrotesk = Space_Grotesk({
    variable: "--font-space-grotesk",
    subsets: ["latin"],
});


export const metadata: Metadata = {
    title: "DevFlow",
    description:
        "A community-driven platform for asking and answering programming questions. Get help, share knowledge, and collaborate with developers from around the world. Explore topics in web development, mobile app development, algorithms, data structures, and more.",
    icons: "/images/site-logo.svg",

};

export default async function RootLayout({children}: { children: React.ReactNode }) {
    const session = await auth()
    return (

        <html lang="fr" suppressHydrationWarning>
        <head>
            <link
                rel="stylesheet"
                type="text/css"
                href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
            />
        </head>
        <body
            className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}
        >
        <SessionProvider session={session}>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem={true} disableTransitionOnChange={true}>
                {children}
                <Toaster/>
            </ThemeProvider>
        </SessionProvider>
        </body>
        </html>
    );

}
