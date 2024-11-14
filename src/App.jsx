import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Background from './components/Background'
import Forground from './Forground'
function App() {


  return (
    <div className='relative w-full h-screen bg-zinc-700'>
     <Background/>
     <Forground/>
     </div>
  )
}

export default App
