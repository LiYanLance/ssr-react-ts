import React from "react";
import {HeroCardProps} from "./types";

export const HeroCard = ({title, imageSource, excerpt, href}: HeroCardProps) => {
    return (
        <a href={href}>
            <div style={{width: "100px", height: "90px", border: "1px solid black"}}>
                <img src={imageSource} width="98px" height="60px"/>
                <span>{title}</span>
                <p>{excerpt}</p>
            </div>
        </a>
    )
}
