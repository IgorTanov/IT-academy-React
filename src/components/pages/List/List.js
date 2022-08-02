import { useEffect, useState } from "react";
import { getList } from "../../../service/service";
import "./list.css"
import Cartoon from "../cartoon/Cartoon";
import { buildTimeValue } from "@testing-library/user-event/dist/utils";
import HeroEnter from "../HeroEnter/HeroEnter";
import EnterTeam from "../cartoon/EnterTeam/EnterTeam";


const List = (props) => {
    const [data, setData] = useState()
    const[info,setInfo]=useState()
    useEffect(() => {
        getList(1, setData)
    }, [])
    if (!data) {
        return buildTimeValue;
    } else {
       let elements = data.data.results.map(item => {
            return (<div className="all">
                <Cartoon setInfo={setInfo} name={item.name} id={item.id} url={item.thumbnail.path + "." + item.thumbnail.extension} description={item.description} />
                <EnterTeam/>
                </div>
                )
        })
        console.log(elements)
        return (
            <div className="list">
                <div>
                    <span>List of heroes</span>
                    <div className="allheroes">{elements}</div>  
                </div>
                <div className="hero" >
                    <h3>Hero information</h3>
                    <HeroEnter {...info} />
                </div>
                
            </div>
        )
    }
}

export default List;