import NavigationMenu from "@/components/NavigationMenu";
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
            "items-center",
            "md:px-20 md:py-24 p-10"
          )}
        >
          <NavigationMenu />
          <Component {...pageProps} />
        </section>
      </main>
    </>
  );
}
