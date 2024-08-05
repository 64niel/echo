import { ThemeSwitcher } from "./ThemeSwitcher";
import { NotificationButton } from "./NotificationButton";
import { SignInButton } from "./SignIn";
import { LogoImage } from "./Logo";
import { NavBar } from "./NavBar";
import { CalendarButton } from "./CalendarButton";

export default function SidePanel() {
    return (
        <div>   
            <LogoImage />
            <div className="-mt-28 mb-16 md:mb-20">
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