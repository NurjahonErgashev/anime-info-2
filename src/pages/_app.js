import Layout from "@/components/Layout";
import Loading from "@/components/Loading";
import "@/styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { NextUIProvider, createTheme } from "@nextui-org/react";
import { ThemeProvider } from "next-themes";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }) {
  let [isLoading, setIsLoading] = useState(false);
  let router = useRouter();
  useEffect(() => {
    router.events.on("routeChangeStart", () => {
      setIsLoading(true);
    });
    router.events.on("routeChangeComplete", () => {
      setIsLoading(false);
    });
  }, []);

  let dark = createTheme({
    theme: {
      colors: {
        background: "dark",
        backgroundAlpha: "white",
      },
    },
    type: "dark",
  });

  return (
    <Layout>
      {isLoading && <Loading />}
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        value={{
          dark: dark.className,
        }}
      >
        <Component {...pageProps} />
      </ThemeProvider>
    </Layout>
  );
}
