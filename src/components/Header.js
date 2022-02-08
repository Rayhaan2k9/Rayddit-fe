import React from "react";
import{IoIosCafe} from "react-icons/io"
import{SiReddit} from "react-icons/si"

export function Header() {
    return <div className="header">
        <h1 id="main-header"><span className="logo"><SiReddit /></span>  rayddit </h1>
        <h6 id="sub-heading">A Rayact app</h6>
    </div>
};