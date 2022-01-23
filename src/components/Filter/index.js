import React from "react";
import { BiDisc } from "react-icons/bi";
import {
    Input,
    SelectContainer,
    SelectContent,
    SelectInput,
} from "./FilterElements";
import Select from "react-select";
import "../../app/app.css";

const customStyles = {
    control: (styles) => ({
        // none of react-select's styles are passed to <Control />
        ...styles,
        width: 230,
        backgroundColor: "white",
        display: "flex",
        borderRadius: 5,
        border: "none",
        boxShadow: "none",
        "@media only screen and (max-width: 1280px)": {
            backgroundColor: "white",
            border: "none",
            width: 200,
            outline: "none",
            boxShadow: "none",
        },
        "@media only screen and (min-width: 768px) and (max-width: 1099px) ": {
            backgroundColor: "white",
            border: "none",
            width: 340,
            outline: "none",
            boxShadow: "none",
        },

        "@media only screen and (min-width: 600px) and (max-width: 839px) ": {
            backgroundColor: "white",
            border: "none",
            width: 220,
            outline: "none",
            boxShadow: "none",
        },

        "@media only screen and (min-width: 320px) and (max-width: 599px) ": {
            backgroundColor: "white",
            border: "none",
            width: 230,
            outline: "none",
            boxShadow: "none",
        },
    }),
};

const stylesLogo = {
    marginRight: "5px",
    marginLeft: "5px",
    "@media (miWidth: 1025px) and (maxWidth: 1280px)": {
        marginRight: "auto",
        marginLeft: "auto",
    },
};

class Filters extends React.Component {
    render() {
        const nilaiValue = this.props.regions;

        const optionsRegions = nilaiValue.map((nilaiValuenya) => ({
            label:
                nilaiValuenya.name +
                " ( " +
                (nilaiValuenya.offset + 1) +
                " - " +
                (nilaiValuenya.limit + nilaiValuenya.offset) +
                " )",
            value: nilaiValuenya.name,
            key: nilaiValuenya.name,
        }));

        const typesValue = this.props.types;

        const optionsTypes = typesValue.map((nilaiTypes) => ({
            label: nilaiTypes,
            value: nilaiTypes,
            key: nilaiTypes,
        }));

        const sortByValue = this.props.sortby;

        const optionsSortby = sortByValue.map((nilaiSortby) => ({
            label: nilaiSortby,
            value: nilaiSortby,
            key: nilaiSortby,
        }));

        return (
            <>
                <SelectContainer>
                    <SelectContent>
                        <SelectInput>
                            <BiDisc
                                color="rgb(122, 121, 121)"
                                fontSize="1.4em"
                                style={stylesLogo}
                            />

                            <Select
                                placeholder="Regions"
                                styles={customStyles}
                                options={optionsRegions}
                                onChange={this.props.regionsSelect}
                            ></Select>
                        </SelectInput>

                        <SelectInput>
                            <BiDisc
                                color="rgb(122, 121, 121)"
                                fontSize="1.4em"
                                style={stylesLogo}
                            />
                            <Select
                                placeholder="Types"
                                styles={customStyles}
                                options={optionsTypes}
                                onChange={this.props.typesSelect}
                            />
                        </SelectInput>
                        <SelectInput>
                            <BiDisc
                                color="rgb(122, 121, 121)"
                                fontSize="1.4em"
                                style={stylesLogo}
                            />
                            <Select
                                placeholder="Sort By"
                                styles={customStyles}
                                options={optionsSortby}
                                onChange={this.props.sortSelect}
                            />
                        </SelectInput>
                        <SelectInput>
                            <BiDisc
                                color="rgb(122, 121, 121)"
                                fontSize="1.4em"
                                style={stylesLogo}
                            />
                            <Input
                                value={this.props.valuesearch}
                                onChange={this.props.searchChange}
                                placeholder="Search"
                            ></Input>
                        </SelectInput>
                    </SelectContent>
                </SelectContainer>
            </>
        );
    }
}

export default Filters;
