import "./heroenter.css"
import BasicExample from "../../Spinner/Spinner";

const HeroEnter = (props) => {

    const { id, url, name, description } = props;
    if (url == undefined) {
        return (
            <div className="box">
                hover over the hero card
            </div>
        )
    } else
        return (
            <div className="heroenter" id={id}  >
                <img src={url} alt="img" className="img"></img>
                <span>{name}</span>
                <span>{description}</span>
            </div>
        )
}

export default HeroEnter;