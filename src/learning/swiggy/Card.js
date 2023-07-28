import { useContext } from "react";
import userContext from "../utils/userContext";
const Card=({item,imageCDN_URL})=>{
     const {user}=useContext(userContext);

    // console.log(item.data.lastMileTravel);
    return(
      <div className="border border-indigo-500 ">
           <img src={imageCDN_URL+item.info.cloudinaryImageId} alt="food_image" />
           <h2 className="font-medium text-orange-300">{item.info.name}</h2>
           <p>{item.info.avgRating}</p>
           <p>{item.info.costForTwo} </p> 
           <p>{user.name} </p> 
      </div>
    )
  }
  export default Card;
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  