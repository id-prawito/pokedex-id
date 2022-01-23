import React, { useContext } from "react";
import { useRef } from "react";
import logoImg from "../../assets/images/favicon.ico";
import Snackbar from "../Snackbar";
import { GlobalContext } from "../../context/GlobalState";
import {
    Description,
    HomeContainer,
    HomeContent,
    Judul,
    Content,
    LogoImg,
    Profile,
    HomeButton,
    JudulName,
    JudulDescription,
    JudulButton,
    ContentButton,
    DescriptionButton,
    HomeButtonList,
    JudulButtonRemove,
} from "./HomeElements";

const HomeSection = ({ description }) => {
    return (
        <>
            <HomeContainer>
                <HomeContent>
                    <Content>
                        <Judul>Pokédex.design</Judul>
                        <Description>{description}</Description>
                    </Content>
                </HomeContent>
                <HomeButton>
                    <ContentButton>
                        <JudulButton>Get Started</JudulButton>
                        <DescriptionButton>
                            <LogoImg src={logoImg}></LogoImg>
                            <Profile>
                                <JudulName>Created By</JudulName>
                                <JudulDescription>
                                    Prawito (Boy)
                                </JudulDescription>
                            </Profile>
                        </DescriptionButton>
                    </ContentButton>
                </HomeButton>
            </HomeContainer>
        </>
    );
};

export const HomeSectionList = ({ description }) => {
    const { removeAllPokemonFromList, listPokemon } = useContext(GlobalContext);

    const handleClickRemove = () => () => {
        removeAllPokemonFromList();
        snackbarRef.current.show();
    };

    const handleClickRemoveDontHave = () => () => {
        snackbarRef2.current.show();
    };

    const snackbarRef = useRef(null);
    const snackbarRef2 = useRef(null);

    const SnackbarType = {
        success: "success",
        fail: "fail",
    };
    return (
        <>
            <HomeContainer>
                <HomeContent>
                    <Content>
                        <Judul>Pokédex.design</Judul>
                        <Description>{description}</Description>
                    </Content>
                </HomeContent>
                <HomeButtonList>
                    <ContentButton>
                        <JudulButton>Get Started</JudulButton>
                        <DescriptionButton>
                            <LogoImg src={logoImg}></LogoImg>
                            <Profile>
                                <JudulName>Created By</JudulName>
                                <JudulDescription>
                                    Prawito (Boy)
                                </JudulDescription>
                            </Profile>
                        </DescriptionButton>
                        <JudulButtonRemove>
                            {listPokemon.length === 0 ? (
                                <button
                                    className="button_remove"
                                    onClick={handleClickRemoveDontHave()}
                                >
                                    YOU DONT HAVE POKEMON IN LIST
                                </button>
                            ) : (
                                <button
                                    className="button_remove"
                                    onClick={handleClickRemove()}
                                >
                                    REMOVE ALL POKEMON LIST
                                </button>
                            )}
                        </JudulButtonRemove>
                        <Snackbar
                            ref={snackbarRef}
                            message="Succes to remove all your Pokemon!"
                            type={SnackbarType.fail}
                        />
                        <Snackbar
                            ref={snackbarRef2}
                            message="You dont have Pokemon in List!"
                            type={SnackbarType.fail}
                        />
                    </ContentButton>
                </HomeButtonList>
            </HomeContainer>
        </>
    );
};

export default HomeSection;
