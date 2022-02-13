import{SiReddit} from "react-icons/si"
import {FaReact} from "react-icons/fa"

export function Footer() {
    return (
        <div className="footer">
            <h2 id="footer-title"><span className="logo"><SiReddit /></span>  rayddit</h2>
            <h5>A <span id="react-logo"><FaReact /> </span>Rayact App <br></br>by Rayhaan Ugharadar</h5>
            <h5>2022</h5>
        </div>
    )
}