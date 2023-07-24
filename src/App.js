import React from "react"; 

// import Header from "./learning/swiggy/Header";
// import Footer from "./learning/swiggy/Footer";
// import Body from "./learning/swiggy/Body";

// =================Top cources==========
import Header from "./learning/Topcources/Header";
import Filter from "./learning/Topcources/Filter";
import {filterData,apiUrl} from "./topcourse";

const App=()=>{
  return(
    <>
       {/* <Header/>
       <Body/>
       <Footer/> */}
       <Header/>
       <Filter filterData={filterData}/>
    </>
  )
}

export default App;