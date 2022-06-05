import React, {useState} from 'react';
import Navbar from "../../components/Navbar/Navbar";
import "./CheckoutPage.scss";

const CheckoutPage = () => {
  const [method,
    setMethod] = useState("e-money");

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
                  <div className={`payment-method ${method === "e-money" ? "payment-highlight" : ""}`} onClick={() => onChangeValue("e-money")}>
                    <label className="payment-label">
                      e-Money
                    </label>
                    <input className="payment-radio" type="radio" checked={method === "e-money"} onChange={onChangeValue} />
                  </div>
                  <div className={`payment-method ${method === "cash" ? "payment-highlight" : ""}`} onClick={() => onChangeValue("cash")}>
                    <label className="payment-label">
                      Cash On Delivery
                    </label>
                    <input className="payment-radio" type="radio" checked={method === "cash"} onChange={onChangeValue} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="summary-div">
          khkhkl
        </div>
      </div>

    </div>
  )
}

export default CheckoutPage