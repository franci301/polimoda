import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import BlogPage from './Pages/BlogPage.js';
import HomePage from './Pages/HomePage.js';
import ProfilePage from './Pages/MyProfile.js';
import MyOrders from './Pages/MyOrders.js';
import Wishlist from './Pages/Wishlist.js';
import MyInformation from './Pages/MyInformation.js';
import ProductPage from './Pages/ProductPage.js';
import ShopPage from './Pages/shopPage.js';
import TestPage from './Pages/TestPage.js';
import LoginPage from './Pages/LoginPage.js';
import RegisterPage from './Pages/RegisterPage.js';

function App() {
  return (
    <div className="App">
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <Router>
        <Routes>
          <Route path="/*" element={<HomePage />} />
          <Route path='/Blog/*' element={<BlogPage />} />
          <Route path='/MyProfile/*' element={<ProfilePage/>}/>
          <Route path='/MyOrders/*' element={<MyOrders/>}/>
          <Route path='/Wishlist/*' element={<Wishlist/>}/>
          <Route path='/MyInformation/*' element={<MyInformation/>}/>
          <Route path='/ProductPage/*'element={<ProductPage/>}/>
          <Route path='/ShopPage/*' element={<ShopPage/>}/>
          <Route path='/Test/*' element={<TestPage/>}/>
          <Route path='/LoginPage/*' element={<LoginPage/>}/>
          <Route path='/RegisterPage/*' element={<RegisterPage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
