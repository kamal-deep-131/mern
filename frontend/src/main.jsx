import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Layout from './Layout'
import { CreateIdea, Home, Register } from './pages'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { Login } from './pages'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='' element={<Layout />}>
      <Route index element={<Home />} path='/' />
      <Route element={<Login />} path='/login' />
      <Route element={<Register />} path='/register' />
      <Route element={<CreateIdea />} path='idea/create' />

    </Route >
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
