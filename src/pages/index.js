import Head from "next/head";
import logo from "@/assets/foofest-logo.svg";
import backgroundgraphics from "@/assets/background-graphics.svg";
import Image from "next/image";
import styles from "@/styles/Home.module.css";

export default function Home({ data }) {
  //console.log(data);
  return (
    <>
      <Head>
        <title>Foofest</title>
      </Head>
      <div className={styles.Homepage}>
        <div
          className="bg"
          style={{
            backgroundImage: `url(${backgroundgraphics.src})`,
            width: "100%",
            height: "100%",
          }}
        >
          <h1>kid and family friendly Japanese Jazz Fusion Music Festival</h1>
          <Image src={logo.src} width={236} height={40} alt="foofest logo" priority />
        </div>
      </div>
    </>
  );
}
