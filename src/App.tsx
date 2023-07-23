import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import About from './about'


const data: string[] = ["a","b","c"];
function App() {
  //const [count, setCount] = useState(0)
  const [state, setState] = useState<string>("Finite State");


  return (
    <div className="main">
      <h1>hello</h1>
      <About func={setState} data={data}/>
      <h1>{state}</h1>
      <input onChange={(e) =>setState(state + e.target.value)} />
      <input type="text" />
     
      {
        // data.map((item,idx)=>(
        //   <h4 key={idx}>{item}</h4>
        // ))
        }

      {
        // data.map((item,idx)=>{
        //   if(item==="a") return <h1>AAA</h1>
        //   else return <h4 key={idx}>{item}</h4>
        //}
        //)
        }
    </div>
  )
}

export default App
