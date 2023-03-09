import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
/* import App from './components/App'; */
import SampleFunctionalComponent from './components/SampleFunctionalComponent';
import SampleClassComponent from './components/SampleClassComponent';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SampleFunctionalComponent name="John Philip">
      <h1>Hello Manila</h1>
      {/* <h2>Hello Manila</h2>
      <h3>Hello Manila</h3> */}
    </SampleFunctionalComponent>
    <SampleClassComponent name="Tena">
      <h1>Hello Africa</h1>
      {/* <h2>Hello Africa</h2>
      <h3>Hello Africa</h3> */}
    </SampleClassComponent>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
