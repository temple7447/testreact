import React,{useState,} from 'react';
import './App.css';
// import Navbar from './component/headernav/Nav';

function App() {
  // const Name = [{name:'tample'}, {name:'wisdom'}]
  const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((number) => number * 2);
console.log(doubled);


  const [state,setState] = useState({count:4,theme:"blue"})
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

    {/* <div>{Name}</div> */}
    {/* {Name.map((detail)=>{
     return <Navbar products={detail} />
    })} */}
    </div>
  );
}

export default App;
