import "./heroInfo.css"
import { useState } from "react"
import { hero } from "../../../service/service"
import { useEffect } from "react"
import { useSearchParams } from "react-router-dom"




const HeroInfo = (props) => {
    const [data, setData] = useState()
    const [searchParams, setSearchParams] = useSearchParams();
    const id = (searchParams.get("id"));
    useEffect(() => {
        hero(setData, id)

    }, [])
  
    if (data === undefined || id===undefined || id==="") {
        return (<div>SSSSSSSSPPPPPPPPPIIIIIIIIIINNNNNNNEEEEEERRRRRRR</div>)
    } else{
    const name = data.data.results[0].name;
    const url = data.data.results[0].thumbnail.path + "." + data.data.results[0].thumbnail.extension;
    const description = data.data.results[0].description;
    const comics = data.data.results[0].urls[2]
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