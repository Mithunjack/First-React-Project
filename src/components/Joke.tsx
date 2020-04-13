import React from "react";

function Joke(props:any) {
    return (
        <div className="Joke">
            <h1 style={{display : props.content.question == null ? 'none' : 'block'}}>Question : {props.content.question}</h1>
            <h4 style={{color: props.content.question == null ? "orangered" : 'white' }}>Answer: {props.content.punchLine}</h4>
        </div>
    );
}

export default Joke