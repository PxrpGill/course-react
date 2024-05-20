import React from 'react'
import ReactDOM from 'react-dom/client'

import "./style.css";
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';

import Home from './pages/Home/Home';
import About from './pages/About/About';
import Category from './pages/Category/Category';

import categories from "./assets/cateogories"



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/category/:categoryId",
    element: <Category categories={categories} />
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
