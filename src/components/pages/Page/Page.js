import "./page.css"
import { useState } from "react";
import { Link } from "react-router-dom";

const Page = ({ data }) => {
    const numberOfElements = 25;
    const count = Math.ceil((data.limit / numberOfElements));

    const numberOfpage = Math.ceil((data.offset - 1235) / 25)+1 ;
    const pageNumber=Math.ceil((data.total-1235)/data.limit)
   
    

    return (
        <div className="page">
            { numberOfpage-2>0?<div className="somepage" >{<Link to={"/characters?page="+(numberOfpage-2)}>{numberOfpage - 2}</Link>}</div>:null}
            { numberOfpage-1>0?<div className="somepage">{<Link to={"/characters?page="+(numberOfpage-2)}>{numberOfpage-1}</Link>}</div>:null}
            <div className="somepage"><Link to={"/characters?page="+(numberOfpage)}>{numberOfpage}</Link></div>
            {numberOfpage+1<pageNumber?<div className="somepage">{<Link to={"/characters?page="+(numberOfpage+1)}>{numberOfpage + 1}</Link>}</div>:null}
            {numberOfpage+2<pageNumber?<div className="somepage">{<Link to={"/characters?page="+(numberOfpage+2)}>{numberOfpage + 2}</Link>}</div>:null}
        </div>
    );
}
export default Page;
