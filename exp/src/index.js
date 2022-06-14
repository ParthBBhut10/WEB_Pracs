import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Count from './count';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className="App">
    <Count />
  </div>
);
reportWebVitals();
