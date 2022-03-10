import React from "react";
import { Link } from "react-router-dom";
export const Error = (props) => {


    return (
        // <div className="single-article">
        // <div id="error-container">
        //     <h1>Error {props.error.status}</h1>
        //     <h2>{props.error.data.message}</h2>
        //     <Link to='/articles'>
        //         <h4>Click here to go back to articles</h4>
        //         </Link>
        // </div>
        // </div>

        <section class="notFound">
        <div class="img">
        <img src="https://assets.codepen.io/5647096/backToTheHomepage.png" alt="Back to the Homepage"/>
        <img src="https://assets.codepen.io/5647096/Delorean.png" alt="El Delorean, El Doc y Marti McFly"/>
        </div>
        <div class="text">
        <h1>404</h1>
        <h2>{props.error.data.message}</h2>
        <a className="home-link" href="/articles">CLICK HERE TO GO HOME</a>
        </div>
    </section>
    )
}