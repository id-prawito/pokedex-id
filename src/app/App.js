import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages";
import PokemonDetails from "../components/PokemonDetail";

class App extends React.Component {
    render() {
        return (
            <BrowserRouter basename={window.location.pathname || ""}>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route
                        exact
                        path="/pokemon/:name"
                        element={<PokemonDetails />}
                    />
                </Routes>
            </BrowserRouter>
        );
    }
}

export default App;
