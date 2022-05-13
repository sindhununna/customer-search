import React from "react";
import Navbar from "./components/Navbar";
import { BasicTable } from "./components/BasicTable";
import { Routes, Route } from "react-router-dom";
import Accounts from "./pages/Accounts";
// import Update from "./pages/Update";
// import CreateAccount from "./pages/CreateAccount";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      
      <Routes>    
       <Route path="/" exact element={<div className="App"><BasicTable /> </div>} />
       <Route path="components/BasicTable/:name" element={<Accounts />} /> 
        {/* <Route path="/pages/CreateAccount" element={<CreateAccount/>} /> */}
     {/* <Route path="/pages/Update" element={<Update/>} /> */}
      </Routes>
     
    </>
  );
}

export default App;
