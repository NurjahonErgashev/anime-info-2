import Layout from "@/components/Layout";
import Loading from "@/components/Loading";
import "@/styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
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

  return (
    <Layout>
      {isLoading && <Loading />}
      <Component {...pageProps} />
    </Layout>
  );
}
