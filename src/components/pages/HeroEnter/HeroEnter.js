import "./heroenter.css"

const HeroEnter = (props) => {

    const { id, url, name, description } = props;
    if (props === undefined) {
        return null
    } else
        return (
            <div className="heroenter" id={id}  >
                <img src={url} alt="img"></img>
                <span>{name}</span>
            </div>
        )
}

export default HeroEnter;