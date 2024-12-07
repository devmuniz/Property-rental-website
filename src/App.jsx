import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./Header/Header"
import Body from "./pages/FirstView/Body/Body"
import View2 from "./pages/SecondView/Body/Body"

function App() {
  return (
    <>

    <Header />

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/View2" element={<View2 />} />
        <Route path="*" element={<h1>Página não encontrada!</h1>} />
      </Routes>

    </BrowserRouter>
      
    </>
  )
}

export default App
