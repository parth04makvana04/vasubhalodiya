import "./chip.css";

function Chip(props) {
    return <div className = "chip" > {
        props.text
    } < /div>;
}

export default Chip;