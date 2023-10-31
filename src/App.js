import './App.css';
import bgImp from './images/login-backgrnd.png';
import logo from './images/logo.png';
import emp from './images/employee_logo.png';

function App() {
  return (
      <>
        <div className='employee-logo'>
          <img src={emp}/>
        </div>
        <div className='container'>
          <div className='left-col'>
            <img src={bgImp} alt='' />
          </div>
          <div className='right-col'>
            <div className='centered'>
              <img src={logo} className='img' alt=''/>
            </div>
            <form id='form' className='flex flex-col'>
              <h2 style={{fontWeight: 400}}>Login as a Dealer</h2>
              <h3 style={{color: "darkblue", fontWeight: 400}}>Enter MSPIN</h3>
              <input type="text" placeholder='*******' />
              <button className='btn'>Sign In</button>
            </form>
          </div>
        </div>
      </>
  );

}

export default App;
