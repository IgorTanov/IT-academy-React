import { useEffect } from "react"
import { useSearchParams } from "react-router-dom";

//--------------------------------------------------------------------------------------------------------------------

const getList=(page,setData)=>{
    fetch("https://gateway.marvel.com:443/v1/public/characters?limit=15&offset=570&apikey=6939fa625d112be8fa5300b66e4bdbed").then(response=>response.json()).then(respons=>setData(respons))
}
//---------------------------------------------------------------------------------------------------------------------
 
const hero=(setData,id)=>{
    
    fetch("https://gateway.marvel.com:443/v1/public/characters/"+id+"?apikey=6939fa625d112be8fa5300b66e4bdbed").then(respons=>respons.json().then(respons=>setData(respons)));

}
export { getList ,hero}


