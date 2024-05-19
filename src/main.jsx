import React from 'react'
import ReactDOM from 'react-dom/client'

import "./style.css";
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';

import Home from './pages/Home/Home';
import About from './pages/About/About';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/about",
    element: <About />
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
