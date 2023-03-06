import React,{useEffect,useState} from 'react';
import "./Pagination.css";

const Pagination = () => {

    const [products, setProducts] = useState([]); 
    const [pageNo, setPageNo]=useState(1);
    const [currentPage, setCurrentPage]=useState(1);
    
    

    const fetchData=async()=>{
        const rawdata=await fetch("https://dummyjson.com/products");
        const data=await rawdata.json();
      
         setProducts(data.products);
        
    }

    useEffect(()=>{
        fetchData();
    },[]);


    const handlePage=(page)=>{
        setPageNo(page);
    }

    const handleNext=()=>{
        setPageNo(pageNo+1);
    }

    const handlePrev=()=>{
        setPageNo(pageNo-1);
    }
  
  return (
    <>

    
    <div className='products'>
    
        {
            products.slice(pageNo*5-5,pageNo*5).map((val)=>{
                return(
                   <div key={val.key} className='detail'>
                      <img src={val.thumbnail} alt="productimage" />
                      <p className='title'>{val.title}</p>
                   </div>
                )
            })
        }
  
        

    </div>
    <div className="pagination">
            <span onClick={handlePrev}>←</span>
            {
              [...new Array(products.length/5)].map((val,i)=>{
                 return(
                    <span onClick={()=>handlePage(i+1)}>{i+1}</span>
                 )
              })
            }
            <span onClick={handleNext}>→</span>
         </div>
         </>
  )
}

export default Pagination