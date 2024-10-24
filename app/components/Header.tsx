// Header.tsx
import { ThemeSwitcher } from "./ui/ThemeSwitcher";
import { NotificationButton } from "./ui/NotificationButton";
import { SignInButton } from "./ui/SignIn";
import { LogoImage } from "./layout/Logo";
import { NavBar } from "./layout/NavBar";
import { CalendarButton } from "./ui/CalendarButton";

// Main header of the app
export default function PageHeader() {
    return (
        <div>
            {/* Logo */}
            <LogoImage />
            <div className="-mt-24 md:-mt-28 md:mb-16">
                {/* Notification, sign in and theme switch buttons */}
                <div className="flex justify-end">
                    <NotificationButton />
                    <SignInButton />
                    <ThemeSwitcher />
                </div>
                {/* Calendar button */}
                <div className="mt-3 mr-1">
                    <CalendarButton />
                </div>
            </div>
            {/* Navigation bar */}
            <div className="mt-2 sm:mt-0">
                <NavBar />
            </div>
        </div> 
    );
  }