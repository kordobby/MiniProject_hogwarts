import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from "react-router-dom";
// Global CSS
import GlobalStyled from "./Components/GlobalStyled/GlobalStyled.jsx";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        {/* Global CSS */}
        <GlobalStyled />
        <App />
    </BrowserRouter>
);
