// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './style.css';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Category from './pages/Category/Category';
import Cart from './pages/Cart/Cart';
import { CartProvider } from './components/CartContext/CartContext';
import categories from './assets/cateogories';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/category/:categoryId',
    element: <Category categories={categories} />,
  },
  {
    path: '/cart',
    element: <Cart />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </React.StrictMode>
);
