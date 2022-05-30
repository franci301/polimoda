// import './Assets/css/reset.css'
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import { Helmet } from "react-helmet";
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
import ArchPage from './Layouts/archPage';
import VitelliPage from './Pages/VitelliPage.js';
import PamoloPage from './Pages/PamoloPage.js';
function App() {
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>ARKX | Emerging Fashion Brands To Match Your Identities</title>
        <link rel="canonical" href="https://arkx-store.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="ARKX" content='Emerging Fashion Brands To Match Your Identities' />
      </Helmet>
      <Router>
        <Routes>
          <Route path="/*" element={<HomePage />} />
          <Route path='/Blog/*' element={<BlogPage />} />
          <Route path='/MyProfile/*' element={<ProfilePage />} />
          <Route path='/MyOrders/*' element={<MyOrders />} />
          <Route path='/Wishlist/*' element={<Wishlist />} />
          <Route path='/MyInformation/*' element={<MyInformation />} />
          <Route path='/ProductPage/*' element={<ProductPage />} />
          <Route path='/ShopPage/*' element={<ShopPage />} />
          <Route path='/Test/*' element={<TestPage />} />
          <Route path='/LoginPage/*' element={<LoginPage />} />
          <Route path='/RegisterPage/*' element={<RegisterPage />} />
          <Route path='/ArchetypePage/*' element={<ArchPage />} />
          <Route path='/VitelliPage/*' element={<VitelliPage/>} />
          <Route path='/PamoloPage/*' element={<PamoloPage/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
