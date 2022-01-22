import { BrowserRouter, Routes, Route } from "react-router-dom";
import PokemonDetails from "../pages/PokemonDetails";
import { PokemonHome } from "../pages/PokemonHome";
import React from "react";
import PokemonList from "../pages/PokemonList";
import "./app.css";
import { GlobalProvider } from "../context/GlobalState";

class App extends React.Component {
    render() {
        return (
            <GlobalProvider>
                <BrowserRouter basename="/pokedex-id">
                    <Routes>
                        <Route exact path="/" element={<PokemonHome />} />
                        <Route
                            path="/pokemon/:name"
                            element={<PokemonDetails />}
                        />
                        <Route path="/mypokemon" element={<PokemonList />} />
                    </Routes>
                </BrowserRouter>
            </GlobalProvider>
        );
    }
}

export default App;
