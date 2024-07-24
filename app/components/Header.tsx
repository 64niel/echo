import { ThemeSwitcher } from "./ThemeSwitcher";
import { NotificationButton } from "./NotificationButton";
import { SignInButton } from "./SignIn";
import { LogoImage } from "./Logo";
import { NavBar } from "./NavBar";

export default function SidePanel() {
    return (
        <div>   
            <LogoImage />
            <div className="-mt-28 mb-28">
            <NotificationButton />
            <SignInButton />
            <ThemeSwitcher />
            </div>
            <NavBar />
        </div> 
    );
  }