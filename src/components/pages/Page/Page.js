import "./page.css"
import { useState } from "react";
import { Link } from "react-router-dom";


const Page = ({ data, val }) => {
    const numberOfElements = val;
    const count = Math.ceil((data.limit / numberOfElements));
    let numberOfpage = Math.ceil((data.offset - 1235) / val) + 1;

    
    // if ((data.offset - 1235) % val == 0) {
    //     numberOfpage = numberOfpage
    // };
    const pageNumber = Math.ceil((data.total - 1235) / val)
    
    return (
        <div className="page">
            {numberOfpage - 2 > 0 ? <div className="somepage1" >{<Link to={"/characters?page=" + (numberOfpage - 2)}>{numberOfpage - 2}</Link>}</div> : null}
            {numberOfpage - 1 > 0 ? <div className="somepage2">{<Link to={"/characters?page=" + (numberOfpage - 1)}>{numberOfpage - 1}</Link>}</div> : null}
            {numberOfpage <= pageNumber ? <div className="somepage3">{numberOfpage}</div> : null}
            {numberOfpage + 1 < pageNumber ? <div className="somepage4">{<Link to={"/characters?page=" + (numberOfpage + 1)}>{numberOfpage + 1}</Link>}</div> : null}
            {numberOfpage + 2 < pageNumber ? <div className="somepage5">{<Link to={"/characters?page=" + (numberOfpage + 2)}>{numberOfpage + 2}</Link>}</div> : null}
        </div>
    );
}
export default Page;
