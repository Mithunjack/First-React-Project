import React from "react";

function Joke(props:any) {
    return (
        <div className="Joke">
            <h1>{props.content.question}</h1>
            <h4>{props.content.punchLine}</h4>
        </div>
    );
}

export default Joke