import React from 'react';
import classes from './header.module.css'
import Search from "./search/search";

type headerPropsType={
    searchValue:string,
    changeHandler:(e: React.ChangeEvent<HTMLInputElement>)=>void
}
const Header = React.memo<headerPropsType>(({searchValue,changeHandler}) => {

    return (
        <header className={classes.headerContainer}>
            <div className={classes.tittle}>Lorem ipsum</div>
            <Search
                value={searchValue}
                placeholder={"Search"}
                handleChange={changeHandler}
            />

        </header>
    );
});

export default Header;