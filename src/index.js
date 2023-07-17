
import ReactDOM from 'react-dom/client';
import './index.css';
import React, {useState, useEffect} from 'react';
import FetchComponent  from './App.js';
import IsdayComponent from './IsdayComponent';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<>
<div className='box-model'>
    <div className='box'>
   
       <FetchComponent />
   
    </div>
</div>
</>

)
