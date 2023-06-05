import { cls } from "@/libs/utils";

export default function Home() {
  return (
    <article
      className={cls(
        "text-4xl py-10 px-24 leading-normal tracking-wide ",
        "group"
      )}
    >
      <div className="indent-2.5">Achieve, Innovate, Overcome:</div> Navigating
      Every Evolving Realm with
      <div
        className={cls(
          "indent-0 underline-offset-2 decoration-4 mt-2 text-5xl",
          "transition-all ease-in-out duration-100",
          "group-hover:text-primary-100 group-hover:underline"
        )}
      >
        Pioneering minds.
      </div>
    </article>
  );
}
