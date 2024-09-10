import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import App from './App.jsx'
import Home from './routes/Home.jsx'
import Login from './routes/Login.jsx'
import Dashboard from './routes/Dashboard.jsx'
import Error from './routes/Error.jsx'

const router = createBrowserRouter([{
  path:'/',element:<App/>,
  errorElement: <Error/>,

  children:[
    {path:'/', element:<Home/>},
    {path:'/login',element:<Login/>},
    {path:'/dashboard',element:<Dashboard/>},

  ]
}])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
