import React from "react";
import axios from "axios";
import Filters from "../components/Filter";
import HomeSection from "../components/HomeSection";
import Navbar from "../components/Navbar";
import Pokemon from "../components/Pokemon/index.js";
import logoTypes from "../assets/images/pikachu.png";
import Loading from "../components/Loading";
import { motion } from "framer-motion";
import {
    CategoryContainer,
    BungkusIcon,
    CategoryContent,
    Description,
    Icon,
    IconCategory,
    CardContent,
    BungkusanIconnya,
} from "../components/Category/CategoryElements";
import Scroll from "../components/Navbar/Scroll";
import "../app/App.css";

export class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allPokemons: [],
            searchPokemons: [],
            filterPokemons: [],
            evoChain: [],
            abilities: "",
            height: "",
            weight: "",
            catergory: "",
            stats: [],
            imageURL: "",
            pokeName: "",
            pokeNumber: "",
            genderRate: "",
            genera: "",
            isTypeSelected: false,
            selectedType: "",
            showInfo: false,
            isSearch: false,
            searchString: "",
            description: "",
            showLoading: true,
            isFilter: false,
            noDataFound: false,
            limit: 151,
            offset: 0,
            isChecked: false,
            evolID: "",
            evolName: "",
            evolTypes: [],
            evolImgURL: "",
            regions: [
                {
                    name: "Kanto",
                    limit: 151,
                    offset: 0,
                },
                {
                    name: "Johto",
                    limit: 100,
                    offset: 151,
                },
                {
                    name: "Hoenn",
                    limit: 135,
                    offset: 251,
                },
                {
                    name: "Sinnoh",
                    limit: 108,
                    offset: 386,
                },
                {
                    name: "Unova",
                    limit: 155,
                    offset: 494,
                },
                {
                    name: "Kalos",
                    limit: 72,
                    offset: 649,
                },
                {
                    name: "Alola",
                    limit: 88,
                    offset: 721,
                },
                {
                    name: "Galar",
                    limit: 89,
                    offset: 809,
                },
            ],
            types: [
                "all types",
                "grass",
                "bug",
                "dark",
                "dragon",
                "electric",
                "fairy",
                "fighting",
                "fire",
                "flying",
                "ghost",
                "ground",
                "ice",
                "normal",
                "poison",
                "psychic",
                "rock",
                "steel",
                "water",
            ],
            sortby: ["ID", "Name"],
        };
    }

    componentDidMount() {
        this.getAllPokemons(this.state.offset, this.state.limit);
    }

    componentDidUpdate() {
        // console.log("updatedd");
    }

    getAllPokemons = async (offset, limit) => {
        const response = await axios
            .get(
                `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
            )
            .catch((err) => console.log("Error:", err));
        this.getPokemonData(response.data.results);
    };

    getPokemonData = async (result) => {
        // debugger;
        const pokemonArr = [],
            filterArr = [];
        await Promise.all(
            result.map((pokemonItem) => {
                return axios
                    .get(
                        `https://pokeapi.co/api/v2/pokemon/${pokemonItem.name}`
                    )
                    .then((result) => {
                        pokemonArr.push(result.data);
                    });
            })
        );
        pokemonArr.sort((a, b) => (a.id > b.id ? 1 : b.id > a.id ? -1 : 0));
        if (this.state.isTypeSelected) {
            for (let i = 0; i < pokemonArr.length; i++) {
                for (let j = 0; j < pokemonArr[i].types.length; j++) {
                    if (
                        this.state.selectedType ===
                        pokemonArr[i].types[j].type.name
                    ) {
                        filterArr.push(pokemonArr[i]);
                    }
                }
            }
            this.setState({
                isFilter: true,
                filterPokemons: filterArr,
                allPokemons: pokemonArr,
                showLoading: false,
            });
        } else {
            this.setState({
                isFilter: false,
                allPokemons: pokemonArr,
                showLoading: false,
            });
        }
        // console.log("allPokes");
        // console.log(this.state.allPokemons);
    };

    fetchEvoDetails = async (url) => {
        // debugger
        const response = await axios
            .get(url)
            .catch((err) => console.log("Error:", err));
        // console.log(response);
        const evoChain = [];
        let evoData = response.data.chain;
        do {
            const evoDetails = evoData["evolution_details"][0];
            evoChain.push({
                species_name: evoData.species.name,
                min_level: !evoDetails ? 1 : evoDetails.min_level,
                trigger_name: !evoDetails ? null : evoDetails.trigger.name,
                item: !evoDetails ? null : evoDetails.item,
            });
            evoData = evoData["evolves_to"][0];
        } while (!!evoData && evoData.hasOwnProperty("evolves_to"));
        // console.log("evochain");
        // console.log(evoChain);
        this.fetchEvoImages(evoChain);
    };

    fetchEvoImages = async (evoChainArr) => {
        // debugger
        for (let i = 0; i < evoChainArr.length; i++) {
            const response = await axios
                .get(
                    `https://pokeapi.co/api/v2/pokemon/${evoChainArr[i].species_name}`
                )
                .catch((err) => console.log("Error:", err));
            response.data.sprites.other.dream_world.front_default
                ? (evoChainArr[i]["image_url"] =
                      response.data.sprites.other.dream_world.front_default)
                : (evoChainArr[i]["image_url"] =
                      response.data.sprites.other[
                          "official-artwork"
                      ].front_default);
        }
        this.setState({
            evoChain: evoChainArr,
        });
    };

    fetchPokemonData = async (number, pokemon, category, imageURL) => {
        // debugger
        const response = await axios
            .get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
            .catch((err) => console.log("Error:", err));
        // console.log(response);
        const statistics = [],
            abs = [];
        const id = response.data.id;
        for (let i = 0; i < response.data.abilities.length; i++) {
            abs.push(response.data.abilities[i].ability.name);
        }
        for (let j = 0; j < response.data.stats.length; j++) {
            const Obj = {};
            Obj["stat__name"] = response.data.stats[j].stat.name;
            Obj["stat__val"] = response.data.stats[j].base_stat;
            statistics.push(Obj);
        }
        this.setState({
            weight: response.data.weight,
            height: response.data.height,
            category,
            pokeNumber: id,
            imageURL,
            pokeName: pokemon,
            showInfo: true,
            stats: statistics,
            abilities: abs,
        });
        this.setState({
            evoChain: [],
            genderRate: "",
            genera: "",
        });
        // this.fetchEvoChainURL(pokemon);
        this.fetchPokemonDescription(pokemon);
    };

    fetchPokemonDescription = async (pokemon_name) => {
        // debugger;
        let genera = "";
        const response = await axios
            .get(`https://pokeapi.co/api/v2/pokemon-species/${pokemon_name}`)
            .catch((err) => console.log("Error:", err));
        this.fetchEvoDetails(response.data.evolution_chain.url);
        try {
            // const response = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${pokemon_name}`).catch((err) => console.log("Error:", err));
            for (
                let i = 0;
                i < response.data.flavor_text_entries.length - 1;
                i++
            ) {
                if (
                    response.data.flavor_text_entries[i].language.name === "en"
                ) {
                    this.state.description =
                        response.data.flavor_text_entries[i].flavor_text;
                    break;
                }
            }
            for (let j = 0; j < response.data.genera.length; j++) {
                if (response.data.genera[j].language.name === "en") {
                    genera = response.data.genera[j].genus;
                    break;
                }
            }
            this.setState({
                description: this.state.description,
                genderRate: response.data.gender_rate,
                genera,
            });
        } catch (e) {
            this.setState({
                description: "Description not found",
            });
        }
        // console.log("description");
    };

    handleChangeRegions = (value) => {
        // debugger;
        for (let i = 0; i < this.state.regions.length; i++) {
            if (this.state.regions[i].name === value.value) {
                this.setState({
                    valueregion: value.value,
                    // valuetype: "all types",
                    sorttype: "ID",
                    isSearch: false,
                    isFilter: false,
                    showLoading: true,
                });
                this.getAllPokemons(
                    this.state.regions[i].offset,
                    this.state.regions[i].limit
                );
                break;
            }
        }
        // console.log("limit");
        console.log(value.value);
    };

    handleChangeTypes = (value) => {
        // debugger;
        if (value.value === "all types") {
            const allPoks = this.state.allPokemons;
            if (this.state.sorttype === "Name") {
                allPoks.sort((a, b) =>
                    a.name > b.name ? 1 : b.name > a.name ? -1 : 0
                );
                this.setState({
                    isFilter: false,
                    valuetype: value.value,
                    allPokemons: allPoks,
                    isTypeSelected: false,
                });
            } else {
                allPoks.sort((a, b) =>
                    a.id > b.id ? 1 : b.id > a.id ? -1 : 0
                );
                this.setState({
                    isFilter: false,
                    valuetype: value.value,
                    allPokemons: allPoks,
                    isTypeSelected: false,
                });
            }
            return;
        } else {
            this.setState({
                isTypeSelected: true,
                selectedType: value.value,
            });
        }
        let filterArr = [];
        for (let i = 0; i < this.state.allPokemons.length; i++) {
            for (let j = 0; j < this.state.allPokemons[i].types.length; j++) {
                if (
                    value.value === this.state.allPokemons[i].types[j].type.name
                ) {
                    filterArr.push(this.state.allPokemons[i]);
                }
            }
        }
        this.state.sorttype === "Name"
            ? filterArr.sort((a, b) =>
                  a.name > b.name ? 1 : b.name > a.name ? -1 : 0
              )
            : filterArr.sort((a, b) =>
                  a.id > b.id ? 1 : b.id > a.id ? -1 : 0
              );
        this.setState({
            isSearch: false,
            valuesearch: "",
            isFilter: true,
            filterPokemons: filterArr,
            valuetype: value.value,
        });
        filterArr.length === 0
            ? this.setState({ noDataFound: true })
            : this.setState({ noDataFound: false });
    };

    handleChangeSort = (value) => {
        let sortArr;
        this.state.isFilter
            ? (sortArr = this.state.filterPokemons)
            : (sortArr = this.state.allPokemons);
        if (value.value === "ID") {
            sortArr.sort((a, b) => (a.id > b.id ? 1 : b.id > a.id ? -1 : 0));
        } else {
            sortArr.sort((a, b) =>
                a.name > b.name ? 1 : b.name > a.name ? -1 : 0
            );
        }
        this.state.isFilter
            ? this.setState({
                  filterPokemons: sortArr,
                  sorttype: value.value,
              })
            : this.setState({
                  allPokemons: sortArr,
                  sorttype: value.value,
              });
        console.log(value.value);
    };

    handleChangeSearch = (event) => {
        // debugger
        event.target.value.length > 0
            ? this.setState({
                  isSearch: true,
                  valuetype: "all types",
                  valuesearch: event.target.value,
              })
            : this.setState({
                  isSearch: false,
                  isFilter: false,
                  valuesearch: event.target.value,
              });
        let searchArr = [];
        for (let i = 0; i < this.state.allPokemons.length; i++) {
            // eslint-disable-next-line eqeqeq
            if (
                this.state.allPokemons[i].name.includes(
                    event.target.value.toLowerCase()
                ) ||
                this.state.allPokemons[i].id
                    .toString()
                    .includes(event.target.value)
            ) {
                searchArr.push(this.state.allPokemons[i]);
            }
        }
        searchArr.length === 0
            ? this.setState({ noDataFound: true, searchPokemons: [] })
            : this.setState({ noDataFound: false, searchPokemons: searchArr });
        // console.log(event.target.value);
    };

    handleClick = () => {
        window[`scrollTo`]({
            top: document.body.scrollHeight,
            behavior: `smooth`,
        });
    };

    render() {
        const listnya = {
            visible: {
                opacity: 1,
                transition: {
                    when: "beforeChildren",
                    staggerChildren: 0.35,
                    delayChildren: 0.75,
                },
            },
            hidden: {
                opacity: 0,
                transition: {
                    when: "afterChildren",
                },
            },
        };

        const itemsnya = {
            visible: { opacity: 1, x: 0 },
            hidden: { opacity: 0, x: -150 },
        };

        document.title = `Pokédex-id`;
        return (
            <>
                <Scroll />
                <Navbar />
                <HomeSection />
                <Filters
                    regions={this.state.regions}
                    types={this.state.types}
                    sortby={this.state.sortby}
                    valueregion={this.state.valueregion}
                    valuetype={this.state.valuetype}
                    sorttype={this.state.sorttype}
                    valuesearch={this.state.valuesearch}
                    regionsSelect={this.handleChangeRegions}
                    typesSelect={this.handleChangeTypes}
                    sortSelect={this.handleChangeSort}
                    searchChange={this.handleChangeSearch}
                />
                <CategoryContainer>
                    <CategoryContent>
                        <IconCategory>
                            <BungkusanIconnya>
                                <BungkusIcon>
                                    <Icon src={logoTypes}></Icon>
                                </BungkusIcon>
                                <BungkusIcon>
                                    <Icon src={logoTypes}></Icon>
                                </BungkusIcon>
                            </BungkusanIconnya>
                            <Description>Design Pokédex Card</Description>
                        </IconCategory>
                        {this.state.showLoading && <Loading />}
                        {!this.state.showLoading && (
                            <CardContent>
                                {this.state.isSearch ? (
                                    <motion.ul
                                        className="card__content"
                                        initial="hidden"
                                        animate="visible"
                                        variants={listnya}
                                    >
                                        {Object.keys(
                                            this.state.searchPokemons
                                        ).map((item, key) => (
                                            <motion.li
                                                className="card__li"
                                                key={
                                                    this.state.allPokemons[item]
                                                        .id
                                                }
                                                variants={itemsnya}
                                            >
                                                <Pokemon
                                                    key={
                                                        this.state
                                                            .searchPokemons[
                                                            item
                                                        ].id
                                                    }
                                                    id={
                                                        this.state
                                                            .searchPokemons[
                                                            item
                                                        ].id
                                                    }
                                                    image={
                                                        this.state
                                                            .searchPokemons[
                                                            item
                                                        ].sprites.other
                                                            .dream_world
                                                            .front_default
                                                            ? this.state
                                                                  .searchPokemons[
                                                                  item
                                                              ].sprites.other
                                                                  .dream_world
                                                                  .front_default
                                                            : this.state
                                                                  .searchPokemons[
                                                                  item
                                                              ].sprites.other[
                                                                  "official-artwork"
                                                              ].front_default
                                                    }
                                                    name={
                                                        this.state
                                                            .searchPokemons[
                                                            item
                                                        ].name
                                                    }
                                                    type={
                                                        this.state
                                                            .searchPokemons[
                                                            item
                                                        ].types
                                                    }
                                                    height={
                                                        this.state.allPokemons[
                                                            item
                                                        ].height
                                                    }
                                                    weight={
                                                        this.state.allPokemons[
                                                            item
                                                        ].weight
                                                    }
                                                    onElemClick={() =>
                                                        this.fetchPokemonData(
                                                            this.state
                                                                .searchPokemons[
                                                                item
                                                            ].id,
                                                            this.state
                                                                .searchPokemons[
                                                                item
                                                            ].name,
                                                            this.state
                                                                .searchPokemons[
                                                                item
                                                            ].types,
                                                            this.state
                                                                .searchPokemons[
                                                                item
                                                            ].sprites.other
                                                                .dream_world
                                                                .front_default
                                                                ? this.state
                                                                      .searchPokemons[
                                                                      item
                                                                  ].sprites
                                                                      .other
                                                                      .dream_world
                                                                      .front_default
                                                                : this.state
                                                                      .searchPokemons[
                                                                      item
                                                                  ].sprites
                                                                      .other[
                                                                      "official-artwork"
                                                                  ]
                                                                      .front_default
                                                        )
                                                    }
                                                />
                                            </motion.li>
                                        ))}
                                    </motion.ul>
                                ) : !this.state.isFilter ? (
                                    <motion.ul
                                        className="card__content"
                                        initial="hidden"
                                        animate="visible"
                                        variants={listnya}
                                    >
                                        {Object.keys(
                                            this.state.allPokemons
                                        ).map((item, key) => (
                                            <motion.li
                                                className="card__li"
                                                key={
                                                    this.state.allPokemons[item]
                                                        .id
                                                }
                                                variants={itemsnya}
                                            >
                                                <Pokemon
                                                    key={
                                                        this.state.allPokemons[
                                                            item
                                                        ].id
                                                    }
                                                    id={
                                                        this.state.allPokemons[
                                                            item
                                                        ].id
                                                    }
                                                    image={
                                                        this.state.allPokemons[
                                                            item
                                                        ].sprites.other
                                                            .dream_world
                                                            .front_default
                                                            ? this.state
                                                                  .allPokemons[
                                                                  item
                                                              ].sprites.other
                                                                  .dream_world
                                                                  .front_default
                                                            : this.state
                                                                  .allPokemons[
                                                                  item
                                                              ].sprites.other[
                                                                  "official-artwork"
                                                              ].front_default
                                                    }
                                                    name={
                                                        this.state.allPokemons[
                                                            item
                                                        ].name
                                                    }
                                                    type={
                                                        this.state.allPokemons[
                                                            item
                                                        ].types
                                                    }
                                                    height={
                                                        this.state.allPokemons[
                                                            item
                                                        ].height
                                                    }
                                                    weight={
                                                        this.state.allPokemons[
                                                            item
                                                        ].weight
                                                    }
                                                    onElemClick={() =>
                                                        this.fetchPokemonData(
                                                            this.state
                                                                .allPokemons[
                                                                item
                                                            ].id,
                                                            this.state
                                                                .allPokemons[
                                                                item
                                                            ].name,
                                                            this.state
                                                                .allPokemons[
                                                                item
                                                            ].types,
                                                            this.state
                                                                .allPokemons[
                                                                item
                                                            ].sprites.other
                                                                .dream_world
                                                                .front_default
                                                                ? this.state
                                                                      .allPokemons[
                                                                      item
                                                                  ].sprites
                                                                      .other
                                                                      .dream_world
                                                                      .front_default
                                                                : this.state
                                                                      .allPokemons[
                                                                      item
                                                                  ].sprites
                                                                      .other[
                                                                      "official-artwork"
                                                                  ]
                                                                      .front_default
                                                        )
                                                    }
                                                />
                                            </motion.li>
                                        ))}
                                    </motion.ul>
                                ) : (
                                    <motion.ul
                                        // style={{
                                        //     display: "grid",
                                        //     gridTemplateColumns: "1fr 1fr 1fr",
                                        //     width: "100%",
                                        //     gap: "30px",
                                        //     listStyleType: "none",
                                        //     paddingInlineStart: "0px",
                                        //     alignItems: "center",
                                        //     justifyContent: "center",
                                        // }}
                                        className="card__content"
                                        initial="hidden"
                                        animate="visible"
                                        variants={listnya}
                                    >
                                        {Object.keys(
                                            this.state.filterPokemons
                                        ).map((item, key) => (
                                            <motion.li
                                                className="card__li"
                                                key={
                                                    this.state.allPokemons[item]
                                                        .id
                                                }
                                                variants={itemsnya}
                                            >
                                                <Pokemon
                                                    key={
                                                        this.state
                                                            .filterPokemons[
                                                            item
                                                        ].id
                                                    }
                                                    id={
                                                        this.state
                                                            .filterPokemons[
                                                            item
                                                        ].id
                                                    }
                                                    image={
                                                        this.state
                                                            .filterPokemons[
                                                            item
                                                        ].sprites.other
                                                            .dream_world
                                                            .front_default
                                                            ? this.state
                                                                  .filterPokemons[
                                                                  item
                                                              ].sprites.other
                                                                  .dream_world
                                                                  .front_default
                                                            : this.state
                                                                  .filterPokemons[
                                                                  item
                                                              ].sprites.other[
                                                                  "official-artwork"
                                                              ].front_default
                                                    }
                                                    name={
                                                        this.state
                                                            .filterPokemons[
                                                            item
                                                        ].name
                                                    }
                                                    type={
                                                        this.state
                                                            .filterPokemons[
                                                            item
                                                        ].types
                                                    }
                                                    height={
                                                        this.state.allPokemons[
                                                            item
                                                        ].height
                                                    }
                                                    weight={
                                                        this.state.allPokemons[
                                                            item
                                                        ].weight
                                                    }
                                                    onElemClick={() =>
                                                        this.fetchPokemonData(
                                                            this.state
                                                                .filterPokemons[
                                                                item
                                                            ].id,
                                                            this.state
                                                                .filterPokemons[
                                                                item
                                                            ].name,
                                                            this.state
                                                                .filterPokemons[
                                                                item
                                                            ].types,
                                                            this.state
                                                                .filterPokemons[
                                                                item
                                                            ].sprites.other
                                                                .dream_world
                                                                .front_default
                                                                ? this.state
                                                                      .filterPokemons[
                                                                      item
                                                                  ].sprites
                                                                      .other
                                                                      .dream_world
                                                                      .front_default
                                                                : this.state
                                                                      .filterPokemons[
                                                                      item
                                                                  ].sprites
                                                                      .other[
                                                                      "official-artwork"
                                                                  ]
                                                                      .front_default
                                                        )
                                                    }
                                                />
                                            </motion.li>
                                        ))}
                                    </motion.ul>
                                )}
                            </CardContent>
                        )}
                    </CategoryContent>
                </CategoryContainer>
            </>
        );
    }
}
