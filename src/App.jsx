import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Ofertas from "./pages/Ofertas"
import Header from "./components/header"

function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/ofertas" element={<Ofertas />} />
          <Route path="*" element={<div>404 - Página não encontrada</div>} />
        </Routes>
      </Router>
    </>
  )
}

export default App

