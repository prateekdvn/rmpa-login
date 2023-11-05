import './App.css';
import React, {useState} from 'react';
import bgImp from './images/login-backgrnd.png';
import logo from './images/logo.png';
import emp from './images/employee_logo.png';

export default function MSPIN() {

  return (
      <>
        <div className='container'>
          <div className='left-col'>
              <img src={bgImp} alt='' /> 
              <div className='img-left-text'><h1 style={{fontWeight: 350, fontSize: "350%"}}>Rural Maps</h1></div>
          </div>
          <div className='right-col'>
            <div className='centered'>
              <img src={logo} className='img' alt=''/>
            </div>
            <form id='form' className='flex flex-col'>
              <h2 style={{fontWeight: 400}}>Login as a Dealer</h2>
              <label for="textbox" style={{color: "darkblue"}}>Enter MSPIN</label>
              <input type="text" placeholder='*******' />
              <button className='btn'>Sign In</button>
            </form>
          </div>
          <div className='img-text'><h2 style={{fontWeight: 400}}>Dealers</h2></div>
          <img src={emp} className='img-logo' alt='' />
        </div>
      </>
  );

}
