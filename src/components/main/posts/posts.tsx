import React from 'react';
import classes from './posts.module.css'
import {postsPropsType, postType} from "../../../types/postType";

const Posts: React.FC<postsPropsType> = React.memo(({posts}) => {
    return (
        <div className={classes.postsContainer}>
            {posts.map((post: postType) => {
                return (
                    <div key={post.id} className={classes.postContainer}>
                        <div><h1 className={classes.tittle}>{post.title}</h1></div>
                        <div><span className={classes.body}>{post.body}</span></div>
                    </div>
                )
            })}
        </div>
    );
})

export default Posts;