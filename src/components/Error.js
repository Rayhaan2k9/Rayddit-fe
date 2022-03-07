import React from "react";

export const Error = (props) => {
console.log(props.error)

    return (
        <div id="error-container">
            <h1>{props.error.status}</h1>
            <h1>{props.error.data.message}</h1>
        </div>
    )
}