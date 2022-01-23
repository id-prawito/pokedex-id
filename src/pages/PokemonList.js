import React, { useContext } from "react";
import { ListContainer } from "../components/Elements/Elements";
import { HomeSectionList } from "../components/HomeSection";
import Navbar from "../components/Navbar";
import Scroll from "../components/Navbar/Scroll";
import { GlobalContext } from "../context/GlobalState";
import { PokemonCardList } from "../components/Pokemon/index.js";
import { motion } from "framer-motion";

const PokemonList = () => {
    const { listPokemon } = useContext(GlobalContext);

    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: 0.8,
                staggerChildren: 0.4,
            },
        },
    };

    const item_nya = {
        hidden: { x: -120, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
        },
    };

    return (
        <>
            <Navbar />
            <HomeSectionList description="This page is My Pokemon List." />
            <ListContainer>
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="visible"
                    className="grid_content"
                >
                    {listPokemon.map((item, i) => (
                        <motion.li
                            variants={item_nya}
                            key={i}
                            className="card__li"
                        >
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
                        </motion.li>
                    ))}
                </motion.div>
            </ListContainer>
            <Scroll />
        </>
    );
};

export default PokemonList;
