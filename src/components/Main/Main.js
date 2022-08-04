import HeroInfo from "../pages/HeroInf/HeroInfo";
import List from "../pages/List/List";
import HomePage from "../pages/HomePage/HomePage";
import NotFound from "../pages/NotFound/NotFound";
import { Route, Routes } from "react-router-dom";
import MyTeam from "../pages/MyTeam/MyTeam";


const Main = (props) => {
    return (
        <div className="main">
            <Routes>
                <Route path="characters" element={<List />} />
                <Route path="character" element={<HeroInfo />} />
                <Route path="*" element={<NotFound />} />
                <Route path="/" element={<HomePage />} />
                <Route path="my_team" element={<MyTeam />} />
                
            </Routes>
        </div>
    )
}

export default Main;