import React from "react";
import "./WhatsAppButton.css";
import { BsWhatsapp } from "react-icons/bs";
const WhatsAppButton = () => {
  const phoneNumber = "+923222899166"; // Replace with your WhatsApp phone number
  const message = "Hello!"; // Replace with your default message

  const openWhatsApp = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <button
      className="fixed z-10 p-3 text-white bg-green-500 rounded-full shadow-lg bottom-4 right-4"
      onClick={openWhatsApp}
    >
      <BsWhatsapp className="text-3xl" />
    </button>
  );
};
export default WhatsAppButton;
