import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import NotFound from './pages/NotFound'
import Register from './pages/Register'
import Landing from './pages/Landing'
import Login from './pages/Login'
import Home from './pages/Home'
import './globals.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Landing />,
  },
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '*',
    element: <NotFound />
  },
  {
    path: '/signin',
    element: <Login />
  },
  {
    path: '/signup',
    element: <Register />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
