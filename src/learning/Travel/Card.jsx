import react,{useEffect,useState} from "react";
import "./travel.css";
const Card=(props)=>{

    const {id,name,info,image,price}=props.data;
    
    const [readmore,setReadmore]=useState(false);
  
    const desc=readmore?info:`${info.substring(0,100)}`
    const readmoreHandler=()=>{
        setReadmore(!readmore); 
    }
    
    return(
        <>
           <div className="wrapper">
              <div className="place-image">
                <img src={image} alt="place-image" />
              </div>
              <div className="details">
                   <span className="price">{price}</span>
                   <span className="place-name">{name}</span>
                   <div className="description">
                        <p>{desc}</p> 
                        
                        {
                            <span className="read-more" onClick={readmoreHandler}>
                              { readmore?"read less":"read more"}
                            </span>
                        }
                           
                        
                   </div>
              </div>
              <button onClick={()=>props.removeTour(id)}>Not Intrested</button>
           </div>    
        </>
    )
}

export default Card;