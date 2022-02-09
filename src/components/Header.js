import React from "react";
import{IoIosCafe} from "react-icons/io"
import{SiReddit} from "react-icons/si"
import { useNavigate } from "react-router";


export function Header() {
const navigate = useNavigate();
    const clickTopic = () => {
        navigate(`/topics`)
    }

    const clickLogin = () => {
        navigate(`/login`)
    }

    const goHome = () => {
        navigate(`/`)
    }

    return <>
    <div className="header" onClick={() => goHome()}>
        <h1 id="main-header"><span className="logo"><SiReddit /></span>  rayddit </h1>
        <h6 id="sub-heading">A Rayact app</h6></div>
        <div><h5 id="nav-login" onClick={() => clickLogin()}>Log in</h5></div>
        <nav><h5 id="nav-topics" onClick={() => clickTopic()}>Topics</h5>
        </nav>
    
    </>
};