import React from "react";
import Header from "./Screens/NavBar/header.js";
import Hero from "./Screens/Hero/hero.js";
import AboutShort from "./Screens/AboutShort/aboutShort.js";
import CallToAction from "./Screens/CallToAction/CTA.js";
import Cursor from "./Components/Cursor/cursor.js";
import Footer from "./Screens/Footer/footer.js";
import FishTank from "./Screens/FishTank/fishtank.js";
import ProjectShort from "./projectShort.js";
import Noise from "./Components/Noise/noise.js";

import "./home.css";
import Divider from "./Components/Divider/divider.js";

function cursorMotion(cursorClass, e) {
    // console.log('hey');
    var mouseCursor = document.getElementById(cursorClass);
    mouseCursor.style.top = `${e.pageY}px`;
    mouseCursor.style.left = `${e.pageX}px`;
}

function changeSize(sizeClass, e) {
    var sizedClass = document.getElementById(sizeClass);
    sizedClass.style.minHeight = `${50}vh`;
}

function Home() {
    // window.addEventListener("mousemove", (e) => {
    // 	cursorMotion("cursor", e);
    // });

    // window.addEventListener("mouseLeave", (e) => {
    //   changeSize("hero", e);
    // });

    return ( <
        div >
        <
        Noise / >
        <
        Header / > { /* <Cursor/> */ } <
        Hero / >
        <
        CallToAction / >
        <
        AboutShort / >
        <
        Divider / >
        <
        ProjectShort / >
        <
        FishTank / >
        <
        Footer / >
        <
        /div>
    );
}

export default Home;
// ReactDOM.render(<Home />, document.getElementById("root"));
// ReactDOM.render(<sideNav/>, document.getElementById('root'));