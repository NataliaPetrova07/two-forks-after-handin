import styles from "./Navbar.module.css";
import Anchor from "../Anchor";
import logo from "@/assets/foofest-logo.svg";
import { useContext } from "react";
import { StoreContext } from "@/contexts/storeContext";
import Image from "next/image";

export function Navbar() {
  const priceFormatter = new Intl.NumberFormat("da-DK", {
    currency: "DKK",
    style: "currency",
    maximumFractionDigits: 0,
  });

  const state = useContext(StoreContext);
  const { basket } = state;
  let bookingFee = 99;
  let total = 0;
  if (basket) {
    basket.forEach((item) => {
      if (item.price) {
        total += item.price * item.quantity;
      }
      if (item.price2) {
        total += item.price2 * item.quantity2;
      }
      if (item.price3) {
        total += item.price3 * item.quantity3;
      }
    });
  }
  let totalPlusFee = 0;
  if (total > 0) {
    totalPlusFee = total + bookingFee;
  }
  return (
    <nav className={styles.navbar}>
      <Anchor href="/" aria-label="Foofest">
        <Image src={logo.src} width={118} height={20} alt="foofest logo" priority />
      </Anchor>
      <Anchor className="navlink" href="../program">
        Program
      </Anchor>
      <Anchor className="navlink" href="../tickets">
        Tickets
      </Anchor>
      <Anchor className="yellowbutton" href="../cart">
        Cart: {priceFormatter.format(totalPlusFee)}
      </Anchor>
    </nav>
  );
}
