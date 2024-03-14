import './App.css';
import Form from "./components/Form";
import RiskScore from './components/Result';
import React from "react";

function App() {
    const [result, setResult] = React.useState({})
    return (
        <div className="w-[100vw] flex justify-center items-center">
            {/* <Form /> */}
            <RiskScore />
        </div>
    );
}
export default App;
