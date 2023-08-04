import React from 'react';
import {useRouteError} from "react-router-dom"

const Error = () => {
    const error=useRouteError();
    console.log(error);


 

  return (
    <div>
        <h1>OOPS.......</h1>
        <h4>{`${error.status} : ${error.statusText}`}</h4>
    </div>
  )
}

export default Error