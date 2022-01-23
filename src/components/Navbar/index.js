import { animateScroll as scroll } from "react-scroll";
import React, { useEffect, useState, useContext } from "react";
import { Nav, NavbarContainer, NavMenu } from "./NavbarElements";
import { Link } from "react-router-dom";
import github from "../../assets/images/github-white.svg";
import logoImg from "../../assets/images/pokedex.png";
import { GlobalContext } from "../../context/GlobalState";

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

    const { listPokemon } = useContext(GlobalContext);
    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <Link className="nav_logo" to="/" onClick={toggleHome}>
                        <img alt="image_nav" src={logoImg}></img>
                    </Link>
                    <NavMenu>
                        <li>
                            <Link to="/mypokemon" className="navlinks_link">
                                <p className="laptop">My Pokemon List</p>
                                <p className="mobile">List</p>
                                <span className="text_jumlah">
                                    {listPokemon.length}
                                </span>
                            </Link>
                            <div className="navlinks" onClick={openGithub}>
                                <img src={github} alt="images_github" />
                            </div>
                        </li>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    );
};

export default Navbar;
