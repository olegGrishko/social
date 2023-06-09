import React from 'react';
import s from './MyPosts.module.css';
import Post from './Posts/Post';

const MyPosts = (props) => {

    /*let posts = [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount:11}
    ]*/

    let postsElements = props.posts
        .map(p => <Post message={p.message} likesCount = {p.likesCount} />)

    return (
      <div className={s.content}>
          <div className={s.postsBlock}>
            <h3>
                My posts
            </h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                { postsElements }
            </div>
          </div>
        </div>
    )
}

export default MyPosts;