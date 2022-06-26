import React, {useState, useEffect} from 'react';
import Navbar from "../../components/Navbar/Navbar";
import Button from "../../components/Button/Button";
import Footer from "../../components/Footer/Footer";
import CheckoutModal from "../../components/CheckoutModal/CheckoutModal";
import { Link } from "react-router-dom";
import {useSelector} from "react-redux";
import {useForm} from 'react-hook-form';
import "./CheckoutPage.scss";


const CheckoutPage = () => {
  const [method,
    setMethod] = useState("e-money");
  const [payModal,
    setPayModal] = useState(false);

  const {subTotal, vatCost, cartItems} = useSelector(store => store.cart);
  const {register, unregister, handleSubmit, formState, formState: {
      errors
    }} = useForm({mode: "onChange"});

  const shippingCost = 50;
  const totalCost = subTotal + shippingCost + vatCost;

  const onSubmit = data => console.log(data);

  const onChangeValue = (method) => {
    setMethod(method);

  }

  const toggleHandler = () => {
    if(formState.isValid){
      setPayModal(prev => !prev);
    }
  }

  useEffect(() => {
    if (method === "cash") {
      unregister("ePIN");
      unregister("eNumber");
    }

  },[method, unregister,formState.isValid])

  return (
    <div className="checkout-container">
      {payModal && (
        <div className="modal-overlay">
          <CheckoutModal/>
        </div>
      )}
      <div className="checkout-content">
        <div className="checkout-navbar">
          <Navbar/>
        </div>
        <div className="container">
        <Link to={"/"}>
          <Button className="back-btn" text={"Go Back"} type={"type-5"}/>
        </Link>
          <form onSubmit={handleSubmit(onSubmit)} className="checkout-form">

            <div className="checkout-div">
              <h1 className="checkout-title">CHECKOUT</h1>
              <div className="billing-details">
                <h5>BILLING DETAILS</h5>
                <div className="billing-details-content">
                  <div className="billing-form-group">
                    <div
                      className={`${errors.name
                      ? "error-class"
                      : ""} label-div`}>
                      <label htmlFor="name">Name</label>
                      {errors.name && <span>Field Required</span>}
                    </div>
                    <input
                      className={`${errors.name
                      ? "input-error"
                      : ""}`}
                      type="text"
                      name="name"
                      placeholder="Alexei Ward"
                      {...register("name", {required: true, maxLength: 100})}/>
                  </div>
                  <div className="billing-form-group">
                    <div
                      className={`${errors.email
                      ? "error-class"
                      : ""} label-div`}>
                      <label htmlFor="email">Email Address</label>
                      {errors.email && <span>Field Required</span>}
                    </div>
                    <input
                      className={`${errors.email
                      ? "input-error"
                      : ""}`}
                      type="email"
                      name="email"
                      placeholder="alexei@mail.com"
                      {...register("email", {required: true, pattern: /^\S+@\S+$/i})}/>
                  </div>
                  <div className="billing-form-group">
                    <div
                      className={`${errors.phoneNumber
                      ? "error-class"
                      : ""} label-div`}>
                      <label htmlFor="telephone">Phone Number</label>
                      {errors.phoneNumber && <span>Field Required</span>}
                    </div>
                    <input
                      className={`${errors.phoneNumber
                      ? "input-error"
                      : ""}`}
                      type="tel"
                      name="telephone"
                      placeholder="202-555-0136"
                      {...register("phoneNumber", {required: true, min: 10, maxLength: 12})}/>
                  </div>
                </div>
              </div>
              <div className="shipping-info">
                <h5>SHIPPING INFO</h5>
                <div className="shipping-content">
                  <div className="shipping-form-group">
                    <div
                      className={`${errors.address
                      ? "error-class"
                      : ""} label-div`}>
                      <label htmlFor="address">Address</label>
                      {errors.address && <span>Field Required</span>}
                    </div>

                    <input
                      className={`${errors.address
                      ? "input-error"
                      : ""}`}
                      type="text"
                      name="address"
                      placeholder="1137 Williams Avenue"
                      {...register("address", {required: true})}/>
                  </div>
                  <div className="shipping-flex-div">
                    <div className="shipping-form-group">
                      <div
                        className={`${errors.zipCode
                        ? "error-class"
                        : ""} label-div`}>
                        <label htmlFor="zip-code">Zip Code</label>
                        {errors.zipCode && <span>Field Required</span>}
                      </div>

                      <input
                        className={`${errors.zipCode
                        ? "input-error"
                        : ""}`}
                        type="number"
                        name="zip-code"
                        placeholder="10001"
                        {...register("zipCode", {required: true, min: 5, maxLength: 5})}/>
                    </div>
                    <div className="shipping-form-group">
                      <div
                        className={`${errors.city
                        ? "error-class"
                        : ""} label-div`}>
                        <label htmlFor="city">City</label>
                        {errors.city && <span>Field Required</span>}
                      </div>

                      <input
                        className={`${errors.city
                        ? "input-error"
                        : ""}`}
                        type="text"
                        name="city"
                        placeholder="New York"
                        {...register("city", {required: true})}/>
                    </div>
                    <div className="shipping-form-group">
                      <div
                        className={`${errors.country
                        ? "error-class"
                        : ""} label-div`}>
                        <label htmlFor="country">Country</label>
                        {errors.country && <span>Field Required</span>}
                      </div>

                      <input
                        className={`${errors.country
                        ? "input-error"
                        : ""}`}
                        type="text"
                        name="country"
                        placeholder="United States"
                        {...register("country", {required: true})}/>
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
                          onClick={() => {
                          onChangeValue("cash")
                        }}
                          type="radio"
                          readOnly
                          checked={method === "cash"}/>
                      </div>
                    </div>
                    <div className="cash-money-div">
                      {method === "e-money"
                        ? (
                          <div className="e-money-div">
                            <div className="payment-form-group">
                              <div
                                className={`${errors.eNumber
                                ? "error-class"
                                : ""} label-div`}>
                                <label htmlFor="e-money-number">e-Money Number</label>
                                {errors.eNumber && <span>Field Required</span>}
                              </div>

                              <input
                                className={`${errors.eNumber
                                ? "input-error"
                                : ""}`}
                                type="number"
                                name="e-money-number"
                                placeholder="238521993"
                                {...register("eNumber", {required: true, min: 9, maxLength: 9})}/>
                            </div>
                            <div className="payment-form-group">
                              <div
                                className={`${errors.ePIN
                                ? "error-class"
                                : ""} label-div`}>
                                <label htmlFor="e-money-pin">e-Money PIN</label>
                                {errors.ePIN && <span>Field Required</span>}
                              </div>

                              <input
                                className={`${errors.ePIN
                                ? "input-error"
                                : ""}`}
                                type="number"
                                name="e-money-pin"
                                placeholder="6891"
                                {...register("ePIN", {required: true, min: 4, maxLength: 4})}/>
                            </div>
                          </div>

                        )
                        : (

                          <div className="cash-div">
                            <img src="../../assets/checkout/icon-cash-on-delivery.svg" alt="cash"/>
                            <p>The "Cash on Delivery" option enables you to pay in cash when our delivery
                              courier arrives at your residence. Just make sure your address is correct so
                              that your order will not be cancelled.</p>
                          </div>
                        )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="summary-div">
              <div className="summary-content">
                <h3 className="summary-title">SUMMARY</h3>
                <ul className="summary-cart">
                  {cartItems.map(item => {
                    return <li key={item.id}>
                      <div className="summary-cart-info">
                        <img className="summary-cart-img" src={`../.${item.img}`} alt="thumbnail"/>
                        <div className="summary-cart-desc">
                          <p className="name">{item.name}</p>
                          <p className="price">$ {item.price}</p>
                        </div>
                      </div>
                      <p className="summary-item-count">x{item.count}</p>
                    </li>
                  })
}

                </ul>
                <div className="totals-div">
                  <div className="subtotal-price">
                    <h4>SUBTOTAL</h4>
                    <p>{`$ ${subTotal.toLocaleString("en-US")}`}</p>
                  </div>
                  <div className="shipping-price">
                    <h4>SHIPPING</h4>
                    <p>$ 50</p>
                  </div>
                  <div className="vat-price">
                    <h4>VAT (INCLUDED)</h4>
                    <p>{`$ ${vatCost.toLocaleString("en-US")}`}</p>
                  </div>
                  <br/>
                  <div className="grand-total-price">
                    <h4>TOTAL</h4>
                    <p className="grand-total-color">$ {totalCost.toLocaleString("en-US")}</p>
                  </div>
                </div>
                <Button
                  onClick={toggleHandler}
                  className="pay-btn"
                  text={"CONTINUE & PAY"}
                  type={"type-1"}/>
              </div>
            </div>
          </form>
        </div>

        <Footer/>
      </div>
    </div>
  )
}

export default CheckoutPage