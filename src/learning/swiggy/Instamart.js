import React,{useState} from 'react'

const Section=({title,description,isVisible,setIsVisible})=>{

    

    return (
        <div className='px-4'>
           <div className='border-2 border-purple-500 ' >
          {!isVisible?<button onClick={()=>setIsVisible(!isVisible)}>Show</button>:<button onClick={()=>setIsVisible(!isVisible)}>Hide</button>}
              <h1 className='text-lg font-bold text-green-500'>{title}</h1>
               {isVisible && <p>{description}</p>}
           </div>
        </div>
    )
}

const Instamart = () => {

    const [sectionConfig,setSectionConfig]=useState({
        showAbout:false,
        showContact:false,
        showDelivery:false,
    });
  return (
    <div>
        <Section 
            title={"about Heading"} 
            isVisible={sectionConfig.showAbout} 
            description={"With great experience about English language and how to write, our creative team has always come up with materials to provide for the growing minds. The essays of 20 lines will help the children get a brief knowledge about the topic and learn how to write in examination. We hope to give as much knowledge as possible so our readers will always stick by our platform and learn great things with us."}
            setIsVisible={()=>{setSectionConfig({
                  showAbout:true,
                  showContact:false,
                  showDelivery:false
                }
            )}}   
            />
        <Section 
             title={"Contact Heading"} 
             isVisible={sectionConfig.showContact} 
             description={"With great experience about English language and how to write, our creative team has always come up with materials to provide for the growing minds. The essays of 20 lines will help the children get a brief knowledge about the topic and learn how to write in examination. We hope to give as much knowledge as possible so our readers will always stick by our platform and learn great things with us."}
             setIsVisible={()=>{setSectionConfig({
                  showAbout:false,
                  showContact:true,
                  showDelivery:false
                }
            )}}
           />


         <Section
            title={"Delivery Heading"} 
            isVisible={sectionConfig.showDelivery} 
            description={"With great experience about English language and how to write, our creative team has always come up with materials to provide for the growing minds. The essays of 20 lines will help the children get a brief knowledge about the topic and learn how to write in examination. We hope to give as much knowledge as possible so our readers will always stick by our platform and learn great things with us."}
            setIsVisible={()=>{setSectionConfig({
                  showAbout:false,
                  showContact:false,
                  showDelivery:true
                }
            )}}
            />
    </div>
  )
}

export default Instamart