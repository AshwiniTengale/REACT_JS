import { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './App.css';

function App() {
  const [number,setnumber]=useState(10);
 function increase(){
  setnumber(20);

 }
 const [startDate,setStartDate]=useState(new Date());

  return (
    <div className="App">
    
     <h1>Hello World!!!!!{number}</h1>
     <p onClick={()=>increase()}>Change</p>
     <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
    </div>
  );
}

export default App;
