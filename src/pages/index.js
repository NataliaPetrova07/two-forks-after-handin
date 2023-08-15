import Head from "next/head";
import bg from "@/assets/background.svg";
import styles from "@/styles/Home.module.css";
import Anchor from "@/components/Anchor";
import Circle from "@/components/Circle";

export default function Home() {
  return (
    <>
      <Head>
        <title>Foofest</title>
      </Head>
      <div
        className={styles.bg}
        style={{
          backgroundImage: `url(${bg.src})`,
        }}
      ></div>
      <Circle />
      <div className="wrapper">
        <div className={styles.Homepage}>
          <h1>kid and family friendly Japanese Jazz Fusion Music Festival</h1>
          <div className={styles.buttons}>
            <Anchor className="greenbutton" href="../program">
              Program
            </Anchor>
            <Anchor className="greenbutton" href="../tickets">
              Tickets
            </Anchor>
          </div>
        </div>
      </div>
    </>
  );
}
