import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function AadharVerification() {
  const navigate = useNavigate();

  const [aadharNumber, setAadharNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [message, setMessage] = useState("");
  const [displayAadharForm, setDisplayAadharForm] = useState(true);
  const [displayOtpForm, setDisplayOtpForm] = useState(false);
  const [displayResult, setDisplayResult] = useState(false);
  const { schemeId } = useParams();

  const handleAadharSubmit = async () => {
    try {
      const response = await fetch("http://localhost:3108/document/sendotp", {
        method: "POST",
        body: JSON.stringify({ aadhar: aadharNumber }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      setMessage(data.message);
      setDisplayAadharForm(false);
      setDisplayOtpForm(true);
    } catch (error) {
      setMessage("Aadhar verification failed. Please try again.");
    }
  };

  const handleOTPSubmit = async () => {
    try {
      const response = await fetch(
        "http://localhost:3108/document/validation",
        {
          method: "POST",
          body: JSON.stringify({
            aadhar: aadharNumber,
            otp: otp,
            schemeid: schemeId,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await response.json();
      console.log(data);
      setDisplayResult(true);
      // navigate("/documentupload", { state: { data: data } });
    } catch (error) {
      setMessage("OTP verification failed. Please try again.");
    }
  };

  return (
    <div className="container mx-auto mt-10 p-6 bg-gray-100">
      <div className={displayAadharForm ? "block" : "hidden"}>
        <label htmlFor="aadhar" className="block mb-2 text-lg text-gray-600">
          Enter Aadhar Number:
        </label>
        <input
          type="text"
          id="aadhar"
          name="aadhar"
          title="Aadhar Card should be 12 digits"
          required
          value={aadharNumber}
          onChange={(e) => setAadharNumber(e.target.value)}
          className="border border-gray-400 p-2 mb-4"
        />
        <br />
        <button
          onClick={handleAadharSubmit}
          className="bg-blue-500 text-white p-2 rounded"
        >
          Submit Aadhar Number
        </button>
      </div>

      <div className={displayOtpForm ? "block" : "hidden"}>
        <label htmlFor="otp" className="block mb-2 text-lg text-gray-600">
          Enter OTP:
        </label>
        <input
          type="text"
          id="otp"
          name="otp"
          title="OTP should be 6 digits"
          required
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          className="border border-gray-400 p-2 mb-4"
        />
        <br />
        <button
          onClick={handleOTPSubmit}
          className="bg-blue-500 text-white p-2 rounded"
        >
          Submit OTP
        </button>
      </div>

      <div className={displayResult ? "block" : "hidden"}>
        <p id="response-message" className="text-lg text-gray-800">
          {message}
        </p>
      </div>
    </div>
  );
}

export default AadharVerification;
