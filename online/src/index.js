import React from 'react';
import ReactDOM from 'react-dom/client'; // Use 'react-dom/client' for React 18+
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import App from './App'; // Adjust the path as needed

// Create a root for rendering
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the application wrapped in BrowserRouter
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
