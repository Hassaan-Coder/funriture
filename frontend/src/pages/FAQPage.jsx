import React, { useState } from "react";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import styles from "../styles/styles";
import Footer2 from "../components/Layout/Footer2";

const FAQPage = () => {
  return (
    <div>
      <Header activeHeading={5} />
      <Faq />
      <Footer2 />
    </div>
  );
};

const Faq = () => {
  const [activeTab, setActiveTab] = useState(0);

  const toggleTab = (tab) => {
    if (activeTab === tab) {
      setActiveTab(0);
    } else {
      setActiveTab(tab);
    }
  };

  return (
    <div className={`${styles.section} my-8`}>
      <h2 className="mb-8 text-3xl font-extrabold text-gray-900">F A Q' S</h2>
      <div className="mx-auto space-y-4">
        {/* single Faq */}

        <div className="pb-4 border-b border-gray-200">
          <button
            className="flex items-center justify-between w-full"
            onClick={() => toggleTab(2)}
          >
            <span className="font-bold text-gray-900 font-Roboto">
              Q1 . What is your return policy?
            </span>
            {activeTab === 2 ? (
              <svg
                className="w-6 h-6 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            )}
          </button>
          {activeTab === 2 && (
            <div className="mt-4">
              <p className="text-gray-500 font-Poppins">
                1 . Damage During Shipping: If your order arrives damaged during
                shipping or with any other damage before it reaches your
                doorstep.
              </p>
              <p className="text-[#c56262] font-Poppins">
                2 . Item Not as Described: If the received item doesn't match
                the product description or significantly differs from what was
                displayed. To start a return, please call us at +923003220839
                with your order number and a brief explanation of the issue.
                We're here to help with the return process in these cases
              </p>
            </div>
          )}
        </div>

        <div className="pb-4 border-b border-gray-200">
          <button
            className="flex items-center justify-between w-full"
            onClick={() => toggleTab(3)}
          >
            <span className="font-bold text-gray-900 font-Roboto">
              Q2 . How do I track my order?
            </span>
            {activeTab === 3 ? (
              <svg
                className="w-6 h-6 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            )}
          </button>
          {activeTab === 3 && (
            <div className="mt-4">
              <p className="text-gray-500 font-Poppins">
                To track your order, log in to your account on our website and
                select "Track Order." You can also call us at 03003220839, and
                we'll assist with tracking your order.
              </p>
            </div>
          )}
        </div>

        <div className="pb-4 border-b border-gray-200">
          <button
            className="flex items-center justify-between w-full"
            onClick={() => toggleTab(4)}
          >
            <span className="font-bold text-gray-900 font-Roboto">
              Q3 . How do I contact customer support?
            </span>
            {activeTab === 4 ? (
              <svg
                className="w-6 h-6 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            )}
          </button>
          {activeTab === 4 && (
            <div className="mt-4">
              <p className="text-gray-500 font-Poppins">
                ANS: Feel free to reach out to our customer support team by
                calling us at +923003220839 or by messaging us on WhatsApp
                between 9 am and 11 pm, seven days a week. We are here to assist
                you.
              </p>
            </div>
          )}
        </div>

        <div className="pb-4 border-b border-gray-200">
          <button
            className="flex items-center justify-between w-full"
            onClick={() => toggleTab(5)}
          >
            <span className="font-bold text-gray-900 font-Roboto">
              Q4 . Can I change or cancel my order?
            </span>
            {activeTab === 5 ? (
              <svg
                className="w-6 h-6 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            )}
          </button>
          {activeTab === 5 && (
            <div className="mt-4">
              <p className="text-gray-500 font-Poppins">
                ANS: You can change or cancel your order by calling us at
                +923003220839 within 24 hours of placing it. After this 24-hour
                window, changes or cancellations will not be possible.
              </p>
            </div>
          )}
        </div>

        <div className="pb-4 border-b border-gray-200">
          <button
            className="flex items-center justify-between w-full"
            onClick={() => toggleTab(7)}
          >
            <span className="font-bold text-gray-900 font-Roboto">
              Q5 . How can I make a payment?
            </span>
            {activeTab === 7 ? (
              <svg
                className="w-6 h-6 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            )}
          </button>
          {activeTab === 7 && (
            <div className="mt-4">
              <p className="text-gray-500 font-Poppins">
                We accept payments through bank accounts and also offer Cash on
                Delivery (COD). For COD orders, we'll contact you via the phone
                number you provide to arrange an advance payment through a bank
                account, with the remainder payable during COD delivery.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
