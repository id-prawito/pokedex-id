const variable = (state, action) => {
    switch (action.type) {
        case "ADD_POKEMON_TO_LIST":
            return {
                ...state,
                listPokemon: [action.payload, ...state.listPokemon],
            };
        case "REMOVE_POKEMON_FROM_LIST":
            return {
                ...state,
                listPokemon: state.listPokemon.filter(
                    (movie) => movie.title !== action.payload
                ),
            };

        case "REMOVE_ALL_POKEMON_FROM_LIST":
            return {
                ...state,
                listPokemon: [],
            };

        default:
            return state;
    }
};

export default variable;
