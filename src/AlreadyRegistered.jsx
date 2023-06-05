import React, { useState } from 'react';
import './AlreadyRegistered.css'


const AlreadyRegistered = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [validationResult, setValidationResult] = useState('');

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  const handleOtpSend = (e) => {
    e.preventDefault();

    // Trigger OTP send API here
    // Replace the URL with your actual API endpoint
    fetch('/api/send-otp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ phoneNumber })
    })
      .then(response => response.json())
      .then(data => {
        // Handle the OTP send result
        if (data.success) {
          setOtpSent(true);
          setValidationResult('');
        } else {
          setOtpSent(false);
          setValidationResult('Failed to send OTP. Please try again.');
        }
      })
      .catch(error => {
        console.error('Error occurred while sending OTP:', error);
        setOtpSent(false);
        setValidationResult('An error occurred while sending OTP. Please try again.');
      });
  };

  const handleOtpSubmit = (e) => {
    e.preventDefault();

    // Trigger OTP validation API here
    // Replace the URL with your actual API endpoint
    fetch('/api/validate-otp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ phoneNumber, otp })
    })
      .then(response => response.json())
      .then(data => {
        // Handle the OTP validation result
        if (data.isValid) {
          setValidationResult('Validation successful!');
        } else {
          setValidationResult('Validation failed. Please check your OTP.');
        }
      })
      .catch(error => {
        console.error('Error occurred during OTP validation:', error);
        setValidationResult('An error occurred during OTP validation. Please try again.');
      });
  };

  return (
    <div className="otp-page">

      {!otpSent ? (
        <form className="phone-number-form" onSubmit={handleOtpSend}>
          <label>
            Enter Phone Number of User:
            <input type="text" value={phoneNumber} onChange={handlePhoneNumberChange} />
          </label>
          <button type="submit">Send OTP</button>
        </form>
      ) : (
        <form className="otp-form" onSubmit={handleOtpSubmit}>
          <label>
            OTP:
            <input type="text" value={otp} onChange={handleOtpChange} />
          </label>
          <button type="submit">Validate OTP</button>
        </form>
      )}
      {validationResult && <p className="validation-result">{validationResult}</p>}
    </div>
  );
};


export default AlreadyRegistered;
