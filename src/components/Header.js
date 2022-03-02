import React, { useContext } from "react";
import{SiReddit} from "react-icons/si"
import { useNavigate } from "react-router";
import { UserContext } from "../contexts/User";


export function Header() {

const navigate = useNavigate();
const {loggedInUser, isLoggedIn, setLoggedInUser} = useContext(UserContext);

    const clickTopic = () => {
        navigate(`/topics`)
    }

    const clickLogin = () => {
        navigate(`/login`)
    }

    const goHome = () => {
        navigate(`/`)
    }

    const handleLogOut = () => {
        setLoggedInUser({})
        alert('logged out successfully')
    }

    return <nav className="header">
    <div id="main-header" onClick={() => goHome()}>
        <h1><span className="logo"><SiReddit /></span>  rayddit 
        </h1></div>
        <h5 id="nav-topics" onClick={() => clickTopic()}>Topics</h5>
        {isLoggedIn ? <div className="nav-login"><div id="logged-in-user"><img id="logged-in-avatar" src={loggedInUser.avatar_url} alt='user-avatar'/> <h4>{loggedInUser.username}</h4>
        </div> <button id="log-out-button" onClick={handleLogOut}>Log out?</button></div> : <div><h5 className="nav-login" onClick={() => clickLogin()}>Log in</h5></div>}
        
        

    
    </nav>
};