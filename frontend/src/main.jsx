import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Layout from './Layout'
import { CreateIdea, DeleteIdea, EditIdea, Home, PageNotFound, Profile, Register, SingleIdea } from './pages'
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
      <Route element={<SingleIdea />} path='/idea/:id' />
      <Route element={<ProtectRoute><CreateIdea /></ProtectRoute>} path='idea/create' />
      <Route element={<ProtectRoute><EditIdea /></ProtectRoute>} path='idea/edit/:id' />
      <Route element={<ProtectRoute><DeleteIdea /></ProtectRoute>} path='idea/delete/:id' />
      <Route element={<ProtectRoute><Profile /></ProtectRoute>} path='/profile' />
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
