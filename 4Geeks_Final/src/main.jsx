import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MyProvider } from './Context/context.jsx'
import Header from './assets/header.jsx';
import Footer from './assets/footer.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MyProvider>
    <Router>
      <Header />
      
        <Routes>
          <Route path="/" element={<App />} />
          {/* <Route path="subscribe" element={} />
          <Route path="login" element={} />
          <Route path="profile" element={} />
          <Route path="profile/manage" element={} />
          <Route path="marketplace" element={} />
          <Route path="subscriptions/:id" element={} />
          <Route path="cart" element={} />
          <Route path="checkout" element={} /> */}
        </Routes>

      <Footer />
    </Router>
    </MyProvider>
  </React.StrictMode>,
)
