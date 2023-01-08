
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import NoteState from './context/notes/NoteState';
import Navbar from './components/Navbar';
import { Home } from './components/Home';
import About from './components/About';

function App() {
  return (
    <>
     <Navbar/>
{/*     
    <NoteState>
    <Router>
     <Navbar/>
     <div className="container">
      <Routes>
      <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About/>
          </Route>
          </Routes>
          </div>
        </Router>
        </NoteState> */}
  </>
  );
}

export default App;
