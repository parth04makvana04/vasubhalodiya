import "./hero.css";
import heroImg from "../../Images/HeroAnim.svg";
import Button from "../../Components/Button/button.js";
import Resume from "./../../utils/Navaneeth Venu-Resume-July 2022.pdf";

function Hero() {
    return ( <
        div className = "hero"
        id = "hero" >
        <
        div className = "textSection" >
        <
        h1 className = "textRegular text-xl displayfont" >
        Crafting designs that {
            " "
        } <
        span className = "highlightText" > tell stories. < /span> <
        /h1> <
        div className = "buttonContainer" >
        <
        Button icon = "go"
        text = "See my work"
        href = "#projects"
        type = "outlined" /
        >
        <
        div className = "spacer" > < /div> <
        Button icon = "download"
        text = "Download Resume"
        href = {
            Resume
        }
        download = "NavaneethVenu-Resume"
        type = "default" /
        >
        <
        /div> <
        /div>

        <
        div className = "imgContainer" >
        <
        div className = "heroImg" > < /div> <
        /div> <
        /div>
    );
}

export default Hero;