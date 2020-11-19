import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Redirect from './demo/redirect'
import reportWebVitals from './reportWebVitals';
import CustomLink from './demo/customLink'
import 'antd/dist/antd.css'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
