import styled from "styled-components";
import { devices } from "../../services/media";

export const CategoryContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-right: auto;
    margin-left: auto;

    @media (min-width: 1281px) {
        max-width: 1300px;
    }

    ${devices.laptop} {
        max-width: 1100px;
    }

    ${devices.tablet} {
        max-width: 950px;
    }

    ${devices.ipads} {
        max-width: 830px;
    }
`;

export const CategoryContent = styled.div`
    display: grid;
    grid-template-rows: 150px auto;
    padding: 35px;
    width: 100%;

    ${devices.laptop} {
        grid-template-columns: auto;
        justify-content: center;
    }

    ${devices.tablet} {
        grid-template-columns: auto;
        justify-content: center;
    }

    ${devices.ipads} {
        grid-template-columns: auto;
        gap: 30px;
    }

    ${devices.smartphone} {
        grid-template-columns: auto;
    }
`;

export const IconCategory = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: row;
    gap: 20px;

    ${devices.ipads} {
        justify-content: center;
        flex-direction: row;
        gap: 20px;
    }

    ${devices.smartphone} {
        justify-content: center;
        flex-direction: row;
        gap: 20px;
    }
`;

export const Icon = styled.img`
    --size: 30px;
    transition: 0.1s all ease;
    height: var(--size);
    width: var(--size);
    opacity: 0.5;
    filter: grayscale(100%);
    cursor: pointer;

    &:hover {
        opacity: 1;
        filter: grayscale(0%);
        transform: scale(1.3);
    }
`;

export const Description = styled.p`
    color: rgba(255, 255, 255, 0.64);
    line-height: 60px;
    font-weight: 500;
    font-size: 40px;

    ${devices.ipads} {
        line-height: 45px;
        font-size: 35px;
        margin-top: 0;
    }

    ${devices.smartphone} {
        margin-bottom: 20px;
        line-height: 45px;
        font-size: 35px;
    }
`;

export const BungkusIcon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #5547ff;
    border-radius: 16px;
    height: 60px;
    width: 60px;
`;

export const Text = styled.p`
    display: inline-block;
    color: rgba(255, 255, 255, 0.64);
    font-weight: 600;
    font-size: 12px;
`;

export const ImgBox = styled.div`
    position: absolute;
    transform: translateY(-50%);
    transition: 0.5s;
    height: 220px;
    z-index: 100;
    width: 100%;
    top: 50%;
`;

export const CardContent = styled.div`
    display: grid;
    gap: 30px;

    .card__content_home {
        display: grid;
        grid-template-columns: repeat(5, auto);
        justify-content: center;
        align-items: center;
        gap: 30px;

        ${devices.laptop} {
            grid-template-columns: repeat(4, auto);
        }

        ${devices.tablet} {
            grid-template-columns: repeat(3, auto);
        }

        ${devices.ipads} {
            grid-template-columns: repeat(2, auto);
        }

        ${devices.smartphone} {
            grid-template-columns: repeat(1, auto);
        }
    }
`;

export const CardContainerTambah = styled.div`
    flex-wrap: wrap;
`;

export const BungkusanIconnya = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;

    ${devices.smartphone} {
        display: none;
    }
`;
