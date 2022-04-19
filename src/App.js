import React,{useEffect,useState} from 'react';
import './App.css';

function App() {
  const [state,setState] = useState({count:4,theme:"blue"})
  console.log(state)
  const {count , theme}= state;

  function increamentstate(){
    setState((previou)=>{
      return { ...previou ,count:count + 1
      }
    })
  }

  function decreamentstate(){
    setState((pav)=>{
      return {...pav ,count:count -1 }
    }
    )
  }
  
  return (
    <div className="App">
    <button onClick={increamentstate} style={{type:'button',background:"blue",padding:'20px'}}>+</button>
    <span style={{padding:'20px', background:"black", color:'white',fontSize:'25px'}}>{count}</span>
    <span style={{padding:'20px', background:"black", color:'white',fontSize:'25px'}}>{theme}</span>
    <button onClick={decreamentstate} style={{type:'button',background:"green",padding:'20px'}}>-</button>
    </div>
  );
}

export default App;
