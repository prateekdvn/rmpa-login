import './App.css';
import React, { useState } from 'react';
import bgImp from './images/login-backgrnd.png';
import logo from './images/logo.png';
import emp from './images/employee_logo.png';

export default function MSPIN() {

  const [otp, setOtp] = useState(['', '', '', '']);
  const otpInputRefs = [React.createRef(), React.createRef(), React.createRef(), React.createRef()];

  const handleOtpChange = (e, index) => {
    const value = e.target.value;
    if (isNaN(value)) return;
    const updateOtp = [...otp];
    updateOtp[index] = value;
    setOtp(updateOtp);

    if(index < otpInputRefs.length-1 && value !== '') {
      otpInputRefs[index+1].current.focus();
    }
  };

  const handleKeyDown = (e) => {
    if(e.key === 'Backspace' && otp.length === 0) {
      if(otpInputRefs.current.previousElementSibling) {
        otpInputRefs.current.previousElementSibling.focus();
      }
    }
  };

  const [showRightColDealer, setShowRightColDealer] = useState(false);

  const handleDealersButtonClick = () => {
    setShowRightColDealer(true);
    setShowRightColEmployee(false); // Hide the employee section
  };

  const [showRightColEmployee, setShowRightColEmployee] = useState(false);

  const handleEmployeeButtonClick = () => {
    setShowRightColEmployee(true);
    setShowRightColDealer(false); // Hide the dealer section
  };

  return (
    <>
      <div className='container'>
        <div className='left-col'>
          <img src={bgImp} alt='' />
          <div className='img-left-text'>
            <h1 style={{ fontWeight: 350, fontSize: '350%' }}>Rural Maps</h1>
          </div>
        </div>
        <div className='right-col' style={{ display: showRightColDealer ? 'block' : 'none' }}>
          <div className='centered'>
            <img src={logo} className='img' alt='' />
          </div>
          <form id='form' className='flex flex-col'>
            <h2 style={{ fontWeight: 400 }}>Login as a Dealer</h2>
            <label htmlFor='textbox' style={{ color: 'darkblue' }}>Enter MSPIN</label>
            <input type='text' placeholder='*******' />
            <button className='btn'>Sign In</button>
          </form>
        </div>

        <div className='right-col' style={{ display: showRightColEmployee ? 'block' : 'none' }}>
            <div className='centered'>
              <img src={logo} className='img' alt=''/>
            </div>
            <form id='form' className='flex flex-col'>
            <label htmlFor="textbox" style={{color: "darkblue"}}>Enter your OTP</label>

              <div className='otp-input-container'>
                {otp.map((digit, index) => (
                  <input 
                  key = {index} type = "text" value = {digit} 
                  onChange={(e) => {handleOtpChange(e, index)}}
                  onKeyDown={(e) => {handleKeyDown(e)}}
                ref = {otpInputRefs[index]}
                maxLength="1"
                  />
                ))}
              </div>

              <button className='btn'>Sign In</button>
            </form>
          </div>

        <button className='img-text' onClick={handleDealersButtonClick} style={{ cursor: 'pointer' }}>
          <h2 style={{ fontWeight: 400 }}>Dealers</h2>
        </button>
        <img
          src={emp}
          className='img-logo'
          alt=''
          onClick={handleEmployeeButtonClick}
          style={{ cursor: 'pointer' }}
        />
      </div>
    </>
  );
}
