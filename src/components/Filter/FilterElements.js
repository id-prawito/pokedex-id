import styled from "styled-components";

export const SelectContainer = styled.div`
    width: 100%;
    /* height: 20vh; */
    justify-content: center;
    margin-right: auto;
    margin-left: auto;

    @media (min-width: 1280px) {
        max-width: 1300px;
    }

    @media (min-width: 1100px) and (max-width: 1280px) {
        max-width: 1100px;
        height: 100%;
    }

    @media (min-width: 840px) and (max-width: 1099px) {
        height: 100%;
        max-width: 950px;
    }

    @media (min-width: 320px) and (max-width: 599px) {
        height: 40vh;
    }
`;

export const SelectContent = styled.div`
    width: 100%;
    padding: 35px;
    display: grid;
    gap: 10px;
    justify-items: center;
    grid-template-columns: 1fr 1fr 1fr 1fr;

    @media (min-width: 840px) and (max-width: 1099px) {
        grid-template-columns: 1fr 1fr;
    }

    @media (min-width: 425px) and (max-width: 839px) {
        grid-template-columns: 1fr 1fr;
    }

    @media (min-width: 320px) and (max-width: 599px) {
        grid-template-columns: auto;
        gap: 20px;
    }
`;

export const SelectInput = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    max-width: 280px;
    width: 100%;
    align-items: center;
    border-radius: 4px;
    background-color: #fff;
    padding: 4px;
    box-shadow: rgba(240, 240, 240, 0.5) 0px 2px 6px;

    @media (min-width: 840px) and (max-width: 1099px) {
        max-width: 380px;
    }

    @media (min-width: 600px) and (max-width: 839px) {
        max-width: 380px;
        width: 260px;
    }
`;

export const LogoInput = styled.img`
    height: 30px;
    -webkit-transition: 0.1s all ease;
    transition: 0.1s all ease;
    cursor: pointer;
    position: relative;
    z-index: 2;

    @media (min-width: 600px) and (max-width: 839px) {
        height: 30px;
    }
`;

export const Input = styled.input.attrs((props) => ({
    type: "text",
}))`
    color: #222;
    font-size: 1em;
    border: none;
    width: 230px;
    border-radius: 3px;
    padding: 2px 8px;
    &:focus {
        outline: none;
    }

    @media (min-width: 840px) and (max-width: 1099px) {
        width: 100%;
        margin-left: 6px;
    }
    @media (min-width: 600px) and (max-width: 839px) {
        width: 100%;
        margin-left: 6px;
    }

    @media (min-width: 320px) and (max-width: 599px) {
        height: 40px;
    }

    /* here we use the dynamically computed prop */
    margin: ${(props) => props.size};
    padding: ${(props) => props.size};
`;
