import styled from "styled-components";
import imgUrl from "../../assets/images/pokemon.svg";

export const AboutText = styled.p`
    font-size: 12px;
    color: #fff;
    font-weight: 500;
    text-align: center;
`;

export const About = styled.div`
    display: grid;
    background-color: #5fbd58;

    height: 22px;
    max-width: 50%;
    margin-bottom: -10px;
    border-radius: 8px;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    z-index: 2;
    align-items: center;
`;

export const ImageCard = styled.img`
    height: 100px;
    transition: 0.1s all ease;
    cursor: pointer;
    opacity: 0.5;
    max-width: 100%;
    filter: grayscale(100%);
    /* &:hover {
        opacity: 1;
        filter: grayscale(0%);
        transform: scale(1.3);
    } */
`;

export const Card = styled.div`
    width: 100%;
    min-height: 300px;
    text-align: center;
    border-radius: 24px;
    margin: 0;
    position: relative;
    display: inline-block;
    background-color: #222;
    overflow: hidden;

    &::before {
        content: "";
        background-image: url(${imgUrl});
        position: absolute;
        left: -30px;
        top: -10px;
        width: 43%;
        height: 30%;
        opacity: 0.2;
        /* clip-path: circle(100%); */
        transition: 0.5s ease-in-out;
    }

    &:hover::before {
        /* clip-path: circle(70px at 5% 5%); */
        transform: scale(1.3);
    }

    &::after {
        content: "${(props) => props.Namanya}";
        position: absolute;
        text-transform: capitalize;
        top: 50%;
        font-size: 5em;
        font-weight: 800;
        font-style: italic;
        color: rgba(255, 255, 25, 0.03);
        left: -10%;
        right: -10%;
    }

    &:hover ${ImageCard} {
        opacity: 1;
        filter: grayscale(0%);
        transform: scale(1.3);
    }
`;

export const Header = styled.div`
    grid-area: header;
    gap: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
`;

export const Utama = styled.div`
    grid-area: utama;
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100px;
    margin: auto;
`;

export const Footer = styled.div`
    grid-area: footer;
    margin-top: 10px;
`;

export const IconTypes = styled.img`
    transition: 0.1s all ease;
    height: 14px;
    width: 14px;
    cursor: pointer;
    opacity: 0.8;
    filter: grayscale(100%);
    &:hover {
        opacity: 1;
        filter: grayscale(0%);
        transform: scale(1.3);
    }
`;

export const IsiCard = styled.div`
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: auto;
    row-gap: 20px;
    grid-template-areas:
        "header"
        "utama"
        "footer";
    padding: 20px;
`;

export const MainFooter = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    background-color: rgba(255, 255, 255, 0.64);
    height: 45px;
    max-width: 100%;
    border-radius: 8px;
    text-align: center;
    gap: 5px;
    padding: 6px 0;
    position: relative;
    z-index: 1;
`;

export const JudulW = styled.p`
    font-size: 10px;
    color: rgba(255, 255, 255, 0.64);
    color: #fff;
    font-weight: 500;
`;

export const Penjelasan = styled.p`
    font-size: 12px;
    color: rgba(255, 255, 255, 0.64);
    color: #000;
    font-weight: 500;
`;

export const Name = styled.h4`
    display: inline-block;
    text-transform: capitalize;
    color: rgba(255, 255, 255, 0.64);
`;

export const Number = styled.p`
    display: inline-block;
    color: rgba(255, 255, 255, 0.64);
    font-weight: 600;
`;

export const Types = styled.div`
    display: flex;
    background-color: ${(props) => props.color};
    padding: 10px;
    max-width: 80px;
    border-radius: 8px;
    text-align: center;
    gap: 5px;
`;

export const TypesText = styled.div`
    display: flex;
    flex-direction: row;
    gap: 5px;
`;

export const Weight = styled.div`
    margin-top: 5px;
    display: flex;
    flex-direction: column;
`;
