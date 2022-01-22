import { animateScroll as scroll } from "react-scroll";
import React, { useState, useEffect } from "react";
import { FaAngleUp } from "react-icons/fa";
import { IconButtonnya } from "./NavbarElements";

const Scroll = () => {
    const [scrollIcon, setScrollIcon] = useState(true);

    const changeIcon = () => {
        if (window.scrollY >= 550) {
            setScrollIcon(false);
        } else {
            setScrollIcon(true);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", changeIcon);
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    };

    return (
        <IconButtonnya scrollIcon={scrollIcon} onClick={toggleHome}>
            <FaAngleUp />
        </IconButtonnya>
    );
};
export default Scroll;
