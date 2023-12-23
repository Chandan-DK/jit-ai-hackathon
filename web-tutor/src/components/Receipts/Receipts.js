import React from "react";
import "./Receipts.css"; // You can create a separate CSS file for styling
import payment from "./images/tutor-payment-image.jpg";
import receipt from "./images/receipt.jpg";

const Receipts = () => {
  return (
    <div className="receipts-container">
      <div className="receipt-box">
        <h2>Invoice</h2>
        <img src={receipt} alt="Invoice" />
      </div>
      <div className="receipt-box">
        <h2>Tutor Payment</h2>
        <img src={payment} alt="Tutor Payment" />;
      </div>
    </div>
  );
};

export default Receipts;
