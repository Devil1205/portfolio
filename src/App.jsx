import Navbar from "./components/Navbar/Navbar"
import Home from "./components/Home/Home"
import './App.css'
import Projects from "./components/Projects/Projects"
import About from "./components/About/About"
import {
  HashRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {

  const scrollToElement = (element) => {
    console.log(element);
    document.querySelector(element).scrollIntoView();
  }

  return (
    <Router>
      <Navbar scrollToElement={scrollToElement} />
      <Routes>
        <Route exact path="/" element={<><Home scrollToElement={scrollToElement}/><About scrollToElement={scrollToElement}/><Projects scrollToElement={scrollToElement}/></>}/>
      </Routes>
    </Router>
  )
}

export default App;
