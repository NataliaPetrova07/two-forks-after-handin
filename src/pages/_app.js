import "@/styles/globals.css";
import Layout from "@/components/Layout";
import { StoreProvider } from "@/contexts/storeContext";
import { Space_Grotesk } from "next/font/google";

export const space_grotesk = Space_Grotesk({
  subsets: ["latin"],
});

// import "@/styles/fonts.js";

export default function App({ Component, pageProps }) {
  return (
    <>
      <StoreProvider>
        <Layout>
          <style jsx global>{`
            html {
              font-family: ${space_grotesk.style.fontFamily};
            }
          `}</style>
          <div className="wrapper">
            <Component {...pageProps} />
          </div>
        </Layout>
      </StoreProvider>
    </>
  );
}
