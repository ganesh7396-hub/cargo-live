import React from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './Home';
import About from "./About"
import Contact from "./Contact"
import Service from "./Service"
import Login from "./Login"

const Body = () => {
const appRouter=createBrowserRouter([
  {path:"/",element:<Home/>},
  {path:"/about",element:<About/>},
  {path:"/contact",element:<Contact/>},
  {path:"/service",element:<Service/>},
  {path:"/login",element:<Login/>}

])


  return (
    <div>
        <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body
