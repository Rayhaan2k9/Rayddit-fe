import React from "react";
import { Link } from "react-router-dom";
export const Error = (props) => {


    return (
        <div className="single-article">
        <div id="error-container">
            <h1>Error {props.error.status}</h1>
            <h2>{props.error.data.message}</h2>
            <Link to='/articles'>
                <h4>Click here to go back to articles</h4>
                </Link>
        </div>
        </div>
    )
}