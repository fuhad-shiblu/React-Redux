import { useSelector } from "react-redux"
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Home from "./assets/Pages/Home"

function App() {
  const myRoute = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Home/>}/>
      </Route>
    )
  )
  return (
    <>
    <RouterProvider router={myRoute}/>
    </>
  )
}
export default App