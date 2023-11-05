import React from "react";
import "./WhatsAppButton.css";
import { BsWhatsapp } from "react-icons/bs";

const WhatsAppButton = () => {
  const phoneNumber = "+923003220839"; // Replace with your WhatsApp phone number
  const message = "Hello!"; // Replace with your default message

  const openWhatsApp = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <div className="fixed z-10 bottom-4 right-4">
      <div className="whatsapp-button" onClick={openWhatsApp}>
        <BsWhatsapp className="whatsapp-icon" />
      </div>
    </div>
  );
};

export default WhatsAppButton;
