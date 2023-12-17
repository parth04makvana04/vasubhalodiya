import "./footer.css";
import Button from "../../Components/Button/button.js";

function Footer() {
    return ( <
        div className = "footer"
        id = "footer" >
        <
        div className = "section" >
        <
        p className = "text-s textSemibold" >
        Navaneeth <
        br / > Venu <
        br / >
        <
        span className = "text-xs textRegular" >
        2023. All Rights Reserved. <
        /span>{" "} <
        /p> <
        /div>

        <
        div className = "section" >
        <
        p className = "text-s textSemibold" >
        In this < br / >
        Space <
        br / >
        <
        span className = "text-xs textRegular" >
        <
        a href = "#about" > Get to know me < /a> <
        br / >
        <
        a href = "#projectShort" > Stuff I 've worked on</a> <
        /span> <
        /p> <
        /div>

        <
        div className = "section" >
        <
        p className = "text-s textSemibold" >
        Stay < br / >
        Caught Up <
        br / >
        <
        span className = "text-xs textRegular" >
        <
        a href = "https://twitter.com/navaneethvenu" > Twitter < /a> <
        br / >
        <
        a href = "https://behance.net/navaneethvenu" > Behance < /a> <
        br / >
        <
        a href = "https://figma.com/@navaneeth" > Figma < /a> <
        br / >
        <
        /span> <
        /p> <
        /div> <
        /div>
    );
}

export default Footer;