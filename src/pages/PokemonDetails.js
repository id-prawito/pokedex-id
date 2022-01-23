import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import "../app/app.css";

import {
    AbilitiesBungkus,
    About,
    BaseStat,
    BodyDetails,
    Bungkusan,
    BungkusanDetails,
    BungkusanDetailsBawah,
    BungkusEvalution,
    BungkusHpProgress,
    BungkusIcon,
    BungkusProgress,
    Description,
    DescriptionPokemon,
    FooterDetails,
    HeaderDetails,
    Icon,
    IconEvo,
    ImgBodyDetails,
    Isinya,
    Judulnya,
    Nama,
    NamaDetails,
    NamaGenera,
    Nomor,
    NomorJudul,
    Pembungkus,
    PembungkusAbilities,
    PembungkusDetails,
    PokemonDetailsContainer,
    PokemonDetailsContent,
    Progress,
    Progressnya,
    Region,
    Text,
    Textnya,
    TextValue,
    Tulisan,
    TypesText,
    Weight,
    WeightHeight,
} from "../components/Elements/Elements";
import { Link } from "react-router-dom";
import ReactTooltip from "react-tooltip";
import ButonCatch from "../components/Button";
import Navbar from "../components/Navbar";

const PokemonDetails = () => {
    let { name } = useParams();
    const [data, setData] = useState([]);
    const [types, setTypes] = useState([]);
    const [statistics, setStatistics] = useState([]);
    const [deskripsi, setDescription] = useState({});
    const [genera, setGenera] = useState({});
    const [names, setNames] = useState({});
    const [images, setImages] = useState({});
    const [url, setUrlnya] = useState([]);
    const [evochain, setEvoChain] = useState([]);
    const [urlability, setUrlAbilitinya] = useState([]);
    const [bisa, setBisa] = useState([]);
    const [idnya, setIDnya] = useState("");

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios
                    .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
                    .catch();
                setData(response.data);
                setIDnya(response.data.id);
                const statistics = [];

                for (let j = 0; j < response.data.stats.length; j++) {
                    const Obj = {};
                    Obj["stat__name"] = response.data.stats[j].stat.name;
                    Obj["stat__val"] = response.data.stats[j].base_stat;
                    statistics.push(Obj);
                }
                setStatistics(statistics);

                const urlability = [];
                for (let i = 0; i < response.data.abilities.length; i++) {
                    urlability.push(response.data.abilities[i].ability.url);
                }
                setUrlAbilitinya(urlability);

                const types = [];
                for (let i = 0; i < response.data.types.length; i++) {
                    types.push(response.data.types[i].type.name);
                }
                setTypes(types);
                const Objectnya = {
                    gambar: response.data.sprites.other.dream_world
                        .front_default,
                    gambar_2:
                        response.data.sprites.other["official-artwork"]
                            .front_default,
                };
                setImages(Objectnya);
            } catch {
                // console.log("error");
            }
        };
        getData();
    }, [name]);

    useEffect(() => {
        const getDescription = async () => {
            try {
                const response = await axios
                    .get(`https://pokeapi.co/api/v2/pokemon-species/${idnya}`)
                    .catch();
                var str = JSON.stringify(response.data);
                // Remove \ from the string
                var convertedStr = str.replace(/\f/g, "");

                // Convert updated string back to object
                var newObj = JSON.parse(convertedStr);
                setDescription(newObj);
                for (
                    let i = 0;
                    i < response.data.flavor_text_entries.length - 1;
                    i++
                ) {
                    if (
                        response.data.flavor_text_entries[i].language.name ===
                        "en"
                    ) {
                        const Objectnya = {
                            penjelasan:
                                response.data.flavor_text_entries[i]
                                    .flavor_text,
                        };
                        setDescription(Objectnya);
                        break;
                    }
                }

                for (let i = 0; i < response.data.genera.length - 1; i++) {
                    if (response.data.genera[i].language.name === "en") {
                        const Objectnya = {
                            genera: response.data.genera[i].genus,
                        };
                        setGenera(Objectnya);
                        break;
                    }
                }

                for (let i = 0; i < response.data.names.length - 1; i++) {
                    if (response.data.names[i].language.name === "ja") {
                        const Objectnya = {
                            nama: response.data.names[i].name,
                        };
                        setNames(Objectnya);
                        break;
                    }
                }

                for (
                    let i = 0;
                    i < response.data.evolution_chain.url.length;
                    i++
                ) {
                    const Objectnya = {
                        url: response.data.evolution_chain.url,
                    };
                    setUrlnya(Objectnya);
                    break;
                }
            } catch (e) {
                const Objectnya = {
                    penjelasan: "Deskripnya Tidak Ada",
                };
                setDescription(Objectnya);
            }
        };
        getDescription();
    }, [idnya]);

    useEffect(() => {
        const getEvoImages = async () => {
            try {
                const response = await axios.get(url.url);
                const evoChain = [];
                let evoData = response.data.chain;

                do {
                    const evoDetails = evoData["evolution_details"][0];
                    evoChain.push({
                        idnya: response.data.id,
                        species_name: evoData.species.name,
                        min_level: !evoDetails ? 1 : evoDetails.min_level,
                        trigger_name: !evoDetails
                            ? null
                            : evoDetails.trigger.name,
                        item: !evoDetails ? null : evoDetails.item,
                    });
                    evoData = evoData["evolves_to"][0];
                } while (!!evoData && evoData.hasOwnProperty("evolves_to"));

                for (let i = 0; i < evoChain.length; i++) {
                    const response = await axios
                        .get(
                            `https://pokeapi.co/api/v2/pokemon/${evoChain[i].species_name}`
                        )
                        .catch((err) => console.log("Error:", err));
                    response.data.sprites.other.dream_world.front_default
                        ? (evoChain[i]["image_url"] =
                              response.data.sprites.other.dream_world.front_default)
                        : (evoChain[i]["image_url"] =
                              response.data.sprites.other[
                                  "official-artwork"
                              ].front_default);
                }
                setEvoChain(evoChain);
            } catch (e) {
                const Objectnya = [
                    {
                        species_name: "notfound",
                        image_url: "error",
                    },
                ];
                setEvoChain(Objectnya);
            }
        };
        getEvoImages();
    }, [url]);

    useEffect(() => {
        const getAbility = async () => {
            try {
                const evonyaNamanya = [];
                for (let i = 0; i < urlability.length; i++) {
                    const response = await axios.get(urlability[i]);
                    const ObjectTik = {
                        nama: response.data.name,
                        text: response.data.flavor_text_entries[0].flavor_text,
                    };
                    evonyaNamanya.push(ObjectTik);
                }
                setBisa(evonyaNamanya);
            } catch {
                // console.log("error", error);
            }
        };
        getAbility();
    }, [urlability]);

    let stringName = name.charAt(0).toUpperCase() + name.slice(1);
    document.title = `${stringName} | Pokédex-id`;

    return (
        <>
            <Navbar />
            <PokemonDetailsContainer>
                <PokemonDetailsContent>
                    <HeaderDetails>
                        <NomorJudul>
                            <Nomor>#{String(data.id).padStart(3, "0")}</Nomor>
                            <Nama>{data.name}</Nama>
                        </NomorJudul>
                        <WeightHeight>
                            <Weight>
                                <Judulnya>Weight : </Judulnya>
                                <Isinya>{data.weight} g</Isinya>
                            </Weight>
                            <Weight>
                                <Judulnya>Height : </Judulnya>
                                <Isinya>{data.height / 10} m</Isinya>
                            </Weight>
                        </WeightHeight>
                        <Region>
                            <Nomor>Genera</Nomor>
                            <NamaGenera>{genera.genera}</NamaGenera>
                        </Region>
                    </HeaderDetails>
                    <BodyDetails>
                        <BungkusanDetails>
                            {images.gambar === null ? (
                                <ImgBodyDetails
                                    src={images.gambar_2}
                                ></ImgBodyDetails>
                            ) : (
                                <ImgBodyDetails
                                    src={images.gambar}
                                ></ImgBodyDetails>
                            )}

                            <Tulisan>{names.nama}</Tulisan>
                        </BungkusanDetails>
                        <BungkusanDetailsBawah>
                            <BaseStat>Evolutions</BaseStat>
                            <PembungkusDetails>
                                {evochain.map((evolution, key) => (
                                    <Link
                                        style={{ textDecoration: "none" }}
                                        key={key}
                                        to={
                                            "/pokemon/" + evolution.species_name
                                        }
                                    >
                                        <BungkusEvalution>
                                            <IconEvo
                                                src={evolution.image_url}
                                            ></IconEvo>
                                            <NamaDetails>
                                                {evolution.species_name}
                                            </NamaDetails>
                                        </BungkusEvalution>
                                    </Link>
                                ))}
                            </PembungkusDetails>
                        </BungkusanDetailsBawah>
                    </BodyDetails>
                    <FooterDetails>
                        <DescriptionPokemon>
                            <About>About</About>
                            <Description>{deskripsi.penjelasan}</Description>
                        </DescriptionPokemon>
                        <TypesText>
                            <Pembungkus>
                                {types.map((tipe, key) => (
                                    <BungkusIcon
                                        data-tip
                                        data-for={tipe}
                                        key={tipe}
                                        className={`poke__type__bg ${tipe}`}
                                    >
                                        <Icon src={`../${tipe}.png`}></Icon>
                                        <ReactTooltip
                                            place="top"
                                            type="light"
                                            effect="solid"
                                            id={tipe}
                                        >
                                            <p
                                                style={{
                                                    fontSize: 12,
                                                    fontWeight: 600,
                                                }}
                                            >
                                                {tipe}
                                            </p>
                                        </ReactTooltip>
                                    </BungkusIcon>
                                ))}
                                <ButonCatch
                                    nama={data.name}
                                    tipe={types}
                                    image={images.gambar}
                                    data={data}
                                    number={data.id}
                                />
                            </Pembungkus>
                            <BaseStat>Base Stat</BaseStat>
                            <BungkusHpProgress>
                                {statistics.map((statistik, key) => (
                                    <Bungkusan key={key}>
                                        <Text>{statistik.stat__name} :</Text>
                                        <BungkusProgress>
                                            <Progress>
                                                <Progressnya
                                                    className={
                                                        statistik.stat__name
                                                    }
                                                    width={
                                                        statistik.stat__val / 2
                                                    }
                                                ></Progressnya>
                                            </Progress>
                                        </BungkusProgress>
                                        <TextValue>
                                            {statistik.stat__val}
                                        </TextValue>
                                    </Bungkusan>
                                ))}
                            </BungkusHpProgress>
                        </TypesText>
                        <DescriptionPokemon>
                            <About>Abilities</About>
                            <PembungkusAbilities>
                                {bisa.map((ability, key) => (
                                    <AbilitiesBungkus
                                        data-tip
                                        data-for={ability.nama}
                                        key={key}
                                    >
                                        <Textnya>{ability.nama}</Textnya>
                                        <ReactTooltip
                                            place="top"
                                            type="light"
                                            effect="solid"
                                            id={ability.nama}
                                        >
                                            <p style={{ fontSize: 12 }}>
                                                {ability.text}
                                            </p>
                                        </ReactTooltip>
                                    </AbilitiesBungkus>
                                ))}
                            </PembungkusAbilities>
                        </DescriptionPokemon>
                    </FooterDetails>
                </PokemonDetailsContent>
            </PokemonDetailsContainer>
        </>
    );
};

export default PokemonDetails;
