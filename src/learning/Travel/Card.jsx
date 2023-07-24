import React,{useState} from 'react'

const Card = ({data,selectChoice}) => {
 
  const  [readMore, setReadmore] = useState(true);
  const description=readMore? data.info.substring(0,200) : data.info;

  const handleClickMore=()=>{
    setReadmore(!readMore);  
  }

  return (
    <div>
        <img src={data.image} alt="place_pic" />
        <div>
           <h4 className='text-green-500 font-medium'>$ {data.price}</h4>
           <h4 className='text-purple-500 font-medium'>{data.name}</h4>
        </div>
        <div>
           {description}
           <span onClick={handleClickMore} className='font-medium cursor-pointer text-blue-400'>
             {
              readMore?"Read More":"Read Less"
             }
           </span>
        </div>
        <button className='cursor-ponter border-2 border-purple-600 m-3 px-3 py-1 rounded' onClick={()=>selectChoice(data.id)}>Not Intreasted</button>
    </div>
  )
}

export default Card