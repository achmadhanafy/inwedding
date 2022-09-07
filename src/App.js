import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { LandingMain } from './modules/landing';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<LandingMain/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
