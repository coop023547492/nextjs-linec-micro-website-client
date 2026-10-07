import HeaderLogo from "@/components/header/HeaderLogo";
import MainNav from "./MainNav";
import MobileToggle from "./MobileToggle";
import UserToggle from "./UserToggle";
import HeadNav from "./HeadNav";

export default function Header() {
  return (
    <>
      <header className="hidden wrapper lg:flex justify-between z-50 mb-5">
        <HeaderLogo />
        {
          <nav className="flex flex-col justify-between items-end">
            <div className="flex items-center gap-5">
              <HeadNav />
              {/*   <ButtonLogin /> */}
            </div>
            <MainNav />
          </nav>
        }
        {/* <MainNav /> */}
      </header>

      {/*  <header className="w-full flex justify-center z-50 mt-5 ">
        <HeaderLogo />
      </header> */}

      <header className="flex lg:hidden justify-between pt-10 px-5 mb-5 z-50">
        <MobileToggle />
        <HeaderLogo />
        <UserToggle />
      </header>
    </>
  );
}
