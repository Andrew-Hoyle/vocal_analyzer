import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import { FirebaseAppProvider} from 'reactfire';
// import 'firebase/auth';
// import {firebaseConfig} from './firebaseConfig';


ReactDOM.render(
  <React.StrictMode>
    {/* <FirebaseAppProvider firebaseConfig={ firebaseConfig }>   */}
        {/* Wrap Visualizer in  */}
        {/* Main App Here */}
        <App />

        {/* </FirebaseAppProvider> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals