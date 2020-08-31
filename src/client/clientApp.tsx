import React from "react";
import { render } from "react-dom"
import { HeroCard } from "./components"
// @ts-ignore
import HeroImage from "../assets/images/hero.jpeg"

export const App = () => {
    const heroData = {
        title: "Some Card",
        imageSource: HeroImage,
        href: "https://www.github.com/LiYanLance",
        excerpt: "Hello there"
    }

    return <HeroCard {...heroData}/>
}

render(<App />, document.querySelector("#root"));
