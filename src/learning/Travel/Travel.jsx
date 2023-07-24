import { useState } from "react";
import Card from "./Card";
const Travel=({data})=>{

    const [tours, setTours] = useState(data);
    const selectChoice=(id)=>{
        console.log(id);
        const updatedTours=tours.filter(tour=> tour.id!==id);
        setTours(updatedTours);
    }
    
    const handleRefresh=()=>{
        setTours(data); 
    }

    if(tours.length<1)
    {
        return(
            <div className="h-screen flex flex-col justify-center  items-center">
              <h1>No More List Of Tours</h1>
              <button className="border-2 border-purple-500 rounded px-3 py-1 bg-blue-300" onClick={handleRefresh}>Refresh</button>
            </div>
        )
    }

    return(
        <div className="max-h-full border-2 border-slate-950 ">
         <div className="flex justify-center">
            <h1 className=" text-3xl my-5 font-medium border-2 border-indigo-500 px-4 py-2 rounded">Tour With Vinod Prajapati</h1>
         </div>
         <div className="h-[600px] border-2 border-slate-950 flex">
             {
                tours.map((data)=>{
                    return(
                        <Card key={data.id} data={data} selectChoice={selectChoice} className="h-[400px]"/>
                    )
                })
             }
         </div>
        </div>
    )
}

export default Travel;