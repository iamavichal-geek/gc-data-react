import './App.css';
import Form from "./components/Form";
import React from "react";

function App() {
    const [result, setResult] = React.useState({})
    return (
        <div className="w-[100vw] flex justify-center items-center">
            <Form />
        </div>
    );
}
export default App;
