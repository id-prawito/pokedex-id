import styled from "styled-components";

export const MainButton = styled.div`
    .icon_bungkus {
        display: flex;
        border-radius: 16px;
        justify-content: center;
        align-items: center;
        height: 60px;
        width: 60px;
        border-radius: 16px;
        box-shadow: 2px 1px 10px #000067;
        background-color: #fff;

        button {
            border: none;
        }
    }

    .text_tooltip {
        font-size: 12px;
        font-weight: 600;
    }

    .icon_main {
        transition: 0.1s all ease;
        height: 38px;
        width: 38px;
        cursor: pointer;
        opacity: 1;

        &:hover {
            opacity: 1;
            filter: grayscale(0%);
            transform: scale(1.2);
        }
    }
`;
