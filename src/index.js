import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
<<<<<<< HEAD
import App from './App';
=======
import Navbar from './components/navbar/Navbar'
import Mainview from './components/mainview/Mainview';
import Social from './components/social/Social';
import Projects from './components/projects/Projects';
>>>>>>> 219292eb19f8d9162f38ffb066641d4961c8794e

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<<<<<<< HEAD
    <App />
=======
    <Navbar />
    <Mainview />
    <Projects />
    <Social />
>>>>>>> 219292eb19f8d9162f38ffb066641d4961c8794e
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals