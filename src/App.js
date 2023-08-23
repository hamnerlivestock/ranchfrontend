
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import { Redirect } from 'react-router';

// import Navbar from "./components/navigation/Navbar";
import { AboutUs} from "./components/pages/about/AboutUs";
import { Home } from "./components/pages/Home";
import Navbar from './components/navigation/Navbar';
// import { Switch } from 'react-router-dom/cjs/react-router-dom.min'
import "../src/styles/App.scss";
function App() {
  return (
    
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route path="/home" component={Home} />
          <Route path="/about_us" component={AboutUs} />
          <Redirect exact from="/" to="/home" />
        </Switch>
      </BrowserRouter>
       
        {/* <Routes>
     
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
       
        </Routes> */}
      
    </div>
  );
// import {Route, Routes, Link} from 'react-router-dom';
// // import Navbar from "./components/navigation/Navbar";
// import { AboutUs} from "./components/pages/about/AboutUs";
// import { Home } from './components/pages/Home';
// // import "../src/styles/App.css"
// function App() {
//   return (
//     <>
//       <nav>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/about">About Us</Link>
//           </li>
//         </ul>
//       </nav>
   
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<AboutUs />} />
      
//       </Routes>
//     </>
//   )
}
export default App;
