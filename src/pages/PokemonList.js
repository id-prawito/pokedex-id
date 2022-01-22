import React, { useContext } from "react";
import { useRef } from "react";
import { ListContainer } from "../components/Elements/Elements";
import HomeSection from "../components/HomeSection";
import Navbar from "../components/Navbar";
import Scroll from "../components/Navbar/Scroll";
import Snackbar from "../components/Snackbar";
import { GlobalContext } from "../context/GlobalState";
import { PokemonCardList } from "../components/Pokemon/index.js";

const PokemonList = () => {
    const { listPokemon, removePokemonFromList } = useContext(GlobalContext);

    const handleClickRemove = (value) => () => {
        removePokemonFromList(value);
        snackbarRef.current.show();
    };

    const snackbarRef = useRef(null);

    const SnackbarType = {
        success: "success",
        fail: "fail",
    };

    // console.log(listPokemon);
    return (
        <>
            <Scroll />
            <Navbar />
            <HomeSection description="This page is My Pokemon List." />
            <Snackbar
                ref={snackbarRef}
                message="Succes to remove your Pokemon!"
                type={SnackbarType.fail}
            />
            <ListContainer>
                <div className="grid_content">
                    {listPokemon.map((item, i) => (
                        <li key={i} className="card__li">
                            <PokemonCardList
                                id={item.id}
                                name={item.name}
                                type={item.types}
                                weight={item.weight}
                                height={item.height}
                                image={
                                    item.sprites.other.dream_world.front_default
                                        ? item.sprites.other.dream_world
                                              .front_default
                                        : item.sprites.other["official-artwork"]
                                              .front_default
                                }
                                titleNew={item.title}
                            />
                        </li>

                        // <div key={i} className="card">
                        //     {item.name} {item.title}
                        //     <div
                        //         style={{
                        //             backgroundColor: "red",
                        //             color: "#fff",
                        //             borderRadius: 8,
                        //             padding: "10px",
                        //             marginLeft: 10,
                        //         }}
                        //         className="class_button"
                        //     >
                        //         <button
                        //             style={{
                        //                 cursor: "pointer",
                        //                 color: "#fff",
                        //                 background: "transparent",
                        //             }}
                        //             onClick={handleClickRemove(item.title)}
                        //         >
                        //             Remove
                        //         </button>
                        //     </div>
                        // </div>
                    ))}
                </div>
            </ListContainer>
        </>
    );
};

export default PokemonList;
