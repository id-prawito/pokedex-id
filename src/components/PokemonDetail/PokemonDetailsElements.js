import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const PokemonDetailsContainer = styled.div`
    width: 100%;
    height: 90vh;
    justify-content: center;
    margin-right: auto;
    margin-left: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* padding: 35px; */

    @media (min-width: 1280px) {
        max-width: 1200px;
    }

    @media (min-width: 1024px) and (max-width: 1280px) {
        max-width: 1100px;
    }

    @media (min-width: 950px) and (max-width: 1023px) {
        max-width: 950px;
    }

    @media (min-width: 580px) and (max-width: 949px) {
        max-width: 800px;
        height: 170vh;
        justify-content: flex-start;
    }

    @media (min-width: 320px) and (max-width: 579px) {
        max-width: 600px;
        height: 100%;
        justify-content: flex-start;
    }
`;

export const PokemonDetailsContent = styled.div`
    display: grid;
    row-gap: 20px;
    padding: 35px;
    grid-template-columns: 0.5fr 1.5fr 1fr;
    width: 100%;
    height: 80%;

    @media (min-width: 580px) and (max-width: 949px) {
        display: flex;
        flex-direction: column;
        height: 100%;
    }

    @media (min-width: 320px) and (max-width: 579px) {
        display: flex;
        flex-direction: column;
        height: 100%;
    }
`;

export const HeaderDetails = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: space-between;

    @media (min-width: 560px) and (max-width: 949px) {
        flex-direction: row;
    }
    @media (min-width: 320px) and (max-width: 559px) {
        flex-direction: column;
    }
`;

export const BodyDetails = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
`;
export const FooterDetails = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    gap: 20px;
`;

export const NomorJudul = styled.div`
    margin-top: 0;
    margin-bottom: 0;
    left: 0;
    right: auto;
`;

export const Nomor = styled.h2`
    font-size: 16px;
    font-weight: 600;
    color: #fff;
    margin-bottom: 10px;
`;

export const Nama = styled.h2`
    font-size: 20px;
    font-weight: 700;
    color: #fff;
    margin-bottom: 10px;
    text-transform: capitalize;
`;

export const NamaGenera = styled.h2`
    font-size: 20px;
    font-weight: 700;
    color: #fff;
    text-transform: capitalize;
`;

export const WeightHeight = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;

    @media (min-width: 640px) and (max-width: 949px) {
        flex-direction: row;
    }

    @media (min-width: 320px) and (max-width: 579px) {
        flex-direction: column;
    }
`;

export const Weight = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    @media (min-width: 320px) and (max-width: 579px) {
        justify-content: flex-start;
    }
`;

export const Judulnya = styled.h2`
    font-size: 14px;
    font-weight: 400;
    color: #fff;
    padding: 5px;
    @media (min-width: 580px) and (max-width: 949px) {
        padding: 0 5px;
    }

    @media (min-width: 320px) and (max-width: 579px) {
        padding: 0;
    }
`;

export const Isinya = styled.h2`
    font-size: 16px;
    font-weight: 500;
    color: #0079ff;
    padding: 10px;
    @media (min-width: 580px) and (max-width: 949px) {
        padding: 0 10px;
    }
    @media (min-width: 320px) and (max-width: 579px) {
        padding: 0 10px;
    }
`;

export const Region = styled.div`
    margin-bottom: 0;
    left: 0;
    right: auto;
`;

export const DescriptionPokemon = styled.div`
    margin-top: 0;
    margin-bottom: 0;
    left: 0;
    right: auto;
    text-align: right;
    width: 100%;
    @media (min-width: 320px) and (max-width: 949px) {
        text-align: left;
    }
`;

export const About = styled.h2`
    font-size: 16px;
    font-weight: 600;
    color: #fff;
    margin-bottom: 10px;
`;

export const Description = styled.p`
    font-size: 14px;
    font-weight: 400;
    color: #fff;
    margin-bottom: 10px;
`;

export const ImgBody = styled.img`
    height: 300px;
    transition: 0.1s all ease;
    cursor: pointer;
    opacity: 0.5;
    max-width: 100%;
    filter: grayscale(100%);
    &:hover {
        opacity: 1;
        filter: grayscale(0%);
        transform: scale(1.3);
    }

    @media (min-width: 580px) and (max-width: 949px) {
        height: 400px;
        padding: 50px;
    }

    @media (min-width: 320px) and (max-width: 579px) {
        height: 300px;
        padding: 30px;
    }
`;

export const Tulisan = styled.span`
    display: block;
    position: absolute;
    bottom: auto;
    top: 200px;
    bottom: auto;
    right: auto;
    left: auto;
    font-family: "Nunito", sans-serif;
    font-size: 130px;
    font-weight: 600;
    word-break: keep-all;
    word-wrap: normal;
    transform: translateX(-45%);
    opacity: 0.5;
    color: rgba(0, 0, 0, 0.67);

    @media (min-width: 1024px) and (max-width: 1280px) {
        font-size: 110px;
    }

    @media (min-width: 950px) and (max-width: 1023px) {
        font-size: 100px;
    }

    @media (min-width: 580px) and (max-width: 949px) {
        top: 270px;
        left: 250px;
        font-size: 100px;
    }

    @media (min-width: 320px) and (max-width: 579px) {
        width: 100%;
        font-size: 45px;
        display: contents;
        color: #fff;
    }
`;

export const Icon = styled.img`
    transition: 0.1s all ease;
    height: 30px;
    width: 30px;
    cursor: pointer;
    opacity: 0.5;
    filter: grayscale(100%);
    &:hover {
        opacity: 1;
        filter: grayscale(0%);
        transform: scale(1.3);
    }
`;

export const BungkusIcon = styled.div`
    display: flex;
    border-radius: 16px;
    justify-content: center;
    align-items: center;
    height: 60px;
    width: 60px;
    border-radius: 16px;
    box-shadow: 2px 1px 10px #000067;
`;

export const TypesText = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
`;

export const FooterContent = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const StatStatus = styled.div`
    display: flex;
    flex-direction: row;
`;

export const Pembungkus = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
`;

export const AbilitiesBungkus = styled.div`
    display: flex;
    background: linear-gradient(to bottom, #ffffff 0%, #f7f7f7 100%);
    border-radius: 8px;
    justify-content: center;
    align-items: center;
    height: 30px;
    margin-left: 20px;
    /* width: 200px; */
    color: #222;
    font-size: 14px;
    font-weight: 500;

    @media (min-width: 320px) and (max-width: 949px) {
        margin-right: 20px;
        margin-left: 0;
    }
`;

export const PembungkusAbilities = styled.div`
    display: grid;
    grid-template-columns: repeat(3, auto);
    /* gap: 20px; */
    justify-content: flex-end;

    @media (min-width: 320px) and (max-width: 949px) {
        justify-content: flex-start;
    }
`;

export const Progress = styled.div`
    background-color: rgb(233, 233, 233);
    border-radius: 0.5rem;
`;

export const Progressnya = styled.div`
    height: 10px;
    border-radius: 1rem;
    width: ${(props) => props.width}%;
    transition: 1s ease-in-out;
`;

export const BungkusProgress = styled.div`
    width: 200px;

    @media (min-width: 320px) and (max-width: 949px) {
        width: 100%;
    }
`;

export const Text = styled.h2`
    font-size: 14px;
    font-weight: 600;
    color: #fff;
    text-align: left;
    width: 130px;
    text-transform: capitalize;

    @media (min-width: 580px) and (max-width: 949px) {
        width: 200px;
    }
`;

export const BungkusHpProgress = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 14px;
`;

export const Bungkusan = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 14px;

    @media (min-width: 580px) and (max-width: 949px) {
        width: 100%;
    }

    @media (min-width: 320px) and (max-width: 579px) {
        width: 100%;
        flex-direction: column;
        align-items: flex-start;
    }
`;

export const BaseStat = styled.h2`
    font-size: 16px;
    font-weight: 600;
    color: #fff;
    margin-bottom: 10px;
    margin-top: 10px;
`;

export const TextValue = styled.h2`
    font-size: 14px;
    font-weight: 600;
    color: #fff;
    text-align: right;
    text-transform: capitalize;

    @media (min-width: 320px) and (max-width: 579px) {
        margin-left: auto;
        margin-right: 0;
    }
`;

export const Evalution = styled.div`
    display: flex;
    align-items: flex-end;
    bottom: 0;
`;

export const BungkusanDetails = styled.div`
    display: flex;
    justify-content: space-between;
    height: 100%;
    align-items: center;

    @media (min-width: 320px) and (max-width: 579px) {
        flex-direction: column;
    }
`;

export const BungkusanDetailsBawah = styled.div`
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
`;

export const BungkusEvalution = styled.div`
    display: flex;
    flex-direction: column;
    background: linear-gradient(to bottom, #ffffff 0%, #7b7b7b 100%);
    border-radius: 16px;
    justify-content: center;
    align-items: center;
    height: 100px;
    width: 100px;
    border-radius: 16px;
    /* background: #dad8d8; */
    box-shadow: 2px 1px 10px #000067;
`;

export const IconEvo = styled.img`
    transition: 0.1s all ease;
    height: 60px;
    width: 60px;
    cursor: pointer;
    opacity: 0.5;
    filter: grayscale(100%);
    &:hover {
        opacity: 1;
        filter: grayscale(0%);
        transform: scale(1.2);
    }
`;

export const PembungkusDetails = styled.div`
    display: flex;
    flex-direction: row;
    gap: 50px;

    /* @media (min-width: 320px) and (max-width: 579px) {
        flex-direction: column;
        gap: 20px;
    } */

    @media (min-width: 320px) and (max-width: 500px) {
        flex-direction: column;
        gap: 20px;
    }
`;

export const NamaDetails = styled.p`
    padding-top: 6px;
    font-size: 12px;
    font-weight: 500;
    color: #fff;
    text-transform: capitalize;
    text-decoration: none;
`;

export const Textnya = styled.p`
    display: inline-block;
    font-size: 14px;
    font-weight: 500;
    color: #222;
    padding-right: 14px;
    padding-left: 14px;
`;

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
`;

export const NavbarContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding-right: 35px;
    padding-left: 35px;
    margin-right: auto;
    margin-left: auto;
    z-index: 1;

    @media (min-width: 1281px) {
        max-width: 1200px;
    }

    @media (min-width: 1024px) and (max-width: 1280px) {
        max-width: 1100px;
    }

    @media (min-width: 950px) and (max-width: 1023px) {
        max-width: 950px;
    }

    @media (min-width: 580px) and (max-width: 949px) {
        max-width: 800px;
    }

    @media (min-width: 320px) and (max-width: 579px) {
        max-width: 600px;
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

export const LogoImg = styled.img`
    height: 35px;
    transition: 0.3s all ease;

    &:hover {
        transform: scale(1.1);
    }
`;
