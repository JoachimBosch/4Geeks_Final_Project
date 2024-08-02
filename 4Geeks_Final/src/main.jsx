import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MyProvider } from './Context/context.jsx'
import Header from './assets/header.jsx';
import Footer from './assets/footer.jsx';
import Login from './assets/login.jsx';
import Marketplace from './assets/marketplace.jsx';
import Profile from './assets/profile.jsx';
import Subscribe from './assets/subscribe.jsx';
import Manage from './assets/manage.jsx';
import Subscription from './assets/subscription.jsx';
import ShoppingCart from './assets/cart.jsx';
import Checkout from './assets/checkout.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MyProvider>
    <Router>
      <Header />
      
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="subscribe" element={<Subscribe />} />
          <Route path="login" element={<Login />} />
          <Route path="profile" element={<Profile />} />
          <Route path="profile/manage" element={<Manage />} />
          <Route path="marketplace" element={<Marketplace />} />
          <Route path="subscriptions/:id" element={<Subscription />} />
          <Route path="cart" element={<ShoppingCart />} />
          <Route path="checkout" element={<Checkout />} />
          {/* <Route path="about" element={} /> */}
        </Routes>

      <Footer />
    </Router>
    </MyProvider>
  </React.StrictMode>,
)
