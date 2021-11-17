import React from "react";
import logoImg from "../../assets/images/favicon.ico";
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
} from "./HomeElements";

const HomeSection = () => {
    return (
        <>
            <HomeContainer>
                <HomeContent>
                    <Content>
                        <Judul>Pokédex.design</Judul>
                        <Description>
                            Search for a Pokémon by name or using its National
                            Pokédex number.
                        </Description>
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

export default HomeSection;
