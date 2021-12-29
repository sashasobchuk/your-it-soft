import React from 'react';
import OneUser from "./OneUser/OneUser";
import classes from './users.module.css'
import {usersPropsType} from "../../../types/usersType";
import SortButton from "../sortButoon/sortButton";

const Users: React.FC<usersPropsType> = ({getPosts, users, sortObj, clearPosts}) => {
    return (
        <div onClick={clearPosts} className={classes.usersContainer}>
            <SortButton   {...sortObj} />
            {users?.map((user) =>
                <OneUser getPosts={getPosts} key={user.id} user={user}/>)}
        </div>
    );
};

export default Users;