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
                width={135}
                height={135}
                alt="Echo Logo"
                className="mt-2"  
            />
        </a>
    </div>
  );
}