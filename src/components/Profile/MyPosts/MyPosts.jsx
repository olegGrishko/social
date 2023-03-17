import React from 'react';
import s from './MyPosts.module.css';
import Post from './Posts/Post';

const MyPosts = () => {
    return (
      <div className={s.content}>
          <div>
            My posts
            <div>
              <textarea></textarea>
              <button>Add post</button>
            </div>
            <div className={s.posts}>
              <Post message='Hi, how are you?' likesCount='0'/>
              <Post message="It's my first post" likesCount='23'/>
            
            </div>
          </div>
        </div>
    )
}

export default MyPosts;