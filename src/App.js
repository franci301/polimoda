import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import BlogPage from './Components/BlogPage.js';
import HomePage from './Components/HomePage.js';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/*" element={<HomePage />} />
          <Route path='/Blog/*' element={<BlogPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
