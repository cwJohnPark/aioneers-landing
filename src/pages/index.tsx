import { cls } from "@/libs/utils";

export default function Home() {
  return (
    <article
      className={cls(
        "py-10 px-18 leading-normal tracking-wide ",
        "group",
        "md:text-4xl text-2xl"
      )}
    >
      <div className="indent-2.5">Achieve, Innovate, Overcome:</div> Navigating
      Every Evolving Realm with
      <div
        className={cls(
          "md:text-5xl text-3xl",
          "indent-0 underline-offset-2 decoration-4 mt-2",
          "transition-all ease-in-out duration-100",
          "group-hover:text-primary-100 group-hover:underline"
        )}
      >
        Pioneering minds.
      </div>
    </article>
  );
}
