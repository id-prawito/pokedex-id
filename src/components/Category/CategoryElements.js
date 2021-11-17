import styled from "styled-components";

export const CategoryContainer = styled.div`
    width: 100%;
    /* height: 80vh; */
    justify-content: center;
    margin-right: auto;
    margin-left: auto;
    align-items: center;
    display: flex;

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
`;

export const CategoryContent = styled.div`
    display: grid;
    width: 100%;
    padding: 35px;
    grid-template-columns: 400px auto;

    @media (min-width: 1100px) and (max-width: 1280px) {
        grid-template-columns: 300px auto;
    }

    @media (min-width: 840px) and (max-width: 1099px) {
        grid-template-columns: 280px auto;
    }

    @media (min-width: 600px) and (max-width: 839px) {
        grid-template-columns: auto;
        gap: 30px;
    }

    @media (min-width: 320px) and (max-width: 599px) {
        grid-template-columns: auto;
    }
`;

export const IconCategory = styled.div`
    display: flex;
    flex-direction: column;

    @media (min-width: 600px) and (max-width: 839px) {
        flex-direction: row;
        justify-content: center;
        gap: 20px;
    }

    @media (min-width: 320px) and (max-width: 599px) {
        flex-direction: row;
        justify-content: center;
        gap: 20px;
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

export const Description = styled.p`
    font-size: 40px;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.64);
    margin-top: 10px;
    line-height: 60px;

    @media (min-width: 600px) and (max-width: 839px) {
        margin-top: 0;
        line-height: 45px;
        font-size: 35px;
    }
    @media (min-width: 320px) and (max-width: 599px) {
        margin-bottom: 20px;
        line-height: 45px;
        font-size: 35px;
    }
`;

export const BungkusIcon = styled.div`
    display: flex;
    background-color: #5547ff;
    border-radius: 16px;
    justify-content: center;
    align-items: center;
    height: 60px;
    width: 60px;
    border-radius: 16px;
`;

export const Text = styled.p`
    display: inline-block;
    font-size: 12px;
    color: rgba(255, 255, 255, 0.64);
    font-weight: 600;
`;

export const ImgBox = styled.div`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 10000;
    width: 100%;
    height: 220px;
    transition: 0.5s;
`;

export const CardContent = styled.div`
    display: grid;
    /* grid-template-columns: 1fr 1fr 1fr; */
    gap: 30px;
`;

export const CardContainerTambah = styled.div`
    flex-wrap: wrap;
`;

export const BungkusanIconnya = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;

    @media (min-width: 320px) and (max-width: 599px) {
        display: none;
    }
`;
