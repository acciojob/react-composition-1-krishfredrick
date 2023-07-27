
import React,{useId, useState} from "react";
import './../styles/App.css';

const Tab = ({number, setState})=>{
  
     return (<li onClick={()=> setState(number)}>Tab {number}</li>)
}

const App = () => {
  const [tab,setTab] = useState(1);

  return (
    <div>
        {/* Do not remove the main div */}
    <ul>
    {[1, 2, 3].map((val)=>(<Tab number={val} key={val} setState ={setState} />)}
    </ul>
      This is the content for {`Tab ${tab}`}.
    </div>
  )
}

export default App
