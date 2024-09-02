import { ThemeSwitcher } from "./components/ThemeSwitcher";
import { NotificationButton } from "./components/NotificationButton";
import { SignInButton } from "./components/SignIn";
import { LogoImage } from "./components/Logo";
import { NavBar } from "./components/NavBar";
import { CalendarButton } from "./components/CalendarButton";

export default function SidePanel() {
    return (
        <div>   
            <LogoImage />
            <div className="-mt-24 md:-mt-28 md:mb-16">
                <div className="flex justify-end">
                    <NotificationButton />
                    <SignInButton />
                    <ThemeSwitcher />
                </div>
                <div className="mt-3 mr-1">
                    <CalendarButton />
                </div>
            </div>
            <NavBar />
        </div> 
    );
  }