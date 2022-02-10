import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import NavBar from './Container/NavBar/NavBar';
import HomePage from './Container/Home/HomePage';
// import AboutMe from './Container/AboutMe/AboutMe';
// import Projects from './Container/Projects/Projects';
// import ContactMe from './Container/ContactMe/ContactMe';

function App() {
  return (
    <Router>
        <div className="App">
        <NavBar />

        <Routes >
          <Route path='/Portfolio' exact element={ <HomePage /> }/>
          {/* <Route path='/about-me' exact element= { <AboutMe /> }/> */}
          {/* <Route path='/projects' exact element= { <Projects /> }/> */}
          {/* <Route path='/contact-me' exact element= { <ContactMe /> }/> */}
        </Routes>
        
        
        
        </div>
    </Router>
  );
}

export default App;
