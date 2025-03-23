import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header.jsx'
import Hero from './components/Hero/Hero.jsx'
import Companies from './components/Companies/Companies.jsx'
import Residencies from './components/Residencies/Residencies.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="appwrap">
      <div className="appcon">
        <div className="whitecir"></div>
        <div className="badacomp">
        <Header></Header>
        
        <Hero></Hero>
        </div>
      </div>
      <Companies></Companies>
      <Residencies></Residencies>
    </div>  
  )
}

export default App
