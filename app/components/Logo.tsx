'use client'

import { useEffect, useState } from 'react';
import { useTheme } from "next-themes";
import Image from "next/image";

export function LogoImage() {
    const { theme, systemTheme, resolvedTheme } = useTheme();
    const [logoSrc, setLogoSrc] = useState("");

    useEffect(() => {
        // Determine the effective theme (accounting for system preferences if theme is set to 'system')
        const effectiveTheme = theme === 'system' ? systemTheme : theme;
        // Set the logo source based on the effective theme
        const src = effectiveTheme === 'light' ? "/logos/echo_logo_light.png" : "/logos/echo_logo_dark.png";
        setLogoSrc(src);
    }, [theme, systemTheme]); // Re-run this effect if the theme changes

    return (
        <div className="inline-block">
            <a href="/">
                {logoSrc && <Image
                    src={logoSrc}
                    width={140}
                    height={140}
                    alt="Echo Logo"
                    className="" />}
            </a>
        </div>
    );
}