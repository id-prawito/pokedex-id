import React from "react";
import logoTypes from "../../images/grass.png";
import Pokemon from "../Pokemon";

import {
    BungkusIcon,
    CategoryContainer,
    CategoryContent,
    Description,
    Icon,
    IconCategory,
} from "./CategoryElements";

export class Category extends React.Component {
    render() {
        return (
            <CategoryContainer>
                <CategoryContent>
                    <IconCategory>
                        <BungkusIcon>
                            <Icon src={logoTypes}></Icon>
                        </BungkusIcon>
                        <Description>Design Pokédex Card</Description>
                    </IconCategory>
                    <Pokemon />
                </CategoryContent>
            </CategoryContainer>
        );
    }
}

export default Category;
