import React from "react";
import {HeroCardProps} from "./types";

export const HeroCard = ({title, imageSource, excerpt, href}: HeroCardProps) => {
    return (
        <a href={href}>
            <div style={{width: "200px", height: "auto", border: "1px solid black"}}>
                <img src={imageSource} width="100%" height="auto"/>
                <p style={{textAlign: "center"}}>{title}</p>
                <span>{excerpt}</span>
            </div>
        </a>
    )
}
