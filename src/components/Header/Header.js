import "./header.css"

const Header = (props) => {
    return (
        <div className="header">
            <div className="homepage">
                <div>
                    <span className="marvel">Marvel</span> <span className="infport">information portal</span>
                </div>
            </div>
            <div className="characters">
                    <button><div>Characters</div> </button>
                    <button><div>My team</div> </button>
                
            </div>
        </div>
    )
}

export default Header;