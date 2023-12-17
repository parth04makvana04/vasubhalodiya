import "./fishtank.css";
import FishImg from "../../Images/Fish.svg";
import Button from "../../Components/Button/button.js";

function FishTank() {
    return ( <
        div className = "fishtank"
        id = "contact" >
        <
        GetFish num = "15" / >
        <
        div style = {
            {
                padding: "100px 15vw ",
                zIndex: 1,
                display: "flex",
                flexDirection: "column",
            }
        } >
        <
        p className = "text-l"
        style = {
            {
                textAlign: "center"
            }
        } >
        Stop fishing
        for likes. < br / >
        <
        span className = "textBold" > Let 's build a brand</span>. <
        /p> <
        Button icon = "mail"
        text = "Say Hello"
        href = "mailto:nauaneeth+work@gmail.com"
        type = "dark"
        sizing = "stretch" /
        >
        <
        /div> <
        /div>
    );
}

function GetFish(props) {
    var fishes = [];
    for (var i = 0; i < props.num; ++i) {
        fishes.push( < Fish key = {
                i
            }
            num = {
                i
            }
            />);
        }
        return < > {
            fishes
        } < />;
    }

    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    function Fish() {
        let x = getRndInteger(0, 10);
        console.log(x);
        return ( <
            div className = "fishContainer"
            style = {
                {
                    top: x * 10 + "%",
                    animationDelay: x + "s",
                    width: x * 30 + "px",
                    height: x * 30 + "px",
                    // zIndex: x,
                    opacity: x * 10 + "%",
                }
            } >
            <
            img src = {
                FishImg
            } > < /img> <
            /div>
        );
    }

    export default FishTank;