import './App.css';
import Form from "./components/Form";
import RiskScore from './components/Result';
import React, {useState} from "react";
import Result2 from './components/Result2';

function App() {
  
    return (
        <div className="w-[100vw] flex justify-center items-center">
         <Form/>
            {/* <RiskScore /> */}
            {/* <Result2/> */}

        </div>
    );
}
export default App;
