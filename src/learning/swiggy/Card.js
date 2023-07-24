
const Card=({item,imageCDN_URL})=>{
    console.log(item.data.lastMileTravel);
    return(
      <div className="border-2 border-indigo-500 ">
          <img src={imageCDN_URL+item.data.cloudinaryImageId} alt="food_image" />
          <h2 className="font-medium text-orange-300">{item.data.name}</h2>
          <p>{item.data.cuisines.join(", ")}</p>
          <p>{Math.round(item.data.lastMileTravel)} Minutes</p>
      </div>
    )
  }
  export default Card;
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  