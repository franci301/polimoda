import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import BlogPage from './Pages/BlogPage.js';
import HomePage from './Pages/HomePage.js';
import ProfilePage from './Pages/MyArchetypes.js';
import ProductPage from './Pages/ProductPage.js';
import ShopPage from './Pages/shopPage.js';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/*" element={<HomePage />} />
          <Route path='/Blog/*' element={<BlogPage />} />
          <Route path='/MyProfile/*' element={<ProfilePage/>}/>
          <Route path='/ProductPage/*'element={<ProductPage/>}/>
          <Route path='/ShopPage/*' element={<ShopPage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
