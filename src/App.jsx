import { useState } from "react"
import { RouterProvider } from "react-router-dom"
import { Header, Sidebar } from "./layout"
import { router } from "./router"

function App() {
  return (
    <div className="duration-">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
