import styles from "./CartItem.module.css";
import TicketItem from "./TicketItem";
import TentItem from "./TentItem";

function CartItem(props) {
  const validNames = ["Regular", "VIP", "Green Camping"];
  let isTicket = true;
  if (validNames.includes(props.name)) {
    isTicket = true;
  } else {
    isTicket = false;
  }
  return <li className={styles.cartLi}>{isTicket ? <TicketItem {...props} /> : <TentItem {...props} />}</li>;
}

export default CartItem;
