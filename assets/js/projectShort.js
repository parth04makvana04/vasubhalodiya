import "./project.css";
import GetProjects from "./project.js";

function ProjectShort() {
    return ( <
        div className = "projectShort" >
        <
        div className = "projectHeader" >
        <
        h1 className = "text-l textRegular displayfont" > {
            " "
        } <
        span className = "highlightText" > Selected < /span> Projects <
        /h1> <
        a href = "#projects"
        className = "text-s textRegular"
        style = {
            {
                textAlign: "right"
            }
        } >
        { /* View All */ } <
        /a> <
        /div> <
        div className = "projectContainer"
        id = "projectShort" >
        <
        GetProjects n = "5" / >
        <
        /div> <
        /div>
    );
}

export default ProjectShort;