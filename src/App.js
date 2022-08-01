import './App.css';
import Staff from "./Components/Staff";
import Student from "./Components/Student";
import Course from './Components/Course';
import { useState } from 'react';

function App() {
  const [data,setdata]=useState();
  return (
    <div className="App">
      <div className="container" >
        <div className="header">Indian International Public School</div>
        <div className="Details">
          <div className="menu1" onClick={()=>setdata("menu1")}> Staff Details</div>
          <div className="menu2" onClick={()=>setdata("menu2")}> Course Details</div>
          <div className="menu3" onClick={()=>setdata("menu3")}> Students Details</div>
        </div>
        <div className="main">
       { data=="menu1"?  <Staff></Staff>:""}
       { data=="menu2"? <Course></Course> :""}
       { data=="menu3"?  <Student></Student> :""}
        </div>
      </div>
    </div>
  );
}

export default App;
