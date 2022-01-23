import styled from "styled-components";

export const HomeContainer = styled.div`
    width: 100%;
    height: 45vh;
    justify-content: center;
    margin-right: auto;
    margin-left: auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 1280px) {
        max-width: 1300px;
    }
    @media (min-width: 1100px) and (max-width: 1280px) {
        max-width: 1100px;
    }

    @media (min-width: 840px) and (max-width: 1099px) {
        max-width: 950px;
    }

    @media (min-width: 600px) and (max-width: 839px) {
        max-width: 830px;
        height: 60vh;
    }

    @media (min-width: 320px) and (max-width: 599px) {
        max-width: 550px;
        height: 55vh;
    }
`;

export const HomeContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 35px;
    display: grid;
    grid-template-columns: 1fr;
    @media (min-width: 320px) and (max-width: 599px) {
        padding: 10px 35px;
    }
`;

export const Content = styled.div`
    margin: 0;
`;

export const Judul = styled.h3`
    font-size: 24px;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.64);
`;

export const Description = styled.h1`
    color: #ffffff;
    font-weight: 700;
    font-size: 46px;
    line-height: 60px;
    margin-top: 8px;
    margin-bottom: 16px;
    @media (min-width: 600px) and (max-width: 839px) {
        font-size: 40px;
    }
    @media (min-width: 320px) and (max-width: 599px) {
        font-size: 26px;
        line-height: 40px;
    }
`;

export const HomeButton = styled.div`
    /* display: flex; */
    flex-direction: column;
    width: 100%;
    padding: 35px;
    display: grid;
    grid-template-columns: 1fr 1fr;

    @media (min-width: 840px) and (max-width: 1099px) {
        grid-template-columns: auto;
    }

    @media (min-width: 600px) and (max-width: 839px) {
        grid-template-columns: auto;
    }

    @media (min-width: 320px) and (max-width: 599px) {
        grid-template-columns: auto;
        padding: 10px 35px;
    }
`;

export const HomeButtonList = styled.div`
    flex-direction: row;
    width: 100%;
    padding: 35px;
    display: flex;

    @media (min-width: 840px) and (max-width: 1099px) {
        grid-template-columns: auto;
        flex-direction: column;
    }

    @media (min-width: 600px) and (max-width: 839px) {
        grid-template-columns: auto;
        flex-direction: column;
    }

    @media (min-width: 320px) and (max-width: 599px) {
        grid-template-columns: auto;
        padding: 10px 35px;
        flex-direction: column;
    }
`;

export const LogoImg = styled.img`
    height: 35px;
    transition: 0.1s all ease;
    cursor: pointer;
    opacity: 0.5;
    filter: grayscale(100%);
    &:hover {
        opacity: 1;
        filter: grayscale(0%);
        transform: scale(1.3);
    }
`;

export const Profile = styled.div`
    display: flex;
    flex-direction: column;
`;

export const JudulName = styled.p`
    font-size: 12px;
    color: rgba(255, 255, 255, 0.64);
`;

export const JudulDescription = styled.p`
    font-size: 18px;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.64);
`;

export const JudulButton = styled.a`
    font-size: 14px;
    display: inline-block;
    padding: 16px 48px;
    border-radius: 20px;
    color: #ffffff;
    background-color: transparent;
    cursor: pointer;
    font-weight: 600;
    border: 2px solid #5547ff;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    max-width: 200px;
    text-align: center;
    &:hover {
        transform: scale(1.02);
    }
    @media (min-width: 320px) and (max-width: 599px) {
        padding: 16px 48px;
        font-size: 12px;
    }
`;

export const JudulButtonRemove = styled.div`
    font-size: 14px;
    display: inline-block;
    padding: 16px 48px;
    border-radius: 20px;
    color: #ffffff;
    background-color: red;
    cursor: pointer;
    font-weight: 600;
    border: 1px solid #fff;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    max-width: 100%;
    text-align: center;
    &:hover {
        transform: scale(1.02);
    }
    .button_remove {
        cursor: pointer;
        color: rgb(255, 255, 255);
        font-weight: 600;
        background: transparent;
    }

    @media (min-width: 320px) and (max-width: 599px) {
        padding: 16px 48px;
        font-size: 12px;
    }
`;

export const ContentButton = styled.div`
    display: flex;
    flex-direction: row;
    gap: 80px;

    @media (min-width: 320px) and (max-width: 599px) {
        gap: 30px;
        flex-direction: column;
    }
`;

export const DescriptionButton = styled.div`
    display: flex;
    gap: 12px;
    align-items: center;
`;
