import './App.css';
import Form from "./components/Form";
// import { Routes, Route} from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from "react";

function App() {
  return (
    <Router>
      <Routes>
  <Route index path="/" element={<Form />} />
</Routes>
    </Router>

   

  );
}

export default App;
