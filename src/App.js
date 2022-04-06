import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import HomePage from './Components/HomePage.js';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/*' element={<HomePage/>}>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
