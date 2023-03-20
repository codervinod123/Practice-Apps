import react from "react";
import Card from "./Card";
import "./travel.css"


const Travel=(props)=>{

    
 
    return(
        <>
         <h1>Travel With Vinod</h1>
           <div className="container">
                {
                    props.data.map((data)=>{
                        return(
                            <Card data={data} removeTour={props.removeTour}/>
                        )
                    })
                }
           </div>
        </>
    )
}

export default Travel;