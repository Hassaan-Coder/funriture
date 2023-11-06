import React from "react";
import { FaPhone } from "react-icons/fa";
import "./CallButton.css";

const CallButton = () => {
  const phoneNumber = "+923222899166"; // Replace with your phone number

  const makeCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <div className="fixed z-10 bottom-4 right-4">
      <div className="call-button" onClick={makeCall}>
        <FaPhone className="call-icon" />
      </div>
    </div>
  );
};

export default CallButton;
