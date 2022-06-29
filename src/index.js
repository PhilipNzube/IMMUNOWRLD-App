import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from "./LoginPage.js";
import MyApp from "./Home.js";

function START(){
    return(
        <>
        <BrowserRouter basename>
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/Home" element={<MyApp/>}/>
        </Routes>
        
        </BrowserRouter>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<START/>);
