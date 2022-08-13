import "./heroInfo.css"
import { useState } from "react"
import { hero } from "../../../service/service"
import { useEffect } from "react"
import { useSearchParams } from "react-router-dom"
 import BasicExample from "../../Spinner/Spinner"




const HeroInfo = (props) => {
    const [data, setData] = useState()
    const [searchParams, setSearchParams] = useSearchParams();
    const id = (searchParams.get("id"));
    useEffect(() => {
        hero(setData, id)

    }, [])
  
    if (data === undefined || id===undefined || id==="") {
        return (<BasicExample/>)
        return("wait image")
    } else{
    const name = data.name;
    const url = data.thumbnail.path + "." + data.thumbnail.extension;
    const description = data.description;
    const comics = data.urls[2]
    
    return (  
        <div className="heroinfo">
            <img src={url} alt="img"></img>
            <span>{name}</span>
            <div className="description">{description}</div>
            <a href={comics} target="_blank">Comics with {name}</a>
        </div>
    )
}
}
export default HeroInfo;