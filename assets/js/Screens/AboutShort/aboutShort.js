import "./aboutShort.css";
import aboutImg from "../../Images/aboutAnim.gif";

function AboutShort() {
    return ( <
        div className = "aboutShort"
        id = "about" >
        <
        div className = "textSection" >
        <
        p className = "textRegular text-s label" > About < /p> <
        p className = "textRegular text-l displayfont" >
        I craft memorable, {
            " "
        } <
        span className = "highlightText" > user - centric experiences < /span>{" "}
        through, < span className = "highlightText" > well - thought - out < /span>{" "}
        interfaces. <
        /p> <
        p className = "textRegular text-s" >
        Ideas and concepts, are key to my process.It’ s about applying to real world applications, all the
        while {
            " "
        } <
        span className = "textBold" > breaking out of the box. < /span> <
        /p>

        {
            /* <div className="buttonContainer">
                            <Button icon ={iconGo} text="See my work"  href="#projects" type="outlined"/>
                            <div className="spacer"></div>
                            <Button icon={iconDownload} text="Download Resume"  href="/Resume.pdf" download='NavaneethVenu-Resume' type="default"/>
                        </div> */
        } <
        /div> <
        div className = "imgContainer" >
        <
        img src = {
            aboutImg
        } > < /img> <
        /div> <
        /div>
    );
}

export default AboutShort;