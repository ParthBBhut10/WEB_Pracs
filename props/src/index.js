import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <table>
      <tr>
        <td><App Label1="1" /></td>
        <td><App Label2="2" /></td>
        <td><App Label2="2" /></td>
      </tr>
    </table>
  </>
);

reportWebVitals();
