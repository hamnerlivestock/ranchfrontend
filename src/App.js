
import {Route, Routes, Link} from 'react-router-dom';
// import Navbar from "./components/navigation/Navbar";
import { AboutUs} from "./components/pages/about/AboutUs";
import { Home } from './components/pages/Home';
// import "../src/styles/App.css"
function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
        </ul>
      </nav>
   
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
      
      </Routes>
    </>
  )
}
export default App
