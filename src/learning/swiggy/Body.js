import React, { useState,useEffect } from "react";
import Card from "./Card";
import { items, imageCDN_URL } from "../../config";

const filterRestaurant=(restaurants,searchText)=>{
     const data=restaurants.filter((restaurants)=>{
      return restaurants.data.name.includes(searchText);
     })
     return data;
}

const Body = () => {
  const [restaurants, setRestaurants] = useState(items);
  const [searchText, setSearchText] = useState("");

  const handleSearch=()=>{
    const filterData=filterRestaurant(restaurants,searchText);
    setRestaurants(filterData);
   
  }
  useEffect(()=>{
    console.log("jay");
 },[searchText]);
  console.log("render");
  return (
    <>
      <div className="border-2 border-indigo-500 p-4 gap-2">
        <input
          className="border-2 border-indigo-500"
          type="text"
          value={searchText}
          placeholder="search"
          onChange={(e)=>{setSearchText(e.target.value)}}
        />
        {console.log("renderfkdf")}
        <button className="border-2 border-indigo-500" onClick={handleSearch}>Search</button>
      </div>

      <div className="flex border-2 border-indigo-500 p-4 ">
        {restaurants.map((item) => {
          return (
            <Card item={item} imageCDN_URL={imageCDN_URL} key={item.data.id} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
