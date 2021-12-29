import React from "react";
import {usersPropsType} from "../../types/usersType";
import classes from "./main.module.css";
import Posts from "./posts/posts";
import Users from "./users/users";

const Main: React.FC<usersPropsType> = (props) => {

    return (
        <main className={classes.mainPage}>
            {!!props.users.length &&<Users   {...props}/>}
            {!!props.posts.length && <Posts posts={props.posts}/>}
        </main>
    )
}
export default Main