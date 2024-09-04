import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Layout from './Layout'
import { Home } from './pages'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<Home />} path='/' />

    </Route >
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
