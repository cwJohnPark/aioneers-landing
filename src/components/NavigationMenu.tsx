import { cls } from "@/libs/utils";
import { useState } from "react";
import Image from "next/image";

const MenuTitles = ["HOME", "ABOUT", "PRODUCTS", "CONTACT"];

export default function NavigationMenu() {
  return (
    <nav className="w-full flex flex-row justify-around items-center">
      <Logo />
      <div className="w-full flex flex-column"></div>
      <HambergerMenu />
      <MenuBar />
    </nav>
  );
}
export function Logo() {
  return (
    <div
      className={cls(
        "text-lg font-light tracking-wider cursor-pointer",
        "flex flex-col justify-center items-center",
        "gap-x-2"
      )}
    >
      <Image
        src="/aioneers-logo-only.png"
        alt="aioneers menu logo"
        width="21"
        height="21"
        priority
      />
      <span>Aioneers</span>
    </div>
  );
}

export function MenuBar() {
  return (
    <ul
      className={cls(
        "hidden md:flex font-white flex-row justify-evenly gap-x-14",
        "text-gray-600"
      )}
    >
      {MenuTitles.map((title, index) => (
        <li
          key={index}
          className={cls(
            "cursor-pointer",
            "border-white border-b-2 hover:border-gray-700"
          )}
        >
          {title}
        </li>
      ))}
    </ul>
  );
}

export function HambergerMenu() {
  const [menuOpened, setMenuOpened] = useState<Boolean>(false);
  const handleMenuClick = (e: React.MouseEvent<HTMLElement>) => {
    setMenuOpened((prev) => !prev);
  };
  return (
    <>
      <ul
        className={cls(
          menuOpened ? "flex flex-col" : "hidden",
          "md:hidden",
          "absolute top-0 bottom-0 left-0 right-0 z-10",
          "w-full h-full bg-gray-300",
          "px-14 py-28 gap-y-8 text-xl text-zinc-600"
        )}
      >
        {MenuTitles.map((title, index) => (
          <li
            key={index}
            className={cls(
              "relative top-0",
              "cursor-pointer",
              "pb-3",
              "box-border",
              "border-b-2 border-white/30 hover:border-white",
              "transition ease-in-out"
            )}
          >
            {title}
          </li>
        ))}
      </ul>
      <div
        className={cls(
          "relative left-0 top-0 z-20",
          "flex flex-col gap-y-2 p-3 justify-center	 items-center",
          "cursor-pointer group",
          "md:hidden"
        )}
        onClick={handleMenuClick}
      >
        <span
          className={cls(
            "block",
            "w-8 h-1",
            "bg-gray-600",
            "transition ease-in-out delay-10 duration-150 ",
            menuOpened && "-rotate-45 translate-y-2 scale-95"
          )}
        ></span>
        <span
          className={cls(
            "block",
            "w-8 h-1",
            "bg-gray-600",
            "transition ease-in-out delay-10 duration-150 ",
            menuOpened && "rotate-45 -translate-y-1 scale-95"
          )}
        ></span>
      </div>
    </>
  );
}
