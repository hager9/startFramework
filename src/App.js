
import React from 'react'
import { Navigate, RouterProvider, createBrowserRouter, createHashRouter } from "react-router-dom"
import Home from './Components/Home/Home'
import Layout from './Components/Layout/Layout'
import About from "./Components/About/About"
import Portfolio from "./Components/Portfolio/Portfolio"
import Contact from "./Components/Contact/Contact"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import "@fortawesome/fontawesome-free/css/all.min.css"
// import "./style.css"
import "./index.css"

export default function App() {

  let routers = createHashRouter([
    {
      path: "", element: <Layout />, children: [
      {path: "" , element: <Navigate to={"home"}/>},
      {path: "home", element: <Home/>},
      {path: "about" , element: <About/>},
      {path: "portfolio" , element: <Portfolio/>},
      {path: "contact" , element: <Contact/>},
    ]}
  ])

  return (
    <RouterProvider router={routers}>

    </RouterProvider>

  )
}

