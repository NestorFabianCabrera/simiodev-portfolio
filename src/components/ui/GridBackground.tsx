import { cn } from "@/lib/utils";
import React from "react";

interface GridBackgroundProps {
    children?: React.ReactNode;
}

export function GridBackground({ children }: GridBackgroundProps) {
    return (
        <div className="relative min-h-screen w-full bg-black">
            <div
                className={cn(
                    "fixed inset-0",
                    "[background-size:40px_40px]",
                    "[background-image:linear-gradient(to_right,#3B0764_1px,transparent_1px),linear-gradient(to_bottom,#3B0764_1px,transparent_1px)]",
                )}
            />

            <div className="pointer-events-none fixed inset-0 bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_30%,black)]"></div>
            <div className="relative z-10">
                {children}
            </div>
        </div>
    );
}
