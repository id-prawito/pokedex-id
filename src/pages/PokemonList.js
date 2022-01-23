import React, { useContext } from "react";
import { ListContainer } from "../components/Elements/Elements";
import { HomeSectionList } from "../components/HomeSection";
import Navbar from "../components/Navbar";
import Scroll from "../components/Navbar/Scroll";
import { GlobalContext } from "../context/GlobalState";
import { PokemonCardList } from "../components/Pokemon/index.js";

const PokemonList = () => {
    const { listPokemon } = useContext(GlobalContext);

    return (
        <>
            <Scroll />
            <Navbar />
            <HomeSectionList description="This page is My Pokemon List." />
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
                    ))}
                </div>
            </ListContainer>
        </>
    );
};

export default PokemonList;
