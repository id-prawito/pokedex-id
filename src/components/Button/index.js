import React, { useState, useRef } from "react";
// import ReactTooltip from "react-tooltip";
import pokeball from "../../assets/images/logo.png";
import Modal from "../Modal";
import Snackbar from "../Snackbar";
import { MainButton } from "./ButtonElements";

const ButonCatch = ({ data, image, tipe, nama, number }) => {
    const [random, setRandom] = useState(0);
    const [showModal, setShowModal] = useState(false);

    const snackbarRef11 = useRef(null);

    const SnackbarType = {
        success: "success",
        fail: "fail",
    };

    const clickHandle = () => {
        const num = Math.floor(Math.random() * (1 + 1));
        setRandom(num);
        snackbarRef11.current.show();

        if (num === 1) {
            setShowModal((prev) => !prev);
        } else {
            console.log("Ups");
        }
    };

    return (
        <MainButton>
            <div className="icon_bungkus" data-tip data-for="catch" key="catch">
                <button
                    style={{ background: "transparent" }}
                    onClick={clickHandle}
                >
                    <img className="icon_main" src={pokeball} alt="pokeball" />
                </button>
                <Modal
                    number={number}
                    nama={nama}
                    tipe={tipe}
                    image={image}
                    data={data}
                    showModal={showModal}
                    setShowModal={setShowModal}
                />
                {/* <ReactTooltip
                    place="top"
                    type="light"
                    effect="solid"
                    id="catch"
                >
                    <p className="text_tooltip">Catch The Pokemon {random}</p>
                </ReactTooltip> */}
                {random === 1 ? (
                    <Snackbar
                        ref={snackbarRef11}
                        message="Yes, your success to gacha this Pokemon!"
                        type={SnackbarType.success}
                    />
                ) : (
                    <Snackbar
                        ref={snackbarRef11}
                        message="Upss, your gacha is failed, try again!"
                        type={SnackbarType.fail}
                    />
                )}
            </div>
        </MainButton>
    );
};

export default ButonCatch;
