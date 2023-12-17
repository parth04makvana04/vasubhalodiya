// /* Set the width of the side navigation to 250px */
// function openNav() {
//     document.getElementById("sideNavID").style.width = "100vw";
// }

// /* Set the width of the side navigation to 0 */
// function closeNav() {
//     document.getElementById("sideNavID").style.width = "0";
// }

/*Add Strike*/
// function addStrike(classNumber) {
//     var oldElement = document.getElementsByClassName('activeLink')[0];
//     var newElement = document.getElementsByClassName('navItem')[classNumber];
//     oldElement.classList.remove('activeLink');
//     newElement.classList.add('activeLink');

// }

class NavItem {
    constructor(name, href) {
        this.name = name;
        this.href = href;
        this.active = false;
    }
}

class NavList {
    constructor(navData) {
        this.navData = navData;
        var navItems = [];
        for (var i = 0; i < navData.length; ++i) {
            navItems.push(new NavItem(navData[i]["name"], navData[i]["href"]));
        }
        this.navItems = navItems;
    }

    setActive(i) {
        this.clearActive();
        this.navItems[i].active = true;
    }

    clearActive() {
        for (var i = 0; i < this.navItems.length; i++) {
            console.log("wha");
            this.navItems[i].active = false;
        }
    }
}

var navData = [{
        name: "About",
        href: "#about",
    },
    {
        name: "Projects",
        href: "#projectShort",
    },
    // {
    // 	name: "Clients",
    // 	href: "#clients",
    // },

    {
        name: "Contact",
        href: "#contact",
    },
];

var navList = new NavList(navData);
// console.log("navfUNC"+navList.navItems[3].href);

export {
    navList
};