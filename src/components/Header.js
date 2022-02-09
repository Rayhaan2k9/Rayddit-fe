import React from "react";
import{IoIosCafe} from "react-icons/io"
import{SiReddit} from "react-icons/si"
import { useNavigate } from "react-router";


export function Header() {
const navigate = useNavigate();
    const clickTopic = () => {
        navigate(`/topics`)
    }

    return <div className="header">
        <h1 id="main-header"><span className="logo"><SiReddit /></span>  rayddit </h1>
        <h6 id="sub-heading">A Rayact app</h6>
        <nav><h5 onClick={() => clickTopic()}>Topics</h5></nav>
    </div>
};