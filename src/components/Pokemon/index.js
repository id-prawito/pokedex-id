import React from "react";
import "../../app/App.css";
import { Link } from "react-router-dom";
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
} from "./Pokemon";

export default function Pokemon(props) {
    const { id, image, name, type, weight, height } = props;
    return (
        <>
            <Link to={"/pokemon/" + name}>
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
