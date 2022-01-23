import styled from "styled-components";

export const MainSnackbar = styled.div`
    .snackbar {
        position: absolute;
        left: 50%;
        top: 5%;
        transform: translate(-50%, -50%);
        width: 400px;
        height: 45px;
        border-radius: 8px;
        display: flex;
        align-items: center;
        text-align: center;
        color: #fff;

        @media (min-width: 320px) and (max-width: 599px) {
            top: 15%;
            width: 360px;
            position: fixed;
        }

        .icon {
            flex: 15%;
            display: flex;
            align-items: center;
            width: 100%;
            justify-content: center;

            svg {
                font-size: 20px;
            }
        }

        .message {
            flex: 85%;
            text-align: start;
            font-weight: 500;
        }
    }

    #show {
        visibility: visible;
        animation: fadeIn 0.5s, fadeOut 0.5s 2.5s;
    }

    #hide {
        visibility: hidden;
    }

    @keyframes fadeIn {
        from {
            bottom: 0;
            opacity: 0;
        }
        to {
            bottom: 30px;
            opacity: 1;
        }
    }

    @keyframes fadeOut {
        from {
            bottom: 30px;
            opacity: 1;
        }
        to {
            bottom: 0;
            opacity: 0;
        }
    }
`;
