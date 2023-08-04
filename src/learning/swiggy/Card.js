import { useContext } from "react";
import userContext from "../utils/userContext";
import {useDispatch} from "react-redux"

import { addItem } from "../utils/cartSlice";

const Card=({item,imageCDN_URL})=>{
     const {user}=useContext(userContext);

    // console.log(item.data.lastMileTravel);

      const dispatch=useDispatch();
      const handleAddCart=()=>{
        dispatch(addItem(item));
      }

    return(
      <div className="border border-indigo-500 w-[200px]">
           <img src={imageCDN_URL+item.info.cloudinaryImageId} alt="food_image" />
           <h2 className="font-medium text-orange-300">{item.info.name}</h2>
           <p>{item.info.avgRating}</p>
           <p>{item.info.costForTwo} </p> 
           <p>{user.name} </p> 
           <button onClick={()=>handleAddCart()} className="bg-green-500 text-white rounded px-2 py-[1px] font-bold">ADD</button>
      </div>
    )
  }
  export default Card;
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  