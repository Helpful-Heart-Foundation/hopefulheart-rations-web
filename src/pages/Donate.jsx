import React, { useState, useRef } from "react";
// import Link from "next/link";
import emailjs from "@emailjs/browser";

const DonatePage = () => {
  const form = useRef(); // Reference to the form
  const [popupMessage, setPopupMessage] = useState(""); // State for pop-up message
  const [popupVisible, setPopupVisible] = useState(false); // State for pop-up visibility
  const [isError, setIsError] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    country: "",
    comment: "",
    amount: "",
    upiTransactionId: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Donation Details:", formData);

    try {
      // Send email using EmailJS
      await emailjs.send(
        "service_435oocy", // Service ID
        "template_nelwwle", // Template ID
        {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          address: formData.address,
          country: formData.country,
          comment: formData.comment,
          amount: formData.amount,
          upiTransactionId: formData.upiTransactionId,
        },
        "iaoIQ7q9B7zNIkDuP" // Public ID
      );

      showPopup("Donation details sent successfully!", false); // Show success message
    } catch (error) {
      console.error("Failed to send email:", error);
      showPopup("Failed to send donation details. Please try again.", true);
    }

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      country: "",
      comment: "",
      amount: "",
      upiTransactionId: "",
    });
  };

  const showPopup = (message, error) => {
    setPopupMessage(message);
    setIsError(error);
    setPopupVisible(true);
    setTimeout(() => {
      setPopupVisible(false);
    }, 3000); // Hide after 3 seconds
  };

  return (
    <section className="donate-area2 py-12 bg-gray-100">
      <div className="container mx-auto">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full lg:w-8/12 px-4 mb-8 lg:mb-0">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="donate__title text-2xl font-semibold text-gray-800 mb-6">
                Enter Your Donation
              </h3>
              <div className="form-shared">
                <form ref={form} onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 gap-6 mb-6">
                    <div className="yellow-form relative">
                      <input
                        type="number"
                        name="amount"
                        value={formData.amount}
                        onChange={handleChange}
                        className="form-control w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Donation Amount"
                        required
                      />
                      <span className="dollar-sign absolute top-1/2 transform -translate-y-1/2 left-4 text-gray-500">
                        $
                      </span>
                      <span className="number-symble absolute top-1/2 transform -translate-y-1/2 right-4 text-gray-500">
                        .00
                      </span>
                    </div>
                  </div>

                  <h3 className="donate__title text-2xl font-semibold text-gray-800 mb-6">
                    Personal Info
                  </h3>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="form-control w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="First Name"
                      required
                    />
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="form-control w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Last Name"
                      required
                    />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-control w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Email Address"
                      required
                    />
                    <input
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="form-control w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Phone Number"
                      required
                    />
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      className="form-control w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Address"
                    />
                    <select
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      className="form-control w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    >
                      <option value="" disabled>
                        Country
                      </option>
                      <option value="USA">USA</option>
                      <option value="UK">UK</option>
                      <option value="Pakistan">Pakistan</option>
                      <option value="Bangladesh">Bangladesh</option>
                      <option value="India">India</option>
                    </select>
                  </div>

                  <textarea
                    name="comment"
                    value={formData.comment}
                    onChange={handleChange}
                    className="textarea w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-6"
                    placeholder="Leave a Comment"
                  ></textarea>

                  <h3 className="donate__title text-2xl font-semibold text-gray-800 mb-6">
                    Payment Info
                  </h3>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                    <input
                      type="text"
                      name="upiTransactionId"
                      value={formData.upiTransactionId}
                      onChange={handleChange}
                      className="form-control w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="UPI Transaction ID"
                      required
                    />
                  </div>

                  <div className="text-center">
                    <button
                      type="submit"
                      className="theme-btn bg-blue-500 text-white py-2 px-4 rounded-lg"
                    >
                      Donate Now
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-4/12 px-4">
            <div className="sidebar-shared">
              <div className="text-center mb-6">
                <p className="text-gray-700 font-medium mb-2">
                  Scan the QR code below to make a payment
                </p>
                <img
                  src="/images/qr_code.jpeg"
                  alt="Google Pay QR Code"
                  className="w-full h-auto" // Update the class to make the image take full width
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {popupVisible && (
        <div
          className={`fixed top-4 right-4 p-4 rounded-lg shadow-lg text-white transition-opacity duration-500 ${isError ? "bg-red-500" : "bg-green-500"
            }`}
        >
          {popupMessage}
        </div>
      )}
    </section>
  );
};

export default DonatePage;
