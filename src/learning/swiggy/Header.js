import React,{useEffect, useState} from "react";
import {Link} from "react-router-dom"

import { useContext } from "react";
import userContext from "../utils/userContext";
const Title=()=>{

   const {user}=useContext(userContext);

  return(
      <Link to="/" className="flex items-center gap-3 font-medium text-2xl text-orange-500">
         <img className="h-14 cursor-pointer rounded-full " src="https://w7.pngwing.com/pngs/664/210/png-transparent-uber-eats-muncheez-delivery-online-food-ordering-food-delivery-food-logo-uber-eats-thumbnail.png" alt="Logo" />
         <span>Food Villa</span>
         <p>{user.name}</p>
      </Link>
  )
}


const Header=()=>{




   const [isOnline,setIsOnline]=useState(true);


  useEffect(()=>{
       
    const handleOnline=()=>{
      setIsOnline(true);
     }

     const handleOffline=()=>{
      setIsOnline(false);
     }


     window.addEventListener('online',handleOnline);

     window.addEventListener('offline',handleOffline);

     return()=>{
      window.removeEventListener('online',handleOnline);
      window.removeEventListener('offline',handleOffline);
     }

  },[])
    

  return(
     <div className="bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300  h-16 flex justify-between px-9 items-center">
        <div>
          <Title/>
        </div>
        <div className="items-center">
           <ul className="flex  place-content-center text-orange-500 font-medium list-none gap-4 items-center text-xl ">
            <li className="cursor-pointer">
               <Link to="/">
                   Home
               </Link>
            </li>
            <li className="cursor-pointer">
              <Link to="/about">
                   About
               </Link>
            </li>
            <li className="cursor-pointer">
               <Link to="/contact">
                  Contact
               </Link>
            </li>
            <li className="cursor-pointer">
               <Link to="/cart">
                 Cart
               </Link>
            </li>
  
            <li className="cursor-pointer">
               <Link to="/cart">
                 {isOnline?"online":"offline"}
               </Link>
            </li>

            <li className="cursor-pointer">
               <Link to="/instamart">
                 Instamart
               </Link>
            </li>

            <li className="cursor-pointer">
               <Link to="/ondemandcomponent">
                 lazy
               </Link>
            </li>
           </ul>
        </div>
     </div>
  )
}

export default Header;
















