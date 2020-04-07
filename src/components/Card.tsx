import React from "react";

    function Card(props:any) {
        return (
                <div className="card">
                    <img className = "cardimg" src={props.content.imgurl} style={{width:"100%"
                        ,height:"50%"}}></img>
                    <div className="cardcontent">
                        <p>Thursday, July 16, 2016</p>
                        <h3>Epic looking place</h3>
                        <p>A description so captivating <br/> it will blow your mind</p>
                    </div>
                    <div className="cardfooter">
                        <h3>Read More</h3>
                        <a href="#"><i className={props.content.iconClass1} style={{fontSize : 24}}></i></a>
                    </div>

                    <div className="cardbutton">
                        <i className={props.content.iconClass2} style={{fontSize : 24}}></i>
                    </div>
            </div>
        );
    }

export default Card