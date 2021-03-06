import React, { useRef, useState, useContext } from "react";
import {
    Background,
    Button,
    CloseModalButton,
    ModalContent,
    ModalWrapper,
} from "./ModalElements";
import { FaAngleRight } from "react-icons/fa";
import { GlobalContext } from "../../context/GlobalState";
import Snackbar from "../Snackbar";
import { IconTypes, Types } from "../Pokemon/Pokemon";

const Modal = ({
    showModal,
    setShowModal,
    data,
    image,
    tipe,
    nama,
    number,
}) => {
    const modalRef = useRef();
    const snackbarRef12 = useRef(null);
    const { addPokemonToList } = useContext(GlobalContext);
    const [state, setState] = useState({});
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setState((old) => ({ ...old, [name]: value }));
    };
    const SnackbarType = {
        success: "success",
        fail: "fail",
    };
    const handleInput = () => {
        addPokemonToList(Object.assign(data, state));
        setShowModal((prev) => !prev);
        setState("");
        window.location.reload();
        snackbarRef12.current.show();
    };
    const closeModal = () => {
        setShowModal((prev) => !prev);
        setState("");
    };

    return (
        <>
            <Snackbar
                ref={snackbarRef12}
                message="Success add Pokemon to list!"
                type={SnackbarType.success}
            />
            {showModal ? (
                <Background ref={modalRef}>
                    <ModalWrapper Namanya={nama} showModal={showModal}>
                        <ModalContent>
                            <div
                                className="pembungkus"
                                style={{ width: "100%" }}
                            >
                                <div className="content__modal">
                                    <div className="header_modal">
                                        <div className="number">
                                            #{String(number).padStart(3, "0")}
                                        </div>
                                        <div className="types">
                                            {tipe.map((type, key) => (
                                                <Types
                                                    key={type}
                                                    title={type}
                                                    className={`poke__type__bg ${type}`}
                                                >
                                                    <IconTypes
                                                        src={`../${type}.png`}
                                                    ></IconTypes>
                                                </Types>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="body_modal">
                                        <img
                                            src={image}
                                            alt="gambar_pokemon"
                                            className="gambar_pokemon"
                                        />
                                        <div className="text">Bulbasur</div>
                                    </div>
                                    <div className="footer_modal">
                                        <div className="atas">Input</div>
                                        <div className="bawah">
                                            <form onSubmit={handleInput}>
                                                <div className="content_form">
                                                    <div className="class_form">
                                                        <input
                                                            placeholder="input your pokemon name !"
                                                            name="title"
                                                            value={
                                                                state.title ||
                                                                ""
                                                            }
                                                            onChange={
                                                                handleChange
                                                            }
                                                            type="text"
                                                            className="input_form"
                                                        />
                                                    </div>
                                                    <Button>
                                                        Process To Next Step
                                                        <FaAngleRight />
                                                    </Button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ModalContent>
                        <CloseModalButton
                            className="button_close"
                            aria-label="Close modal"
                            onClick={closeModal}
                        />
                    </ModalWrapper>
                </Background>
            ) : null}
        </>
    );
};

export default Modal;
