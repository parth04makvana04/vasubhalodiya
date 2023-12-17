import "./header.css";
import * as navFunctions from "./navFunctions.js";
import React from "react";

import Resume from "./../../utils/Navaneeth Venu-Resume-July 2022.pdf";

class SideNavItem extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return ( <
            a className = {
                this.props.active ? "navItem activeLink" : "navItem"
            }
            href = {
                this.props.href
            }
            onClick = {
                this.toggleActive
            } >
            {
                this.props.text
            } <
            /a>
        );
    }

    toggleActive = () => {
        this.props.func(this.props.current);
    };
}

class SideNavItems extends React.Component {
    constructor(props) {
        super(props);
        this.navList = this.props.navList;
        this.toggle = this.props.toggle;
        this.state = {
            navList: this.navList,
        };
    }

    render() {
        var navLinks = [];
        for (var i = 0; i < this.state.navList.navItems.length; ++i) {
            navLinks.push( <
                SideNavItem key = {
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
        this.state.navList.setActive(i);
        this.props.toggle();
        this.setState({
            navList: this.state.navList
        });
    };
}

class SideNav extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return ( <
            div id = "sideNavID"
            className = "sideNav"
            style = {
                {
                    width: this.props.open ? "100vw" : "0"
                }
            } >
            <
            div className = "sideHeader" >
            <
            div className = "left"
            id = "logo" >
            <
            a href = "#" >
            Navaneeth <
            br / >
            Venu {
                " "
            } <
            /a> <
            /div> <
            div className = "right"
            onClick = {
                this.props.func
            } >
            <
            a className = "closebtn" > & times; < /a> <
            /div> <
            /div> <
            div className = "sideContent" >
            <
            SideNavItems navList = {
                navFunctions.navList
            }
            toggle = {
                this.props.func
            }
            /> <
            a className = "navItem"
            href = {
                Resume
            }
            download = "NavaneethVenu-Resume"
            onClick = {
                this.props.func
            } >
            Download Resume <
            /a> <
            /div> <
            /div>
        );
    }
}

export default SideNav;