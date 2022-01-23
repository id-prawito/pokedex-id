import styled from "styled-components";

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
    z-index: 1;
    transition: 0.8s all ease;

    @media (min-width: 320px) and (max-width: 599px) {
        height: 80px;
    }
`;

export const NavbarContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    height: 80px;
    padding-right: 35px;
    padding-left: 35px;
    margin-right: auto;
    margin-left: auto;
    z-index: 1;

    @media (min-width: 1281px) {
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
    }

    @media (min-width: 320px) and (max-width: 599px) {
        max-width: 550px;
    }

    .nav_logo {
        color: #ffffff;
        justify-self: flex-start;
        cursor: pointer;
        font-size: 1.5rem;
        display: flex;
        align-items: center;
        font-weight: bold;
        text-decoration: none;

        img {
            height: 35px;
            transition: 0.3s all ease;

            &:hover {
                transform: scale(1.1);
            }
        }
    }
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;

    li {
        height: 80px;
        display: flex;
        gap: 20px;

        .navlinks {
            color: #ffffff;
            display: flex;
            align-items: center;
            text-decoration: none;
            font-weight: 600;
            height: 100%;
            cursor: pointer;
            transition: all 0.4s ease-in-out;

            &.active {
                background-color: #9e45c5;
                color: #fff;
                &:hover {
                    color: #fff;
                }
            }

            &:hover {
                color: #9e45c5;
            }

            img {
                height: 35px;
                transition: 0.3s all ease;

                &:hover {
                    transform: scale(1.1);
                }
            }
        }

        .navlinks_link {
            color: #ffffff;
            display: flex;
            align-items: center;
            text-decoration: none;
            font-weight: 600;
            height: 100%;
            cursor: pointer;
            transition: all 0.4s ease-in-out;

            &.active {
                background-color: #9e45c5;
                color: #fff;
                &:hover {
                    color: #fff;
                }
            }

            &:hover {
                color: #9e45c5;
            }

            .text_jumlah {
                background-color: #ef144a;
                border-radius: 5px;
                color: #fff;
                font-size: 10px;
                font-weight: 500;
                min-height: 20px;
                min-width: 20px;
                padding: 4px;
                text-align: center;
                -webkit-transform: translate(30%, -40%);
                transform: translate(30%, -40%);
            }

            .laptop {
                display: initial;

                @media (min-width: 320px) and (max-width: 599px) {
                    display: none;
                }
            }

            .mobile {
                display: none;

                @media (min-width: 320px) and (max-width: 599px) {
                    display: initial;
                }
            }
        }
    }
`;

export const IconButtonnya = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff;
    border-radius: 10px;
    width: 40px;
    height: 40px;
    position: fixed;
    z-index: 2;
    bottom: 2vh;
    right: 2.5%;
    cursor: pointer;
    transition: 1s all ease-out;
    opacity: ${({ scrollIcon }) => (scrollIcon ? "0" : "1")};
`;
