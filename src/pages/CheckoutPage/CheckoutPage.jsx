import React, {useState} from 'react';
import Navbar from "../../components/Navbar/Navbar";
import Button from "../../components/Button/Button";
import { useSelector } from "react-redux";
import "./CheckoutPage.scss";


const CheckoutPage = () => {
  const [method,
    setMethod] = useState("e-money");
  const {total, products} = useSelector(store => store.cart);
  const onChangeValue = (method) => {
    setMethod(method);
  }

  return (
    <div className="checkout-page">
      <div className="checkout-navbar">
        <Navbar/>
      </div>
      <div className="checkout-content container">
        <div className="checkout-div">
          <h1 className="checkout-title">CHECKOUT</h1>
          <div className="billing-details">
            <h5>BILLING DETAILS</h5>

            <div className="billing-details-content">
              <div className="billing-form-group">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" placeholder="Alexei Ward"/>
              </div>
              <div className="billing-form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" name="email" placeholder="alexei@mail.com"/>
              </div>
              <div className="billing-form-group">
                <label htmlFor="telephone">Phone Number</label>
                <input type="tel" name="telephone" placeholder="+1 202-555-0136"/>
              </div>
            </div>
          </div>
          <div className="shipping-info">
            <h5>SHIPPING INFO</h5>
            <div className="shipping-content">
              <div className="shipping-form-group">
                <label htmlFor="address">Address</label>
                <input type="text" name="address" placeholder="1137 Williams Avenue"/>
              </div>
              <div className="shipping-flex-div">
                <div className="shipping-form-group">
                  <label htmlFor="zip-code">Zip Code</label>
                  <input type="text" name="zip-code" placeholder="10001"/>
                </div>
                <div className="shipping-form-group">
                  <label htmlFor="city">City</label>
                  <input type="text" name="city" placeholder="New York"/>
                </div>
                <div className="shipping-form-group">
                  <label htmlFor="country">Country</label>
                  <input type="text" name="country" placeholder="United States"/>
                </div>
              </div>
            </div>
          </div>
          <div className="payment-details">
            <h5>PAYMENT DETAILS</h5>
            <div className="payment-content">
              <div className="payment-method-div">
                <div className="payment-form-group">
                  <label>Payment Method</label>
                </div>
                <div className="payment-form-group">
                  <div
                    className={`payment-method ${method === "e-money"
                    ? "payment-highlight"
                    : ""}`}
                    onClick={() => onChangeValue("e-money")}>
                    <label className="payment-label">
                      e-Money
                    </label>
                    <input
                      className="payment-radio"
                      onClick={() => onChangeValue("e-money")}
                      type="radio"
                      readOnly
                      checked={method === "e-money"}/>
                  </div>
                  <div
                    className={`payment-method ${method === "cash"
                    ? "payment-highlight"
                    : ""}`}
                    onClick={() => onChangeValue("cash")}>
                    <label className="payment-label">
                      Cash On Delivery
                    </label>
                    <input
                      className="payment-radio"
                      onClick={() => onChangeValue("cash")}
                      type="radio"
                      readOnly
                      checked={method === "cash"}/>
                  </div>
                </div>
                <div className="cash-money-div">
                  <div className="payment-form-group">
                    <label htmlFor="e-money-number">e-Money Number</label>
                    <input type="text" name="e-money-number" placeholder="238521993"/>
                  </div>
                  <div className="payment-form-group">
                    <label htmlFor="e-money-pin">e-Money PIN</label>
                    <input type="text" name="e-money-pin" placeholder="6891"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="summary-div">
          <div className="summary-content">
            <h3 className="summary-title">SUMMARY</h3>
            <ul>

            </ul>
            <div className="totals-div">
              <div className="subtotal-price">
                <h4>SUBTOTAL</h4>
                <p>{`$ ${total}`}</p>
              </div>
              <div className="shipping-price">
                <h4>SHIPPING</h4>
                <p>$ 50</p>
              </div>
              <div className="vat-price">
                <h4>VAT (INCLUDED)</h4>
                <p>{`$ ${((20 * total) / 100)}`}</p>
              </div>
              <br />
              <div className="grand-total-price">
                <h4>TOTAL</h4>
                <p className="grand-total-color">$ 24,162</p>
              </div>
            </div>
            <Button className="pay-btn" text={"CONTINUE & PAY"} type={"type-1"} />
          </div>
        </div>
      </div>

    </div>
  )
}

export default CheckoutPage