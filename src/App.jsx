import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
       <Navbar/>
       <Banner/>
       <Footer/>
    </div>
  )
}

export default App
