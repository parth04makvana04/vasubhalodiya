import "./project.css";
import projectData from "./utils/projectData.js";
import Chip from "./Components/Chip/chip";
import Icon from "./Components/Icon/icon";

function ProjectTile(props) {
    return ( <
        div className = "projectCard" >
        <
        a className = "prjImgContainer"
        href = {
            props.link
        }
        target = "_blank" >
        <
        div className = "externalcursor" >
        <
        Icon className = "icon"
        icon = "link_ext"
        color = "var(--primary-color)"
        size = {
            24
        }
        viewBox = "0 0 16 16" >
        < /Icon> <
        /div> <
        img src = {
            props.image
        } > < /img> <
        /a> <
        div className = "infoSection" >
        <
        div className = "projectTitle" >
        <
        span className = "text-m textSemibold highlightText displayfont" > {
            props.heading
        } <
        /span> <
        span className = "text-s textRegular" > {
            props.year
        } < /span> <
        /div> { /* <Divider></Divider> */ } <
        span className = "text-s textRegular " > {
            props.description
        } < /span> {
            getTypes(props.type)
        } <
        /div> <
        /div>
    );
}

function getTypes(type) {
    var typeCont = [];
    if (type != null) {
        var n = type.length;
        console.log(type, n);
        for (var i = 0; i < n; ++i) {
            console.log(i);
            typeCont.push( < Chip text = {
                    type[i]
                } > < /Chip>);
            }
            console.log(typeCont);
            return <div className = "typeContainer" > {
                typeCont
            } < /div>;
        }
    }

    function GetProjects(props) {
        var projects = [];
        var n;

        if (props.n == "x") {
            n = projectData["projects"].length - 1;
            // console.log("so the answer is: " + n);
        } else {
            n = props.n;
        }

        console.log(projectData.projects instanceof Array);
        projectData.projects.sort(sortByProperty("year", true));

        for (var i = 0; i < n; ++i) {
            console.log("./" + projectData["projects"][i]["imageURL"]);
            projects.push( <
                ProjectTile image = {
                    require("./" + projectData["projects"][i]["imageURL"])
                }
                link = {
                    projectData.projects[i].projectURL
                }
                year = {
                    projectData.projects[i].year
                }
                type = {
                    projectData.projects[i].type
                }
                heading = {
                    projectData["projects"][i]["name"]
                }
                description = {
                    truncateDescription(
                        projectData["projects"][i]["descShort"],
                        60
                    )
                }
                />
            );
        }
        return <div className = "projectList" > {
            projects
        } < /div>;
    }

    function sortByProperty(property, des = false) {
        return function(a, b) {
            if (a[property] > b[property]) return des ? -1 : 1;
            else if (a[property] < b[property]) return des ? 1 : -1;

            return 0;
        };
    }

    function truncateDescription(str, length) {
        if (str.length > length) {
            var trstr = str.substring(0, length),
                i,
                coverLength = 0;
            for (i = length; i < str.length; ++i) {
                if (str[i] != " ") {
                    trstr += str[i];
                } else {
                    trstr += "...";
                    return trstr;
                }
            }
        } else return str;
    }

    export default GetProjects;