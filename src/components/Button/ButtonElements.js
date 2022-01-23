import styled from "styled-components";

export const MainButton = styled.div`
    .icon_bungkus {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #fff;
        border-radius: 16px;
        height: 60px;
        width: 60px;
        box-shadow: 2px 1px 10px #000067;

        .button__item {
            border: none;
            background: transparent;
        }
    }

    .text_tooltip {
        font-weight: 600;
        font-size: 12px;
    }

    .icon_main {
        --size: 38px;
        transition: 0.1s all ease;
        cursor: pointer;
        height: var(--size);
        width: var(--size);
        opacity: 1;

        &:hover {
            filter: grayscale(0%);
            transform: scale(1.2);
            opacity: 1;
        }
    }
`;
