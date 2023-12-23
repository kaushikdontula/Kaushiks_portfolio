import React, { useState } from "react";
import NavBar from "./NavBar";
import Socials from "./Socials";
import emailjs from "emailjs-com";

export const ContactMe = (props) => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    message: "",
    contactInfo: "",
  });

  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handlePopupClose = () => {
    setShowPopup(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    // Use your emailJS service details
    const serviceId = "service_wc31m04";
    const templateId = "template_nj7831f";
    const userId = "GwUZgInDl7RdMBEec";

    const allFormData = {
      name: formData.name,
      company: formData.company,
      message: formData.message,
      contactInfo: formData.contactInfo,
    };

    try {
      const response = await emailjs.send(serviceId, templateId, allFormData, userId);

      console.log("Email sent successfully:", response);

      setFormData({
        name: "",
        company: "",
        message: "",
        contactInfo: "",
      });

      setShowPopup(true);
    } catch (error) {
      console.error("Error sending email:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <style>
        {`
          .contact-form {
            display: flex;
            flex-direction: column;
            align-items: center;
            max-width: 400px;
            margin: 120px auto;
            transition: background-color 0.3s ease; /* Add transition for smoother animation */
          }

          .contact-form label {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-bottom: 15px;
            color: #555; /* Set the text color to grey */
            width: 100%;
          }

          .contact-form textarea {
            height: 150px;
            font-size: 16px; /* Increase the font size */
          }

          .contact-form span {
            margin-bottom: 5px;
            font-size: 16px; /* Increase the font size */
          }

          .contact-form input,
          .contact-form textarea {
            width: 200%;
            padding: 15px; /* Increase the padding */
            margin: 5px 0;
            border: 1px solid #555; /* Set the border color to grey */
            border-radius: 20px; /* Add round edges */
            outline: none;
            font-size: 16px; /* Increase the font size */
          }

          .contact-form button {
            width: 200%;
            padding: 15px; /* Increase the padding */
            border: 5px solid #555; /* Set the border color to grey */
            border-radius: 20px; /* Add round edges */
            background-color: #555; /* Set the background color to grey */
            color: #fff; /* Set the text color to white */
            cursor: pointer;
            outline: none;
            font-size: 16px; /* Increase the font size */
          }

          .popup {
            display: ${showPopup ? "flex" : "none"};
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            padding: 40px; /* Increase padding for a larger popup */
            background-color: white;
            border: 1px solid #555;
            border-radius: 20px; /* Increase border-radius for rounder corners */
            box-shadow: 0 0 5px rgba(0, 0, 0, 0.3); /* Decrease box-shadow for a lighter effect */
            z-index: 1000;
            flex-direction: column; /* Adjust to column layout */
            align-items: center; /* Center items horizontally */
            text-align: center; /* Center text */
          }
      
          .popup p {
            color: #555; /* Set text color to grey */
            font-size: 18px; /* Increase font size for better readability */
            margin-bottom: 20px; /* Increase margin between text and button */
          }
      
          .popup button {
            background-color: #555;
            color: white;
            padding: 15px;
            border: none;
            border-radius: 10px; /* Increase border-radius for rounder corners */
            cursor: pointer;
            outline: none;
          }

          .loading-icon {
            border: 4px solid #f3f3f3; /* Light grey border */
            border-top: 4px solid #555; /* Dark grey border for animation */
            border-radius: 50%;
            width: 20px;
            height: 20px;
            animation: spin 1s linear infinite; /* Rotate the border for animation */
            margin-bottom: 10px; /* Add margin for better spacing */
          }

          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }

          @media screen and (max-width: 600px) {
            .contact-form {
              max-width: 300px;
              margin: 50px auto;
            }

            .contact-form label {
              margin-bottom: 10px;
            }

            .contact-form textarea {
              height: 100px;
              font-size: 14px;
            }

            .contact-form input,
            .contact-form textarea {
              width: 100%;
            }

            .contact-form button {
              width: 100%;
              padding: 12px;
            }

            .popup {
              padding: 20px;
            }

            .popup p {
              font-size: 16px;
              margin-bottom: 15px;
            }

            .popup button {
              padding: 12px;
            }
          }

        `}
      </style>

      <NavBar />
      <div>
        <p></p>
        <p></p>
        <p></p>
      </div>

      <form onSubmit={handleSubmit} className="contact-form">
        <label>
          <span style={{ fontSize: "18px" }}>Name</span>
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>

        <label>
          <span style={{ fontSize: "18px" }}>Company</span>
          <input type="text" name="company" value={formData.company} onChange={handleChange} />
        </label>

        <label>
          <span style={{ fontSize: "18px" }}>Email or Phone Number</span>
          <input type="text" name="contactInfo" value={formData.contactInfo} onChange={handleChange} />
        </label>

        <label>
          <span style={{ fontSize: "18px" }}>Message/Description</span>
          <textarea name="message" value={formData.message} onChange={handleChange} />
        </label>

        <button type="submit" disabled={loading}>
          {loading ? <div className="loading-icon"></div> : "Submit"}
        </button>
      </form>

      <div className="popup">
        {loading ? (
          <div className="loading-icon"></div>
        ) : (
          <>
            <p>Message recieved! I will be in touch with you shortly.</p>
            <button onClick={handlePopupClose}>Close</button>
          </>
        )}
      </div>

      <div>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
      </div>

      <Socials />
    </div>
  );
};
