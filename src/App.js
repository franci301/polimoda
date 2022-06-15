// import './Assets/css/reset.css'
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import { Helmet } from "react-helmet";
import BlogPage from './Pages/BlogPage.jsx';
import HomePage from './Pages/HomePage.jsx';
import ProfilePage from './Pages/MyProfile.jsx';
import MyOrders from './Pages/MyOrders.jsx';
import Wishlist from './Pages/Wishlist.jsx';
import MyInformation from './Pages/MyInformation.jsx';
import ProductPage from './Pages/ProductPage.jsx';
import ShopPage from './Pages/shopPage.jsx';
import TestPage from './Pages/TestPage.jsx';
import LoginPage from './Pages/LoginPage.jsx';
import RegisterPage from './Pages/RegisterPage.jsx';
import ArchPage from './Layouts/archPage';
import VitelliPage from './Pages/VitelliPage.jsx';
import PamoloPage from './Pages/PamoloPage.jsx';
import ScrollToTop from './Layouts/ScrollToTop';
function App() {
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>ARKX | Emerging Fashion Brands To Match Your Identities</title>
        <link rel="canonical" href="https://arkx-store.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0 ,viewport-fit=cover " />
        <meta name="ARKX" content='Emerging Fashion Brands To Match Your Identities' />
      </Helmet>
      <Router>
        <ScrollToTop>
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
        </ScrollToTop>
      </Router>
    </div>
  );
}

export default App;
// kem was here (delete later)