import React from 'react';
import classes from "./search.module.css";

type SearchPropsType = {
    value: string,
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    placeholder?: string,
    className?: string

}

const Search: React.FC<SearchPropsType> = ({
                                               handleChange,
                                               value,
                                               placeholder
                                           }) => {
    return (
        <input className={classes.input} placeholder={placeholder} value={value} onChange={handleChange} type="text"/>
    );
};

export default Search;