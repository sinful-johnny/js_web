import React from "react";
import myPhoto from "../images/cute-photo.png";
import mailIcon from "../images/mail.png"

export default function Info(){
    return (
        <div className="Info-section">
            <img src={myPhoto} width="100%"/>
            <h2>Walter Handler</h2>
            <h4>PSO2NGS Player</h4>
            <a href="#">
                walterhandler.website
            </a>
            <button class="button">
                <img src={mailIcon}/>
                <p>Email</p>
            </button>
        </div>
    )
}