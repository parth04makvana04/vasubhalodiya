import "./button.css";
import Icon from "../Icon/icon.js";
import React, {
    useState
} from "react";

function cursorEnter(cursorClass, e) {
    var mouseCursor = document.getElementById(cursorClass);
    mouseCursor.style.height = "2.5rem";
    mouseCursor.style.width = "2.5rem";
}

function cursorLeave(cursorClass, e) {
    var mouseCursor = document.getElementById(cursorClass);
    mouseCursor.style.height = "2rem";
    mouseCursor.style.width = "2rem";
}

function Button(props) {
    const iconColors = ["var(--primary-color)", "white"];
    const [iconColor, setIconColor] = useState(
        props.type == "default" ? iconColors[0] : iconColors[1]
    );
    return ( <
        a onMouseEnter = {
            (e) => {
                cursorEnter("cursor", e);
                setIconColor(
                    iconColor == iconColors[0] ? iconColors[1] : iconColors[0]
                );
            }
        }
        onMouseLeave = {
            (e) => {
                cursorLeave("cursor", e);
                setIconColor(
                    iconColor == iconColors[0] ? iconColors[1] : iconColors[0]
                );
            }
        }
        className = {
            "button " + props.type
        }
        href = {
            props.href
        }
        download = {
            props.download
        }
        onClick = {
            props.onClick
        } >
        {
            props.text
        } <
        span className = {
            (props.type == "outlined" ? "iconLight" : "iconDark") +
            " " +
            (props.sizing == "hug" ? "hug" : "stretch")
        } >
        <
        Icon className = "icon"
        icon = {
            props.icon
        }
        color = {
            iconColor
        } > < /Icon> <
        /span> <
        /a>
    );
}

export default Button;