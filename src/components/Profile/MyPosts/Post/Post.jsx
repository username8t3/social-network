import React from 'react';
import css from './Post.module.css'

const Post = (props) => {
  return(
    <div className={css.item}>
      <img src="https://img.icons8.com/material/4ac144/256/user-male.png"/>
      {props.message}
      <div>
        <span>Like: {props.likesCount}</span>
      </div>
    </div> 
  );
}

export default Post;
