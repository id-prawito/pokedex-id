import React, { useEffect, useState } from "react";
import { animateScroll as scroll } from "react-scroll";
import logoImg from "../../assets/images/pokedex.png";
import github from "../../assets/images/github-white.svg";
import {
    GithubIcon,
    LogoImg,
    Nav,
    NavbarContainer,
    NavItem,
    NavLinks,
    NavLogo,
    NavMenu,
} from "./Navbar";

const Navbar = () => {
    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if (window.scrollY >= 150) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", changeNav);
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    };

    const openGithub = () => {
        window.open("https://github.com/id-prawito");
    };
    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to="/" onClick={toggleHome}>
                        <LogoImg src={logoImg}></LogoImg>
                    </NavLogo>
                    <NavMenu>
                        <NavItem>
                            <NavLinks onClick={openGithub}>
                                <GithubIcon src={github} />
                            </NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    );
};

export default Navbar;
