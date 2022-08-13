import { useEffect,useState } from "react"
import { useSearchParams } from "react-router-dom";
import List from "../components/pages/List/List";



//--------------------------------------------------------------------------------------------------------------------

const getList=(page,setData,val)=>{
    
    const data=localStorage.getItem("page"+page+"-"+val);

    if(data===null){
       
    fetch(`https://gateway.marvel.com:443/v1/public/characters?limit=${val}&offset=${1235+(page - 1)*val}&apikey=6939fa625d112be8fa5300b66e4bdbed`)
    .then(response=>response.json())
    .then(response=>
        {   
            setData(response.data)
            localStorage.setItem("page"+page+"-"+val,JSON.stringify(response.data))
         const a=response.data.results;
         a.forEach(elem=>{
            localStorage.setItem(JSON.stringify(elem.id),JSON.stringify(elem))
         })
            
        })} else {
            setData(JSON.parse(data))
           
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
