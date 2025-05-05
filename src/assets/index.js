import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Asegúrate de que la ruta sea correcta
import './styles.css'; // Si estás usando Tailwind o CSS personalizado

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
    <App />
    </React.StrictMode>
);
