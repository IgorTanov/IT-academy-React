import { useEffect } from "react"
import { useSearchParams } from "react-router-dom";



//--------------------------------------------------------------------------------------------------------------------

const getList=(page,setData)=>{
    const data=localStorage.getItem("page"+page);
    
    if(data===null){
    fetch(`https://gateway.marvel.com:443/v1/public/characters?limit=25&offset=${1235+page*25}&apikey=6939fa625d112be8fa5300b66e4bdbed`)
    .then(response=>response.json())
    .then(response=>
        {   
            setData(response.data)
            localStorage.setItem("page"+page,JSON.stringify(response.data))
         const a=response.data.results;
         a.forEach(elem=>{
            localStorage.setItem(JSON.stringify(elem.id),JSON.stringify(elem))
         })
            
        })} else {
            setData(JSON.parse(data))
            console.log(JSON.parse(data))
        }    
}
//---------------------------------------------------------------------------------------------------------------------
 
const hero=(setData,id)=>{
    const data=localStorage.getItem(id)
    if(data===null){
        
        fetch("https://gateway.marvel.com:443/v1/public/characters/"+id+"?apikey=6939fa625d112be8fa5300b66e4bdbed")
        .then(respons=>respons.json()
        .then(respons=>{setData(respons)
            
        }));
    } else {
        
        setData(JSON.parse(localStorage.getItem((id))))
    }

   
}
//---------------------------------------------------------------------------------------------------------------------------------------------


//----------------------------------------------------------------------------------------------------------------------------------------
export { getList ,hero}

//-----------------------------------------------------------------------------------------------------------------------------------------
