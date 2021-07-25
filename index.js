import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Header from '../src/Components/Hello'
import Footer from '../src/Components/Welcome'
// import App from './App'



import reportWebVitals from './reportWebVitals';


ReactDOM.render(
 <div>

    <Header/>
    {/* <App /> */}
    <Footer/>
  

 </div>,
  document.getElementById('root')
);


