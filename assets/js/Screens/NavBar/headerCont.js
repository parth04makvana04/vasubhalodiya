import "./header.css";
import menuIcon from "../../Images/menu.svg";
import Button from "../../Components/Button/button.js";
import * as navFunctions from "./navFunctions.js";
import React from "react";
import Resume from "./../../utils/Navaneeth Venu-Resume-July 2022.pdf";

function HeaderCont(props) {
    return ( <
        div className = "header" >
        <
        div className = "left"
        id = "logo" >
        <
        a href = "#" >
        Navaneeth <
        br / >
        Venu <
        /a> <
        /div> <
        div className = "right" > {
            /* <NavLinks href = "#about" text="About"/>
                            <NavLinks href = "#projects" text="Projects"/>
                            <NavLinks href = "#clients" text="Clients"/>
                            <NavLinks href = "#sessions" text="Sessions"/>
                            <NavLinks href = "#contact" text="Contact"/> */
        } <
        NavLinksDesktop navList = {
            navFunctions.navList
        }
        /> <
        Button icon = "download"
        text = "Download Resume"
        href = {
            Resume
        }
        download = "NavaneethVenu-Resume"
        type = "default" /
        >
        <
        img src = {
            menuIcon
        }
        onClick = {
            props.func
        }
        alt = "" / >
        <
        /div> <
        /div>
    );
}

class NavLinks extends React.Component {
    constructor(props) {
        super(props);
        // this.href=props.href;
        // this.name=props.name;
        // this.state={
        //     active:this.props.active
        // };
    }
    render() {
        return ( <
            a className = {
                this.props.active ? "navLinkDesktop activeDesktop" : "navLinkDesktop"
            }
            href = {
                this.props.href
            }
            onClick = {
                this.toggleActive
            } >
            {
                this.props.text
            } {
                " "
            } <
            /a>
        );
    }

    toggleActive = () => {
        // this.props.setActive(this.props.current);
        this.props.func(this.props.current);
        // console.log("whoa")
        // this.setState({active: this.state.active});
    };
}

class NavLinksDesktop extends React.Component {
    constructor(props) {
        super(props);
        this.navList = this.props.navList;
        this.state = {
            navList: this.navList,
        };
    }
    render() {
        var navLinks = [];
        for (var i = 0; i < this.state.navList.navItems.length; ++i) {
            navLinks.push( <
                NavLinks key = {
                    i
                }
                current = {
                    i
                }
                active = {
                    this.state.navList.navItems[i].active
                }
                href = {
                    this.state.navList.navItems[i].href
                }
                text = {
                    this.state.navList.navItems[i].name
                }
                func = {
                    (i) => {
                        this.updateActive(i);
                    }
                }
                />
            );
        }
        return < > {
            navLinks
        } < />;
    }

    updateActive = (i) => {
        // console.log(this.state.navList);
        this.state.navList.setActive(i);
        // console.log(this.state.navList);
        // console.log("hey"+i+this.state.navList.navItems[4].active);
        // this.props.setActive(this.props.current);
        this.setState({
            navList: this.state.navList
        });
    };
}
// console.log("did this work"+navFunctions.navList.navItems[3].href);

export default HeaderCont;