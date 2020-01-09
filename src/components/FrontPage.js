import React from "react"
import { Link } from "react-router-dom"
const FrontPage = () => {
    return (
        <ul>
            <li><Link to="/easy" style={linkStyle}>Easy</Link></li>
            <li><Link to="/medium" style={linkStyle}>Medium</Link></li>
            <li><Link to="/hard" style={linkStyle}>Hard</Link></li>
        </ul>
    );
};
const linkStyle = {
    color: "#000",
    textDecoration: "none",
    display: "block",
    padding: "10px 0px"
}
export default FrontPage;