import { useState } from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import AppRoutes from './utils/AppRoutes.jsx'
import './index.css'
import './main.css'
import '../src/Scripts/main.js'
import '../src/Scripts/chart.sample.js'

function App() {
  //const [count, setCount] = useState(0)

   let router = createBrowserRouter(AppRoutes)  
  
  return<RouterProvider router={router}/>
}

export default App
