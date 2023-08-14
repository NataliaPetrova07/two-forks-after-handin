import React, { useState } from "react";
import Cards from "react-credit-cards-2";
import "react-credit-cards-2/dist/es/styles-compiled.css";
import styles from "./Cart.module.css";

const PaymentForm = () => {
  const [state, setState] = useState({
    number: "",
    expiry: "",
    cvc: "",
    name: "",
    focus: "",
  });

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;

    setState((prev) => ({ ...prev, [name]: value }));
  };

  const handleInputFocus = (evt) => {
    setState((prev) => ({ ...prev, focus: evt.target.name }));
  };

  return (
    <fieldset className={styles.cardField}>
      <Cards number={state.number} expiry={state.expiry} cvc={state.cvc} name={state.name} focused={state.focus} />
      <div className={styles.card}>
        <label htmlFor="number">Card number</label>
        <input type="text" name="number" value={state.number} minLength="16" maxLength="16" onChange={handleInputChange} onFocus={handleInputFocus} />
        <label htmlFor="name">Cardholder's name</label>
        <input type="text" name="name" value={state.name} onChange={handleInputChange} onFocus={handleInputFocus} />
        <label className={styles.expiry} htmlFor="expiry">
          Expiry
        </label>
        <input className={styles.expiry} type="text" name="expiry" value={state.expiry} minLength="4" maxLength="4" onChange={handleInputChange} onFocus={handleInputFocus} />
        <label className={styles.cvcLabel} htmlFor="cvc">
          CVC
        </label>
        <input className={styles.cvcNumber} type="text" name="cvc" value={state.cvc} minLength="3" maxLength="3" onChange={handleInputChange} onFocus={handleInputFocus} />
      </div>
    </fieldset>
  );
};

export default PaymentForm;
