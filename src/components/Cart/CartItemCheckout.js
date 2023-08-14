import styles from "./CartItem.module.css";
import { useContext } from "react";
import { StoreContext } from "@/contexts/storeContext";

function CartItemCheckout(props) {
  const state = useContext(StoreContext);
  const shouldRenderTitle = props.quantity3 > 0 || props.quantity2 > 0;
  let total = 0;

  const priceFormatter = new Intl.NumberFormat("da-DK", {
    currency: "DKK",
    style: "currency",
    maximumFractionDigits: 0,
  });

  return (
    <li className={styles.cartLi}>
      {shouldRenderTitle ? <h4>{props.name} Camping</h4> : null}
      <div className={styles.cartItemCheckout}>
        <div>
          {props.quantity ? (
            <p>
              {props.quantity}x {props.name} Ticket
            </p>
          ) : null}
          {props.quantity2 ? <p> {props.quantity2}x tent for 2 </p> : null}
          {props.quantity3 ? <p> {props.quantity3}x tent for 3 </p> : null}
        </div>
        <div>
          {props.quantity ? <p className={styles.cartItemPrice}>{priceFormatter.format(props.quantity * props.price)}</p> : null}
          {props.quantity2 ? <p className={styles.cartItemPrice}>{priceFormatter.format(props.quantity2 * props.price2)}</p> : null}
          {props.quantity3 ? <p className={styles.cartItemPrice}>{priceFormatter.format(props.quantity3 * props.price3)}</p> : null}
        </div>
      </div>
    </li>
  );
}

export default CartItemCheckout;
