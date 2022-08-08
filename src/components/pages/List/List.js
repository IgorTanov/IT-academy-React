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
    const [searchParams, setSearchParams] = useSearchParams();
    const page = (searchParams.get("page"));

    useEffect(() => {
        getList(page, setData)

    }, [page])

    if (!data) {
        return <BasicExample />
    } else {


        let elements = data.results.map((item) => {
            return (<div className="all" key={item.id}>
                <Cartoon setInfo={setInfo} name={item.name} id={item.id} url={item.thumbnail.path + "." + item.thumbnail.extension} description={item.description} />
                <EnterTeam id={item.id} />
            </div>
            )
        })
        return (
            <div className="list">
                <div>
                    <Page data={data} />
                    <span>List of heroes</span>
                    <div className="allheroes">{elements}</div>
                    <Page data={data} />
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