import React from "react";

const Title=()=>{
  return(
      <a href="/" className="flex items-center gap-3 font-medium text-2xl text-orange-500">
         <img className="h-14 cursor-pointer" src="https://w7.pngwing.com/pngs/664/210/png-transparent-uber-eats-muncheez-delivery-online-food-ordering-food-delivery-food-logo-uber-eats-thumbnail.png" alt="Logo" />
         <span>Food Villa</span>
      </a>
  )
}


const Header=()=>{
  return(
     <div className="bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300  h-16 flex justify-between px-9 items-center">
        <div>
          <Title/>
        </div>
        <div className="items-center">
           <ul className="flex  place-content-center text-orange-500 font-medium list-none gap-4 items-center text-xl ">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">About</li>
            <li className="cursor-pointer">Contact</li>
            <li className="cursor-pointer">Cart</li>
           </ul>
        </div>
     </div>
  )
}

export default Header;
















