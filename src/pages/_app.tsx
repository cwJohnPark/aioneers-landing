import NavigationMenu from "@/components/NavigationMenu";
import Image from "next/image";
import { cls } from "@/libs/utils";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover, width=device-width, height=device-height"
        />
        <link rel="icon" href="/favicon.ico" />
        <title>
          Aionners | Achieve, Innovate, Overcome Navigating Every Evolving Realm
        </title>
      </Head>
      <main className={cls("font-extralight")}>
        <section
          className={cls(
            "min-h-screen",
            "flex flex-col",
            "items-center justify-between",
            "md:px-20 md:py-24 p-10"
          )}
        >
          <NavigationMenu />
          <Component {...pageProps} />
          <div
            className={cls(
              "relative h-36 w-full mb-24",
              "transition-color ease-in-out delay-50 duration-500",
              "grayscale hover:grayscale-0",
              "cursor-pointer peer/logo"
            )}
          >
            <Image
              src="/aioneers.png?1"
              alt="aioneers logo"
              fill
              priority
              className="object-contain object-center"
            />
          </div>
        </section>
      </main>
    </>
  );
}
