'use client'
import { useEffect, useState } from 'react';
import { useTheme } from "next-themes";
import Image from "next/image";

// The logo component
export function LogoImage() {
    const { theme, systemTheme } = useTheme();
    const [logoSrc, setLogoSrc] = useState("");

    useEffect(() => {
        // Determine the effective theme (accounting for system preferences if theme is set to 'system')
        const effectiveTheme = theme === 'system' ? systemTheme : theme;
        // Set the logo source based on the effective theme
        const src = effectiveTheme === 'light' ? "/logos/echo_logo_light.png" : "/logos/echo_logo_dark.png";
        setLogoSrc(src);
    }, [theme, systemTheme]); // Re-run this effect if the theme changes

    return (
        <div className="inline-block h-[100px] md:h-[135px]">
            <a href="/">
                {/* The logo */}
                {logoSrc && <Image
                    src={logoSrc}
                    alt="Echo Logo"
                    width={"135"}
                    height={"135"}
                    className="w-full h-full" />}
            </a>
        </div>
    );
}