import { useState } from 'react'
import './App.css'
import Beranda from './pages/beranda'
import Navbar from './component/navbar'
import Footer from './component/footer'
import { Routes, Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Beranda />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
