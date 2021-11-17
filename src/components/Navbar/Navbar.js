import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const Nav = styled.nav`
    background: ${({ scrollNav }) =>
        scrollNav ? "rgba(10, 17, 26, 0.9)" : "transparent"};
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    transition: 0.8s all ease;

    @media (min-width: 320px) and (max-width: 599px) {
        height: 80px;
    }
`;

export const NavbarContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    height: 80px;
    padding-right: 35px;
    padding-left: 35px;
    margin-right: auto;
    margin-left: auto;
    z-index: 1;

    @media (min-width: 1281px) {
        max-width: 1200px;
    }

    @media (min-width: 1100px) and (max-width: 1280px) {
        max-width: 1100px;
    }

    @media (min-width: 840px) and (max-width: 1099px) {
        max-width: 950px;
    }

    @media (min-width: 600px) and (max-width: 839px) {
        max-width: 830px;
    }

    @media (min-width: 320px) and (max-width: 599px) {
        max-width: 550px;
    }
`;

export const NavLogo = styled(LinkR)`
    color: #ffffff;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    font-weight: bold;
    text-decoration: none;
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
`;

export const NavItem = styled.li`
    height: 80px;
`;

export const NavLinks = styled.div`
    color: #ffffff;
    display: flex;
    align-items: center;
    text-decoration: none;
    font-weight: 600;
    height: 100%;
    cursor: pointer;
    transition: all 0.4s ease-in-out;

    &.active {
        background-color: #9e45c5;
        color: #fff;
        &:hover {
            color: #fff;
        }
    }

    &:hover {
        color: #9e45c5;
    }
`;

export const ObjectSVG = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    transform: rotate(180deg);

    & svg {
        position: relative;
        display: block;
        width: calc(184% + 1.3px);
        height: 370px;
    }
`;

export const LogoImg = styled.img`
    height: 35px;
    transition: 0.3s all ease;

    &:hover {
        transform: scale(1.1);
    }
`;

export const GithubIcon = styled.img`
    height: 35px;
    transition: 0.3s all ease;

    &:hover {
        transform: scale(1.1);
    }
`;
