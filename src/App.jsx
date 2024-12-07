import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header/Header"
import FirstView from "./pages/FirstView/FirstView"
import SecondView from "./pages/SecondView/SecondView"

function App() {
  return (
    <>

    <Header />

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FirstView />} />
        <Route path="/View2" element={<SecondView />} />
        <Route path="*" element={<h1>Página não encontrada!</h1>} />
      </Routes>

    </BrowserRouter>
      
    </>
  )
}

export default App
