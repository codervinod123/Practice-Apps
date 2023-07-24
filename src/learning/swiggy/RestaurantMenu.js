import React from 'react';
import {useParams} from "react-router-dom";

const RestaurantMenu = () => {
    const {id}=useParams();
    
  return (
    <div>restaurant is is {id}</div>
  )
}

export default RestaurantMenu