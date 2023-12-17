import "./project.css";
import GetProjects from "./project.js";

function ProjectMain() {
    return ( <
        div className = "projectShort" >
        <
        div className = "projectHeader" >
        <
        h1 className = "text-xl" >
        Selected <
        br / >
        Projects <
        /h1> <
        a href = "#projects"
        className = "text-s textRegular" >
        View All <
        /a> <
        /div> <
        div className = "projectContainer" >
        <
        GetProjects n = "x" / >
        <
        /div> <
        /div>
    );
}

export default ProjectMain;