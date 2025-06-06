import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Products } from './pages/Products';
import { About } from './pages/About';
import { CartPage } from './pages/CartPage';
import { VisitPage } from './pages/VisitPage';
import { CartProvider } from './components/CartContext';
export function App() {
  return <BrowserRouter>
      <CartProvider>
        <div className="min-h-screen bg-cream-50 text-brown-900">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/about" element={<About />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/visit" element={<VisitPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </CartProvider>
    </BrowserRouter>;
}