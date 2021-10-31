
import './Header.css'
import React, { createContext, useState ,useContext} from "react";
 

const lanContext =createContext();


export default function Header(){

const [language ,setLanguage]=useState('')

    return(

        <>
        <div className='Btn'> 
         <button type='button'
        onClick={()=>setLanguage('السلام عليكم')}>
        
         Arabic </button>

         <button type='button'
        onClick={()=>setLanguage('Hello World')}>
        
         English </button>

         <button  type='button'
        onClick={()=>setLanguage('こんにちは世界')}>
        
         Japanese </button>
</div>


<div className='context'> 
         <lanContext.Provider value={language}>

         <Body language={language}  />

         </lanContext.Provider>
         </div>    

          
        </>
    )
}


function Body(){
    
    const lang =useContext(lanContext);


    if (lang ==='Hello World'){

    return(
        <>
<h2>{`${lang}`}</h2>
<img src={'https://img.rezdy.com/PRODUCT_IMAGE/151734/top_london_24_lg.jpg'} alt='' width={400}/>
        </>
    )}

    else if(lang ==='السلام عليكم')
    return(
         <>
        <h2>{`${lang}`}</h2>
        <img src={'https://www.pandotrip.com/wp-content/uploads/2014/05/Top-10-Arabic-Architecture-Abu-Dhabi-Photo-by-WK-Cheoh.jpg'} alt='' width={400}/>
        </>
    )


    else
    return(
        <>
        <h2>{`${lang}`}</h2>
        <img src={'https://savvytokyo.scdn3.secure.raxcdn.com/app/uploads/2016/08/The-Many-Ways-To-Say-Woman-In-Japanese-2-790x445.jpg'} alt='' width={400}/>
 </>
    )
}