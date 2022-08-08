import HeroEnter from "../HeroEnter/HeroEnter"
import { useState } from "react"
import "./myteam.css"


const MyTeam=()=>{
    const allHero=JSON.parse(localStorage.getItem("teamkeys"))
    const [data,setData]=useState(allHero)
    if(allHero==null){
        return <div>We all on shit</div>
    }
    
    console.log(allHero)
    let elements=allHero.map((id)=>{
        const hero=JSON.parse(localStorage.getItem(id));
        const url=hero.thumbnail.path + "." + hero.thumbnail.extension
        const name=data.name;
        console.log(hero,url)
        return <HeroEnter url={url} name={name} id={id} />  
    })
    return (
        <div className="myteam">
            {elements}
        </div>
    )
}
export default MyTeam

