import React from 'react';
import {userPropType} from '../../../../types/usersType';
import classes from './oneUsere.module.css'

const OneUser: React.FC<userPropType> = ({user, getPosts}) => {
    const [phone1, phone2] = user.phone.split('x')
    return (
        <div onClick={(e) => {e.stopPropagation();getPosts(user.id)}}
             className={classes.userContainer}>
            <div>{user.name}</div>
            <div>{user.email}</div>
            <div>{phone1}</div>
            <div>{phone2}</div>
            <div className={classes.buttonContainer}>
                <button className={classes.button}>
                    Lorem ipsum
                </button>
            </div>


        </div>
    );
};

export default OneUser;