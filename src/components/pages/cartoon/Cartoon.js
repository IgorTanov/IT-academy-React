import "./cartoon.css"
//import { getList } from "../../../service/service";
import { Link } from 'react-router-dom'


const Cartoon = (props) => {

    const { id, url, name, description, setInfo } = props;

    const soloElement = () => {
        setInfo({ id, url, name, description })
        
    }

    return (
        <Link to={'/character?id=' + id}>
            <div className="cartoon" id={id} onMouseEnter={soloElement} >
                <img src={url} alt="img"></img>
                <span>{name}</span>
                {/* <div className="myteam">
                    <input type='checkbox'/>
                    <span>enter to my team</span>
                </div> */}
            </div>
        </Link>
    )

}
export default Cartoon;