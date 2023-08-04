import React, { useState,useEffect, useContext } from "react";
import Card from "./Card";
import {imageCDN_URL,apiURL } from "../../config";
import Shimmer from "./Shimmer";
import Not from "./Not";

import userContext from "../utils/userContext";


const filterDataFun=(searchText,allRestaurant)=>{
    const data=allRestaurant.filter((restaurant)=>{
      return restaurant.data.name.toLowerCase().includes(searchText.toLowerCase());
    })
    return data;
}

const Body = () => {
 
console.log(useState());

  const {user,setUser}=useContext(userContext);

   const [searchText, setSearchText] = useState("");
   const [filteredRestaurant, setFilteredRestaurant] = useState([]);
   const [allRestaurant, setAllRestaurant] = useState([]);

   

   
   useEffect(()=>{

          getRestaurants();
          console.log("re-rendering");
   },[]);
   
   const getRestaurants=async()=>{
      try {
          const data=await fetch(apiURL);
          const json=await data.json();
          // setRestaurant(json);
 

          //const data2=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.7605545&lng=83.3731675&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
          //const json2=await data2.json();
          //console.log(json2.data.cards[5].card.card.gridElements.infoWithStyle.restaurants);

         
          console.log(json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants);
          setFilteredRestaurant(json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants);
          setAllRestaurant(json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants);
      } catch (error) {
         console.log(`error has occured ${error}`);
      }
   }

   
  
  
  return (allRestaurant.length===0)? <Shimmer/>:
   (
    <>
      <div className="border-2 border-indigo-500 p-4 gap-2">
        <input
          className="border-2 border-indigo-500"
          type="text"
          value={searchText}
          placeholder="search"
          onChange={(e)=>{setSearchText(e.target.value)}}
        />

       
       
        <button 
           className="border-2 border-indigo-500" 
           onClick={()=> {
               const filteredData=filterDataFun(searchText,allRestaurant);
               setFilteredRestaurant(filteredData)}}>
             Search
        </button>

        <input
          className="border-2 border-indigo-500"
          type="text"
          value={user.name}
          placeholder="search"
           onChange={(e)=>{setUser({name:e.target.value})}}
        />

      </div>

      <div className="flex flex-wrap border-2 border-indigo-500 p-4 justify-evenly">
       
        {filteredRestaurant.map((item) => {

          return (filteredRestaurant.length===0)? <Not/>:
           (
            <Card item={item} imageCDN_URL={imageCDN_URL} key={item.info.id}/>
          );
        })}
      </div>
    </>
  );
};

export default Body;
