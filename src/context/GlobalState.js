import React, { useReducer, createContext, useEffect } from "react";

import AppReducer from "./AppReducer";

const initialState = {
    listPokemon: localStorage.getItem("listPokemon")
        ? JSON.parse(localStorage.getItem("listPokemon"))
        : [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    useEffect(() => {
        localStorage.setItem("listPokemon", JSON.stringify(state.listPokemon));
    }, [state]);

    const addPokemonToList = (movie) => {
        dispatch({ type: "ADD_POKEMON_TO_LIST", payload: movie });
    };

    const removePokemonFromList = (title) => {
        dispatch({ type: "REMOVE_POKEMON_FROM_LIST", payload: title });
    };

    const removeAllPokemonFromList = () => {
        dispatch({ type: "REMOVE_ALL_POKEMON_FROM_LIST", payload: {} });
    };

    return (
        <GlobalContext.Provider
            value={{
                listPokemon: state.listPokemon,
                addPokemonToList,
                removePokemonFromList,
                removeAllPokemonFromList,
            }}
        >
            {props.children}
        </GlobalContext.Provider>
    );
};
