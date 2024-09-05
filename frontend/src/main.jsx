import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Layout from './Layout'
import { CreateIdea, EditIdea, Home, PageNotFound, Register } from './pages'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { Login } from './pages'
import { Toaster } from 'react-hot-toast'
import { AuthContextProvider } from './context/context'
import { ProtectRoute } from './components'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='' element={<Layout />}>
      <Route index element={<Home />} path='/' />
      <Route element={<Login />} path='/login' />
      <Route element={<Register />} path='/register' />
      <Route element={<ProtectRoute><CreateIdea /></ProtectRoute>} path='idea/create' />
      <Route element={<ProtectRoute><EditIdea /></ProtectRoute>} path='idea/edit/:id' />
      <Route element={<PageNotFound />} path='*' />
    </Route >
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthContextProvider >
    <RouterProvider router={router} />
    <Toaster />
  </AuthContextProvider>
)
