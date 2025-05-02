import React from 'react'
import { RouterProvider } from 'react-router-dom'
import router from './router'
import { AppContextProvider } from './contexts/appContext'
import './styles/general.css'

const App = () => {
  return (
    <AppContextProvider>
      <RouterProvider router={router} />
    </ AppContextProvider>
  )
}

export default App
