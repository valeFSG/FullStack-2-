import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Ejercicio1 from './Ejercicio1';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Ejercicio1 />
    </div>
    
  );
}

export default App
