import React from 'react';
import { useState } from 'react';
import './App.css';

function App() {

  const [investment,setInvestment] = useState('');
  const [rate,setRate] = useState('');
  const [time,setTime] = useState('');

  const [returnamount,setReturnamount] = useState('');

  const handleChangeInvestment = (e) => {
    setInvestment(e.target.value);
    e.preventDefault();
  }

  const handleChangeRate = (e) => {
    setRate(e.target.value);
    e.preventDefault();
  }

  const handleChangeTime = (e) => {
    setTime(e.target.value);
    e.preventDefault();
  }

  const calculate_sip = (e) => {
    e.preventDefault();

    console.log(typeof(investment));
    console.log(typeof(Number(investment)));
    console.log("These are the values - ",investment," ",rate," ",time);

    const p = Number(investment);
    const i = Number(rate)/100/12;
    const n = Number(time)*12;

    console.log("This is p ka value - ",p);
    console.log("This is i ka value - ",i);
    console.log("This is n ka value - ",n);
    
    // Amount invested × ({[1 + Periodic rate of interest] Total number payments – 1} / Periodic rate of interest) × (1 + Periodic rate of interest)
   
    const sum=  p*(Math.pow((1+i),n)-1)*((1+i)/i);

    const final_sum = sum.toFixed(2);

    const numerical_final_sum = Number(final_sum);

    console.log(typeof("type of final_sum - ",numerical_final_sum));

    const formattedSum = numerical_final_sum.toLocaleString("en-IN");
    
    setReturnamount(formattedSum); 
    console.log(returnamount);
  }

  return (
    <div className="App">
      <div className='container'>
        <h1>SIP Calculator</h1>
        <div className='functional-container'>
          <form className='form-container'>
            <input type="number" className='input-amount' value={investment} onChange={handleChangeInvestment} placeholder='Enter Monthly Investment in INR'/>
            <input type="number" className='input-rate' value={rate} onChange={handleChangeRate} placeholder='Enter Expected Return Rate in %age'/>
            <input type="number" className='input-time' value={time} onChange={handleChangeTime} placeholder="Enter Time Period in years"/>
            <div className='submission_btn'>
              <button onClick={calculate_sip}>Calculate</button>
            </div>
          </form>
          <div className='answer'>
            {returnamount&&<h1><span style={{color:'#dcfce7'}}>Total Wealth Generated :</span> ₹ {returnamount} 💸</h1>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
