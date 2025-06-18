import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// // Above is same as this in plain js
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './css/index.css';
// import App from './App';
// import { jsx as _jsx } from "react/jsx-runtime";
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(/*#__PURE__*/_jsx(React.StrictMode, {
//   children: /*#__PURE__*/_jsx(App, {})
// }));