import React, {useState,lazy,Suspense } from "react"; 
import userContext from "./learning/utils/userContext";

// ========================swiggy application======================
import Header from "./learning/swiggy/Header";
import Footer from "./learning/swiggy/Footer";
import Body from "./learning/swiggy/Body";



import {createBrowserRouter,Outlet} from "react-router-dom"

import About from "./learning/swiggy/About";
import Contacts from "./learning/swiggy/Contacts";
import Cart from "./learning/swiggy/Cart";
import Error from "./learning/swiggy/Error";
import RestaurantMenu from "./learning/swiggy/RestaurantMenu";
import Profile from "./learning/swiggy/Profile";
import Instamart from "./learning/swiggy/Instamart";

const LazyLoadedComponent=lazy(()=>{import("./learning/swiggy/Lazyloading")})


// =================Top cources==========
// import Header from "./learning/Topcources/Header";
// import Filter from "./learning/Topcources/Filter";
// import {filterData,apiUrl} from "./topcourse";
// import Cards from "./learning/Topcources/Cards";





const App=()=>{

   const [user,setUser]=useState({name:"abhishek",email:"vinodpr737947"});
   
  return(
    <>
      <userContext.Provider value={{
         user:user,
         setUser:setUser
         }}>
         <Header/>
         <Outlet/>
         <Footer/>
       </userContext.Provider>
       {/* <Header/>
       <Filter filterData={filterData}/>
       <Cards /> */}
    </>
  )
}


const appRouter=createBrowserRouter([
  {
        path:"/",
        element:<App/>,
        errorElement:<Error/>,
        children:
        [
          {
             path:"/",
             element:<Body />
          },
          {
             path:"/about",
             element:<About/>,
             children:[
                 {
                  path:"profile",
                  element:<Profile name={"vinod"}/>
                 }
             ]
          }, 
          {
             path:"/contact",
             element:<Contacts/>
          },
          {
             path:"/cart",
             element:<Cart/>
          },
          {
            path:"/restaurantmenu/:id",
            element:<RestaurantMenu/>
         },
         {
            path:"/ondemandcomponent",
            element:<Suspense fallback={<h1>Jay Mata Ji</h1>}><LazyLoadedComponent/></Suspense>
         },
         {
            path:"/instamart",
            element:<Instamart/>
         }

      ]
}
])

export default appRouter;
