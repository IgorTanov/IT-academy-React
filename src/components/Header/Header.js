import "./header.css"
import { Link } from "react-router-dom";

const Header = (props) => {
    return (
        <div className="header">
            <div className="homepage">
                 <div className="">
                 <Link to="/"> <span className="marvel">Marvel</span></Link> <span className="infport">information portal</span>
                </div>
                
            </div>
            <div className="characters">
                <Link to='characters'><button ><div className="characters">Characters</div> </button></Link>
                <Link to="my_team"><button ><div className="myteam">My team</div> </button></Link>

            </div>
        </div>
    )
}

export default Header;