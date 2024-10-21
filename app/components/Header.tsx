// Header.tsx
import { ThemeSwitcher } from "./components/ThemeSwitcher";
import { NotificationButton } from "./components/NotificationButton";
import { SignInButton } from "./components/SignIn";
import { LogoImage } from "./components/Logo";
import { NavBar } from "./components/NavBar";
import { CalendarButton } from "./components/CalendarButton";

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
            <NavBar />
        </div> 
    );
  }