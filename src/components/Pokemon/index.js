import React, { useContext, useRef } from "react";
import "../../app/app.css";
import { Link } from "react-router-dom";
import { FiX } from "react-icons/fi";
import { GlobalContext } from "../../context/GlobalState";
import {
    About,
    AboutText,
    Footer,
    Header,
    IconTypes,
    ImageCard,
    IsiCard,
    JudulW,
    MainFooter,
    Name,
    Penjelasan,
    Types,
    Utama,
    TypesText,
    Weight,
    Card,
    Number,
    CardList,
} from "./Pokemon";
import ReactTooltip from "react-tooltip";
import Snackbar from "../Snackbar";

export default function Pokemon(props) {
    const { id, image, name, type, weight, height } = props;
    return (
        <>
            <Link to={`/pokemon/` + name}>
                <Card Namanya={name}>
                    <IsiCard>
                        <Header>
                            <Number> #{String(id).padStart(3, "0")}</Number>
                            <TypesText>
                                {type.map((type, key) => (
                                    <Types
                                        key={type.type.name}
                                        title={type.type.name}
                                        className={`poke__type__bg ${type.type.name}`}
                                    >
                                        <IconTypes
                                            src={`${type.type.name}.png`}
                                        ></IconTypes>
                                    </Types>
                                ))}
                            </TypesText>
                        </Header>
                        <Utama>
                            <ImageCard src={image}></ImageCard>
                            <Name maxLength="12">{name}</Name>
                        </Utama>
                        <Footer>
                            <About>
                                <AboutText>About</AboutText>
                            </About>
                            <MainFooter>
                                <Weight>
                                    <JudulW>Weight</JudulW>
                                    <Penjelasan>{weight} g</Penjelasan>
                                </Weight>
                                <Weight>
                                    <JudulW>Height</JudulW>
                                    <Penjelasan>{height / 10} m</Penjelasan>
                                </Weight>
                            </MainFooter>
                        </Footer>
                    </IsiCard>
                </Card>
            </Link>
        </>
    );
}

export function PokemonCardList(props) {
    const { id, image, name, type, weight, height, titleNew } = props;
    const { removePokemonFromList } = useContext(GlobalContext);
    const snackbarRef = useRef(null);

    const SnackbarType = {
        success: "success",
        fail: "fail",
    };
    const handleClickRemove = (value) => () => {
        removePokemonFromList(value);
        snackbarRef.current.show();
    };
    return (
        <>
            <Snackbar
                ref={snackbarRef}
                message="Succes to remove your Pokemon!"
                type={SnackbarType.fail}
            />
            <CardList Namanya={name}>
                <IsiCard>
                    <Header>
                        <Number> #{String(id).padStart(3, "0")}</Number>
                        <TypesText>
                            <Types
                                data-tip
                                data-for="remove"
                                key="remove"
                                style={{ backgroundColor: "red" }}
                                className="poke__type__bg"
                            >
                                <button
                                    style={{
                                        background: "transparent",
                                        cursor: "pointer",
                                    }}
                                    onClick={handleClickRemove(titleNew)}
                                >
                                    <FiX className="text_hover" />
                                </button>
                                <ReactTooltip
                                    place="top"
                                    type="light"
                                    effect="solid"
                                    id="remove"
                                >
                                    <p
                                        style={{
                                            fontSize: 12,
                                            fontWeight: 600,
                                        }}
                                    >
                                        Remove
                                    </p>
                                </ReactTooltip>
                            </Types>

                            {type.map((type, key) => (
                                <Types
                                    key={type.type.name}
                                    title={type.type.name}
                                    className={`poke__type__bg ${type.type.name}`}
                                >
                                    <IconTypes
                                        src={`${type.type.name}.png`}
                                    ></IconTypes>
                                </Types>
                            ))}
                        </TypesText>
                    </Header>
                    <Link to={`/pokemon/` + name}>
                        <Utama>
                            <ImageCard src={image}></ImageCard>
                            <Name maxLength="12">
                                {name}
                                <p style={{ color: "#08a0ff" }}>({titleNew})</p>
                            </Name>
                        </Utama>
                    </Link>
                    <Footer>
                        <About>
                            <AboutText>About</AboutText>
                        </About>
                        <MainFooter>
                            <Weight>
                                <JudulW>Weight</JudulW>
                                <Penjelasan>{weight} g</Penjelasan>
                            </Weight>
                            <Weight>
                                <JudulW>Height</JudulW>
                                <Penjelasan>{height / 10} m</Penjelasan>
                            </Weight>
                        </MainFooter>
                    </Footer>
                </IsiCard>
            </CardList>
        </>
    );
}
