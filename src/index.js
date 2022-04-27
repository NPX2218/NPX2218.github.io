////////////////////////////////////
// IMPORTING LIBRARIES
////////////////////////////////////

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '../node_modules/normalize.css'
import { BrowserRouter } from 'react-router-dom';

////////////////////////////////////
// RENDERING THE DOM 
////////////////////////////////////

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>   
  </React.StrictMode>,
  document.getElementById('root')
);

