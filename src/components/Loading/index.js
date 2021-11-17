import React from "react";
import {
    CardLoading,
    IsiCardLoading,
    Header,
    Utama,
    Footer,
    Number,
    TypesText,
    Types,
    About,
    AboutText,
    IconTypes,
    ImageCard,
    JudulW,
    MainFooter,
    Name,
    Penjelasan,
    Weight,
    CardContent,
} from "./LoadingElements";

const Loading = () => {
    return (
        <>
            <CardContent>
                <CardLoading>
                    <IsiCardLoading>
                        <Header>
                            <Number></Number>
                            <TypesText>
                                <Types>
                                    <IconTypes></IconTypes>
                                </Types>
                            </TypesText>
                        </Header>
                        <Utama>
                            <ImageCard></ImageCard>
                            <Name>Bulbasur</Name>
                        </Utama>
                        <Footer>
                            <About>
                                <AboutText>About</AboutText>
                            </About>
                            <MainFooter>
                                <Weight>
                                    <JudulW>Weight</JudulW>
                                    <Penjelasan>500 g</Penjelasan>
                                </Weight>
                                <Weight>
                                    <JudulW>Height</JudulW>
                                    <Penjelasan>0.78 m</Penjelasan>
                                </Weight>
                            </MainFooter>
                        </Footer>
                    </IsiCardLoading>
                </CardLoading>
            </CardContent>
        </>
    );
};

export default Loading;
