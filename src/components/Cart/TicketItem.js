import { useContext } from "react";
import { DispatchContext } from "@/contexts/storeContext";
import { MinusSquareOutlined, PlusSquareOutlined, DeleteOutlined } from "@ant-design/icons";
import styles from "./CartItem.module.css";

function TicketItem(props) {
  const dispatch = useContext(DispatchContext);
  const totalPrice = props.price * props.quantity;

  const priceFormatter = new Intl.NumberFormat("da-DK", {
    currency: "DKK",
    style: "currency",
    maximumFractionDigits: 0,
  });

  function deleteOne() {
    dispatch({
      action: "REMOVE_TICKET",
      payload: {
        name: props.name,
      },
    });
  }
  function removeOne() {
    dispatch({
      action: "REMOVE_ONE_TICKET",
      payload: {
        name: props.name,
        price: props.price,
        quantity: props.quantity,
      },
    });
  }
  function addOne() {
    dispatch({
      action: "ADD_TICKET",
      payload: {
        name: props.name,
        price: props.price,
        quantity: props.quantity,
      },
    });
  }
  const title = props.name;
  const shouldRenderButton = title === "Regular" || title === "VIP";
  return (
    <div className={styles.cartItemMultiple}>
      <h3> {props.name} ticket</h3>
      <p> {props.quantity}x</p>
      {shouldRenderButton ? (
        <button className={styles.cartButton} onClick={removeOne}>
          <MinusSquareOutlined style={{ fontSize: "24px", color: "#2b164e" }} />
        </button>
      ) : (
        <div></div>
      )}
      {shouldRenderButton ? (
        <button className={styles.cartButton} onClick={addOne}>
          <PlusSquareOutlined style={{ fontSize: "24px", color: "#2b164e" }} />
        </button>
      ) : (
        <div></div>
      )}
      <p className={styles.cartItemPrice}>{priceFormatter.format(totalPrice)}</p>
      <button className={styles.cartButton} onClick={deleteOne}>
        <DeleteOutlined style={{ fontSize: "24px", color: "#2b164e" }} />
      </button>
    </div>
  );
}

export default TicketItem;
