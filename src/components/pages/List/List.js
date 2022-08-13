import { useEffect, useState } from "react";
import { getList } from "../../../service/service";
import "./list.css"
import Cartoon from "../cartoon/Cartoon";
import { buildTimeValue } from "@testing-library/user-event/dist/utils";
import HeroEnter from "../HeroEnter/HeroEnter";
import EnterTeam from "../cartoon/EnterTeam/EnterTeam";
import BasicExample from "../../Spinner/Spinner";
import Page from "../Page/Page";
import { useSearchParams } from "react-router-dom";

const List = (props) => {
    const [data, setData] = useState()
    const [info, setInfo] = useState()
    const [val, setVal] = useState(10)
    const [searchParams, setSearchParams] = useSearchParams();
    const page = (searchParams.get("page")) || 1;

    useEffect(() => {
        getList(page, setData, val)

    }, [page, val])

    if (!data) {
        return <BasicExample />
    } else {
    }
    let elements = data.results.map((item) => {
        return (<div className="all" key={item.id}>
            <Cartoon setInfo={setInfo} name={item.name} id={item.id} url={item.thumbnail.path + "." + item.thumbnail.extension} description={item.description} />
            <EnterTeam id={item.id} />
        </div>
        )
    })
    const cardsLimit = (event) => {
        setVal(event.target.value)
    }
    return (
        <div className="list">
            <div>
                <Page data={data} val={val} />
                <span className="span">Heroes on the page
                    <select onChange={cardsLimit} value={val} >
                        <option value='10'>10</option>
                        <option value='15'>15</option>
                        <option value='20'>20</option>
                        <option value='25'>25</option>
                    </select>
                </span>
                <div className="allheroes">{elements}</div>
                <Page data={data} val={val} />
            </div>
            <div className="hero" >
                <h3>Hero information</h3>
                <HeroEnter {...info} />
            </div>
        </div>
    )
}


export default List;