import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Info from "./components/Info"
import About from "./components/About"
import Interest from "./components/Interest"
import Footer from "./components/Footer"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main class="Main">
      <Info />
      <About />
      <Interest />
      <Footer />
    </main>
  )
}

export default App
