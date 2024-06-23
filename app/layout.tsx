import "./globals.css";
import type { Metadata } from "next";
import {Providers} from "./providers";

export const metadata: Metadata = {
  title: "echo",
  description: "Esports Tracker",
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
