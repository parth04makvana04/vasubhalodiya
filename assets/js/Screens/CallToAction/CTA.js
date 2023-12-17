import "./CTA.css";
import Button from "../../Components/Button/button.js";

function CallToAction() {
    return ( <
        div className = "callToAction" >
        <
        p className = "text-l" >
        New Projects✷ < span className = "textBold" > June '23</span> <
        /p> { /* <div className="spacer"></div> */ } <
        Button icon = "go"
        text = "Get in Touch"
        href = "#footer"
        type = "dark" / >
        <
        /div>
    );
}

export default CallToAction;