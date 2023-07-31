import Head from "next/head";
import { Hero } from "@/components/Hero/Hero";
import { useRef, useState } from "react";
import { insertOrder } from "@/modules/db";
import Anchor from "@/components/Anchor";
import { useContext } from "react";
import { StoreContext } from "@/contexts/storeContext";
import CartItemCheckout from "@/components/Cart/CartItemCheckout";
import styles from "./Cart.module.css";
import { Button, Checkbox, Form, Input, Radio } from "antd";

function CheckoutForm(props) {
  const state = useContext(StoreContext);
  const theForm = useRef(null);
  const [paymentCompleted, setPaymentCompleted] = useState(false);
  async function submit(e) {
    e.preventDefault();
    const response = await insertOrder({
      name: theForm.current.elements.name.value,
      email: theForm.current.elements.email.value,
      address: theForm.current.elements.address.value,
      basket: props.cart,
    });
    if (response && response.length) {
      setPaymentCompleted(true);
    }
  }
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      <Head>
        <title>Checkout</title>
      </Head>
      <Hero title="Checkout" />
      {paymentCompleted ? (
        <div>
          <h2>Thank you for your purchase</h2>
          <p>You will receive a confirmation email shortly</p>
        </div>
      ) : (
        <div className={styles.checkoutwrapper}>
          <form onSubmit={submit} ref={theForm}>
            <div className={styles.formcontrol}>
              <h2>Ticket holders</h2>
              <fieldset>
                <legend>Regular Ticket</legend>
                <label htmlFor="form-name">Full Name</label>
                <input required type="text" name="name" id="form-name" />
              </fieldset>
              <fieldset>
                <legend>VIP Ticket</legend>
                <label htmlFor="form-name">Full Name</label>
                <input required type="text" name="name" id="form-name" />
              </fieldset>
              <h2>Billing info</h2>
              <fieldset>
                <label htmlFor="form-name">Full Name</label>
                <input required type="text" name="name" id="form-name" />
                <label htmlFor="form-email">Email</label>
                <input required type="email" name="email" id="form-email" />
                <label htmlFor="form-phone">Phone number</label>
                <input required type="number" name="phone" id="form-phone" />
                <label htmlFor="form-street">Street and number</label>
                <input required type="text" name="street" id="form-street" />
                <label htmlFor="form-zip">ZIP code</label>
                <input required type="text" name="zip" id="form-zip" />
                <label htmlFor="form-street">Country</label>
                <input required type="text" name="country" id="form-country" />
              </fieldset>
              <h2>Payment</h2>
              <Radio checked>By Card</Radio>
              <fieldset>
                <label for="CC_number">Credit card number</label>
                <input type="number" minlength="16" maxlength="16" name="CC_number" id="CC_number" required />
                <label htmlFor="form-name">Name on a card</label>
                <input required type="text" name="name" id="form-name" />
                <label for="cvv">CVV</label>
                <input type="text" minlength="3" maxlength="3" name="cvv" id="cvv" required />
                <label for="expiring">Date of expiration</label>
                <input type="month" name="expiring" id="expiring" required />
              </fieldset>
              {/* <Form
                name="basic"
                labelCol={{
                  span: 8,
                }}
                wrapperCol={{
                  span: 16,
                }}
                style={{
                  maxWidth: 600,
                }}
                initialValues={{
                  remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
              >
                <Form.Item
                  label="Username"
                  name="username"
                  rules={[
                    {
                      required: true,
                      message: "Please input your username!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="Password"
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Please input your password!",
                    },
                  ]}
                >
                  <Input.Password />
                </Form.Item>

                <Form.Item
                  name="remember"
                  valuePropName="checked"
                  wrapperCol={{
                    offset: 8,
                    span: 16,
                  }}
                >
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item
                  wrapperCol={{
                    offset: 8,
                    span: 16,
                  }}
                >
                  <Button type="primary" htmlType="submit">
                    Submit
                  </Button>
                </Form.Item>
              </Form> */}
            </div>
            <button>Confirm and Pay</button>
            <Anchor className="greenbutton" href="#">
              Confirm and Pay
            </Anchor>
          </form>
          <aside className={styles.checkoutCart}>
            <h2 className={styles.h2CheckoutCart}>Cart</h2>
            <ul>
              {state.basket.map((item) => {
                return <CartItemCheckout {...item} key={item.name} />;
              })}
              <li className="checkoutBookingFee">Booking fee: 99,-DKK</li>
              <li className="checkoutTotal">Total: 99,-DKK</li>
            </ul>
            <Anchor className="greenbutton" href="../cart">
              Edit Cart
            </Anchor>
          </aside>
        </div>
      )}
    </>
  );
}

export default CheckoutForm;
