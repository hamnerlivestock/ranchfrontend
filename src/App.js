
import {Route, BrowserRouter, Switch} from 'react-router-dom';
// import { Redirect } from 'react-router';

// import Navbar from "./components/navigation/Navbar";
import { AboutUs} from "./components/pages/about/AboutUs"
import { Home } from "../src/components/pages/Home"
import Navbar from './components/navigation/Navbar'
// import { Switch } from 'react-router-dom/cjs/react-router-dom.min'
// import "../src/styles/App.css"
function App() {
  return (
    
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/about_us" component={AboutUs} />
          {/* <Redirect exact from="/home" /> */}
        </Switch>
      </BrowserRouter>
       
        {/* <Routes>
     
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
       
        </Routes> */}
      
    </div>
  );
}
export default App;
