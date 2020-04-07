import React from 'react';

function  MyInfo() {

    const  time = new Date();
    const currentTime = time.getHours();
    let message;

    const style1 = {
        backgroundColor: "lightcyan",
        color: "black",
        padding : 10
    }
    const style2 = {
        color: "red",
        fontSize : 28,
        margin :  15
    }
    const style3 = {
        backgroundColor : "lightgray"
    }

    let name = "Mithun Das";

    if (currentTime>16){
        message = "Good Evening";
    }
    else if(currentTime>12){
        message = "Good Afternoon";
        style1.color = 'grey';
        style2.margin = 10;
    }
    else if(currentTime<12){
        message = 'Good Night';
    }

    return (
        <div>
            <h1>{name}</h1>
            <p>About Yourself</p>
            <ul style={style3}>
                <li style={style2}>Switzerland</li>
                <li>Spain</li>
                <li>Sweden</li>
            </ul>

            <p style={style1}>Hi {name + '! ' + message}</p>
        </div>
    );
}

export default MyInfo;