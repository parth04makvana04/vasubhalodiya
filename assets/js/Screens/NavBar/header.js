import React from "react";
import HeaderCont from "./headerCont.js";
import SideNav from "./sideNav.js";
import "../../home.css";
class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        };
    }
    render() {
        return ( <
            div >
            <
            HeaderCont open = {
                this.state.open
            }
            func = {
                this.toggleNav
            }
            /> <
            SideNav open = {
                this.state.open
            }
            func = {
                this.toggleNav
            }
            /> <
            /div>
        );
    }

    toggleNav = () => {
        console.log("hey");
        this.setState({
            open: !this.state.open
        });
    };
}

export default Header;