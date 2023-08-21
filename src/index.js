import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';


// import {Route, Routes, Router} from 'react-router-dom'

import App from './App';

// import App from "./App";


//id is given as app


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
// import { BrowserRouter } from 'react-router-dom';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
// ReactDOM.render(
  // <React.StrictMode>
    // <BrowserRouter>
  //   <Router>
  //     <Routes>
  //       <Route path='/' element={<App/>} />
  //     </Routes>
  //   </Router>,
  // document.getElementById('root')
   
    // </BrowserRouter>
  // </React.StrictMode>
// );


