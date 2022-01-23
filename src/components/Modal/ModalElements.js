import styled from "styled-components";
import { BiX } from "react-icons/bi";

export const Background = styled.div`
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 2;
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
`;

export const ModalWrapper = styled.div`
    width: 350px;
    height: 500px;
    box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
    background: #222;
    color: #000;
    /* display: flex; */
    position: relative;
    z-index: 10;
    border-radius: 24px;
    padding: 40px;
    overflow: hidden;

    &::after {
        content: "${(props) => props.Namanya}";
        position: absolute;
        text-transform: capitalize;
        top: 50%;
        font-size: 7em;
        font-weight: 800;
        font-style: italic;
        color: rgba(255, 255, 25, 0.03);
        left: -10%;
        right: -10%;
    }
`;

export const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    color: #141414;
    height: 100%;
    width: 100%;

    .pembungkus {
        display: flex;
        flex-direction: column;
        height: 100%;
        gap: 20px;

        .content__modal {
            display: grid;
            grid-template-columns: auto;
            grid-template-rows: auto;
            row-gap: 20px;
            grid-template-areas:
                "header"
                "utama"
                "footer";
            padding: 20px;
            width: 100%;
            color: #fff;

            .header_modal {
                grid-area: header;
                gap: 20px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                position: relative;

                .number {
                    font-size: 16px;
                    font-weight: 600;
                }

                .types {
                    display: flex;
                    flex-direction: row;
                    gap: 4px;

                    .typenya {
                        --size: 40px;
                        display: flex;
                        padding: 10px;
                        width: var(--size);
                        height: var(--size);
                        border-radius: 8px;
                        text-align: center;
                        align-items: center;
                        justify-content: center;
                        gap: 5px;
                        background-color: red;
                        color: #fff;
                    }
                }
            }

            .body_modal {
                grid-area: utama;
                gap: 20px;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                align-items: center;
                position: relative;

                .text {
                    font-size: 16px;
                    font-weight: 600;
                }

                .gambar_pokemon {
                    height: 150px;
                    transition: 0.1s all ease;
                    /* cursor: pointer; */
                    opacity: 1;
                    max-width: 100%;
                    /* filter: grayscale(100%); */
                }
            }

            .footer_modal {
                grid-area: footer;
                margin-top: 10px;

                .atas {
                    display: grid;
                    background-color: #5fbd58;
                    height: 30px;
                    max-width: 70%;
                    margin-bottom: -10px;
                    border-radius: 8px;
                    text-align: center;
                    margin-left: auto;
                    margin-right: auto;
                    position: relative;
                    z-index: 2;
                    font-size: 14px;
                    color: #fff;
                    align-items: center;
                }

                .bawah {
                    display: flex;
                    background-color: #fff;
                    height: 50px;
                    max-width: 100%;
                    border-radius: 8px;
                    text-align: center;
                    gap: 5px;
                    padding: 6px 6px;
                    position: relative;
                    z-index: 1;
                }
            }
        }
    }

    .heading {
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        .judul {
            font-size: 16px;
            font-weight: 500;
        }

        p {
            font-size: 12px;
            font-weight: 400;
            color: #000;
        }
    }

    .content_form {
        display: flex;
        gap: 20px;
        flex-direction: column;
        width: 100%;

        .form {
            display: flex;
            flex-direction: column;
            gap: 10px;

            .text_form {
                font-size: 14px;
                font-weight: 500;
            }
        }

        .input_form {
            border: 1px solid #fff;
            border-radius: 4px;
            padding: 10px;
            height: 40px;
            font-size: 14px;

            &:focus {
                outline: none;
                border: 1px solid #0f8af9;
            }
        }
    }
`;

export const CloseModalButton = styled(BiX)`
    cursor: pointer;
    position: absolute;
    top: 20px;
    right: 20px;
    width: 24px;
    height: 24px;
    padding: 0;
    z-index: 10;
    color: rgb(255, 255, 255);
    background: red;
    border-radius: 8px;
    padding: 3px;
`;

export const Button = styled.button`
    min-width: 60px;
    padding: 12px 20px;
    border-radius: 4px;
    border: none;
    background: #0f8af9;
    color: #fff;
    font-size: 14px;
    cursor: pointer;
    width: 100%;
    box-shadow: rgb(2 12 27 / 70%) 0px 10px 30px -15px;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;

    &:hover {
        background: #2276c2;
    }
`;
