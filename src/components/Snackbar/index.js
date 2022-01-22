import React, { useState, forwardRef, useImperativeHandle } from "react";
import { MainSnackbar } from "./SnackbarElements";
import { FaInfoCircle } from "react-icons/fa";
import { BsFillPatchCheckFill } from "react-icons/bs";

const Snackbar = forwardRef((props, ref) => {
    const [showSnackbar, setShowSnackbar] = useState(false);

    useImperativeHandle(ref, () => ({
        show() {
            setShowSnackbar(true);
            setTimeout(() => {
                setShowSnackbar(false);
            }, 3000);
        },
    }));

    return (
        <MainSnackbar>
            <div
                className="snackbar"
                id={showSnackbar ? "show" : "hide"}
                style={{
                    backgroundColor:
                        props.type === "success" ? "#0caecc" : "#FF0033",
                }}
            >
                <div className="icon">
                    {props.type === "success" ? (
                        <BsFillPatchCheckFill />
                    ) : (
                        <FaInfoCircle />
                    )}
                </div>
                <div className="message">{props.message}</div>
            </div>
        </MainSnackbar>
    );
});

export default Snackbar;
