import { BrowserRouter, Routes, Route } from "react-router-dom"
import { NotFound } from "./pages/NotFound"
import { Home } from "./pages/Home"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <h3>ghhhgghg ghghh</h3>
          <Route  index element={<Home/>}></Route >
          <Route  path="*" element={<NotFound/>}/>
        </Routes> 
      </BrowserRouter>
    </>
  )
}

export default App
