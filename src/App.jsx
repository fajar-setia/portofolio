import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Beranda from './pages/beranda'
import Navbar from './component/navbar'
import Footer from './component/footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Beranda />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
