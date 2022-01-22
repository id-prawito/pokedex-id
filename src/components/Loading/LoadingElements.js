import styled from "styled-components";

export const CardLoading = styled.div`
    width: 220px;
    min-height: 300px;
    text-align: center;
    border-radius: 24px;
    margin: 0;
    position: relative;
    display: inline-block;
    background-color: #222;
    overflow: hidden;

    @media (min-width: 320px) and (max-width: 1099px) {
        width: 220px;
    }
`;

export const IsiCardLoading = styled.div`
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: auto;
    row-gap: 20px;
    grid-template-areas:
        "header"
        "utama"
        "footer";
    padding: 20px;
    animation: pulse 2s infinite;

    @keyframes pulse {
        0% {
            opacity: 1;
        }
        50% {
            opacity: 0.5;
        }
        100% {
            opacity: 1;
        }
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

export const Number = styled.div`
    display: inline-block;
    color: rgba(255, 255, 255, 0.1);
    border-radius: 4px;
    font-weight: 600;
    width: 50px;
    height: 20px;
    background-color: rgba(255, 255, 255, 0.1);
`;

export const Types = styled.div`
    display: flex;
    background-color: rgba(255, 255, 255, 0.1);
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

export const IconTypes = styled.div`
    transition: 0.1s all ease;
    height: 14px;
    width: 14px;
    cursor: pointer;
    opacity: 0.8;
    filter: grayscale(100%);
    border-radius: 4px;
    background-color: rgba(255, 255, 255, 0.1);
`;

export const AboutText = styled.p`
    font-size: 12px;
    color: transparent;
    font-weight: 500;
    text-align: center;
    background-color: rgba(255, 255, 255, 0.1);
    margin: auto;
    width: 50px;
    border-radius: 4px;
`;

export const About = styled.div`
    display: grid;
    background-color: rgba(255, 255, 255, 0.1);
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

export const MainFooter = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    background-color: rgba(255, 255, 255, 0.1);
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
    color: transparent;
    font-weight: 500;
    background-color: rgba(255, 255, 255, 0.1);
    margin: auto;
    width: 50px;
    border-radius: 4px;
`;

export const Penjelasan = styled.p`
    font-size: 12px;
    color: transparent;
    font-weight: 500;
    margin: auto;
    width: 70px;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 4px;
`;

export const Weight = styled.div`
    margin-top: 5px;
    display: flex;
    flex-direction: column;
`;

export const ImageCard = styled.div`
    height: 100px;
    transition: 0.1s all ease;
    cursor: pointer;
    opacity: 0.5;
    max-width: 100%;
    filter: grayscale(100%);
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
`;

export const Name = styled.h4`
    display: inline-block;
    text-transform: capitalize;
    color: transparent;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 4px;
`;

export const CardContent = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 30px;
`;
