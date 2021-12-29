import React from 'react';
import classes from './sortBottom.module.css'
import {sortPropType} from "../../../types/usersType";


const SortButton: React.FC<sortPropType> = React.memo(({...sortObj}) => {
    return (
        <div onClick={e => e.stopPropagation()} className={classes.sortButton}>
            <input className={classes.customCheckbox} checked={sortObj.sort} onChange={() => {
                sortObj.setSort(!sortObj.sort)
            }} id='box' name='box' type="checkbox"/>
            <label htmlFor='box'> Sort by Name</label>
        </div>
    );
})

export default SortButton;