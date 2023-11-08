import './App.css';
import React, { useState } from 'react';
import bgImp from './images/login-backgrnd.png';
import logo from './images/logo.png';
import emp from './images/employee_logo.png';

function App() {
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [mspPin, setMSPPin] = useState('');
  const [otp, setOtp] = useState(['', '', '', '']);
  const otpInputRefs = [React.createRef(), React.createRef(), React.createRef(), React.createRef()];
  const [wrongInput, setWrongInput] = useState('');

  const handleMSPSignIn = () => {
    if (mspPin.length === 6) {
      const sampleValues = ['123456', '654321', '987654', '456789', '111111'];

      if (sampleValues.includes(mspPin)) {
        setShowOtpInput(true);
        setWrongInput(''); 
      } else {
        setWrongInput('Wrong input. Please check your MSPIN.');
      }
    }

    // axios.post('/validate-mspin', { mspPin })
    // .then((response) => {
    //   if (response.data.valid) {
    //     setShowOtpInput(true);
    //     setWrongInput('');
    //   } else {
    //     setWrongInput('Wrong input. Please check your MSPIN.');
    //   }
    // })
    // .catch((error) => {
    //   console.error(error);
    //   setWrongInput('MSPIN not validated.');
    // });
    
    else {
      setWrongInput('MSPIN should be 6 digits');
    }
  };

  const handleOtpChange = (e, index) => {
    const value = e.target.value;
    if (isNaN(value)) return;
    const updatedOtp = [...otp];
    updatedOtp[index] = value;
    setOtp(updatedOtp);

    if (index < otpInputRefs.length - 1 && value !== '') {
      otpInputRefs[index + 1].current.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && otp[index] === '') {
      if (index > 0) {
        otpInputRefs[index - 1].current.focus();
      }
    }
  };

  return (
    <>
      <div className='container'>
        <div className='left-col'>
          <img src={bgImp} alt='' />
          <div className='img-left-text'>
            <h1 className='heading'>Rural Maps</h1>
          </div>
        </div>
        <div className='right-col'>
          <div className='centered'>
            <img src={logo} className='img' alt='' />
          </div>
          <form id='form' className='flex flex-col'>
            {showOtpInput ? (
              <>
                <label style={{ color: "darkblue" }}>Enter your OTP</label>
                <div className='otp-input-container'>
                  {otp.map((digit, index) => (
                    <input
                      key={index}
                      type="text"
                      value={digit}
                      onChange={(e) => { handleOtpChange(e, index) }}
                      onKeyDown={(e) => { handleKeyDown(e, index) }}
                      ref={otpInputRefs[index]}
                      maxLength="1"
                    />
                  ))}
                </div>
                <button className='btn'>Sign In</button>
              </>
            ) : (
              <>
                <h2 style={{ fontWeight: 400 }}>Login as a Dealer</h2>
                <label htmlFor='textbox' style={{ color: 'darkblue' }}>Enter MSPIN</label>
                <input type='text' placeholder='*******' onChange={(e) => setMSPPin(e.target.value)} />
                <button className='btn' onClick={handleMSPSignIn}>Sign In</button>
              </>
            )}
          </form>
        </div>

        <button
          className={`img-text ${showOtpInput ? '' : 'selected'}`}
          onClick={() => { setShowOtpInput(false); setWrongInput(''); }}
        >
          <h2 style={{ fontWeight: 400 }}>Dealers</h2>
        </button>
        <img
          src={emp}
          className={`img-logo ${showOtpInput ? 'selected' : ''}`}
          onClick={() => { setShowOtpInput(true); setWrongInput(''); }}
        />
      {wrongInput && <div className='wrong-input-display' style={{display: 'block', top: '20px'}}>{wrongInput}</div>}
      </div>
    </>
  );
}

export default App;
