'use client'

import { useTheme } from "next-themes";
import Image from "next/image";

export function LogoImage() {
    const { theme } = useTheme();

    return (
    <div>
        <a href="/">
            <Image
            src={theme === 'light' ? "/logos/echo_logo_light.png" : "/logos/echo_logo_dark.png"}
            width={140}
            height={140}
            alt="Echo Logo"
            className="pb-1.5"  />
        </a>
    </div>
  );
}