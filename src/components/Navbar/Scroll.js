import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { animateScroll as scroll } from "react-scroll";
import { FaAngleUp } from "react-icons/fa";

const IconButtonnya = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff;
    border-radius: 10px;
    width: 40px;
    height: 40px;
    position: fixed;
    z-index: 2;
    bottom: 2vh;
    right: 2.5%;
    cursor: pointer;
    transition: 1s all ease-out;
    opacity: ${({ scrollIcon }) => (scrollIcon ? "0" : "1")};
`;

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
        <>
            <IconButtonnya scrollIcon={scrollIcon} onClick={toggleHome}>
                <FaAngleUp />
            </IconButtonnya>
        </>
    );
};
export default Scroll;
