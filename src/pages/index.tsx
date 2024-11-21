import CompanyLogo from "@/components/CompanyLogo";
import { cls } from "@/libs/utils";

export default function Home() {
  return (
    <article
      className={cls(
        "mt-10",
        "py-10 px-18 tracking-wide ",
        "group",
        "md:text-4xl text-2xl"
      )}
    >
      <section className="leading-loose mb-12">
        <div className="indent-8">Achieve, Innovate, Overcome:</div> Navigating
        Every Evolving Realm with
        <div
          className={cls(
            "md:text-5xl text-3xl",
            "indent-0 underline-offset-2 decoration-4 mt-2",
            "md:hover:text-primary-100 transition-all ease-in-out duration-500"
          )}
        >
          Pioneering minds.
        </div>
      </section>
      <CompanyLogo />
    </article>
  );
}
