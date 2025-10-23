'use client';

import { QueryClient,QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";

const queryclient = new QueryClient();

interface Providerprops {
    children: ReactNode
}

export function Providers({ children }: Providerprops) {
    return (
        <ThemeProvider attribute={"class"} defaultTheme="system" enableSystem>
            <QueryClientProvider client={queryclient}>
                {children}
            </QueryClientProvider>
        </ThemeProvider>
    )
}