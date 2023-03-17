import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
            <div className={s.item}>
              <img src='https://vraki.net/sites/default/files/inline/images/29_21.jpg' />
              {props.message}
              <div>
                <span>like</span> {props.likesCount}
              </div>
            </div>
    )
}

export default Post;