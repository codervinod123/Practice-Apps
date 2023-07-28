import {createContext} from "react";

const userContext=createContext({
      user:{
        name:"vinod prajapati",
       email:"vinodpr737947@gmail.com"
     }
})

userContext.displayName="user hu bhai";

export default userContext;