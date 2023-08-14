import styles from "./Buttons.module.css";
import { Space_Grotesk } from "next/font/google";

export const space_grotesk = Space_Grotesk({
  subsets: ["latin"],
});

function YellowButton({ name, onClick }) {
  return (
    <button className={styles.yellowbutton} onClick={onClick}>
      {name}
    </button>
  );
}

export default YellowButton;
