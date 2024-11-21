import Image from "next/image";
import { cls } from "@/libs/utils";

export default function CompanyLogo() {
  return (
    <div
      className={cls(
        "relative h-36 w-full mb-24",
        "transition-color ease-in-out delay-50 duration-500",
        "md:hover:scale-105 transition-transform ease-in-out duration-500",
        "cursor-pointer peer/logo"
      )}
    >
      <Image
        src="/aio-logo.png"
        alt="aioneers logo"
        fill
        priority
        className="object-contain object-center"
      />
    </div>
  );
}
