import React from "react";
import facebook from "../images/facebook.png";
import github from "../images/github.png";
import instagram from "../images/instagram.png";
import linkedin from "../images/linkedin.png";
import twitter from "../images/twitter.png";

export default function Footer(){
    return (
        <div className="Footer-section">
            <a href="#"><img src={facebook} width={25} height={25}/></a>
            <a href="#"><img src={instagram} width={25} height={25}/></a>
            <a href="#"><img src={twitter} width={25} height={25}/></a>
            <a href="#"><img src={github} width={25} height={25}/></a>
            <a href="#"><img src={linkedin} width={25} height={25}/></a>
        </div>
    )
}