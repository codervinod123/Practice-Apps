import React,{useState} from 'react';
import Travel from "./learning/Travel/Travel";
import dat from './data';


const App = () => {
 
  const [data, setdata] = useState(dat);

  function removeTour(id) {
    const newTours = data.filter(data => data.id !== id);
    setdata(newTours);
  }

  const Refresh=()=>{
    setdata(dat);
  }
  if(data.length<=0)
  {
    return(
      <>
        <h1>Please refres the page</h1>
        <button onClick={Refresh}>Refresh</button>
      </>
    )
  }

  return (
    <div>
        <Travel data={data} removeTour={removeTour}/>
    </div>
  )
}

export default App