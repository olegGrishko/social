import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';

const Profile = () => {
    return (
      <div className={s.content}>
          <div>
            <img src='https://avatars.mds.yandex.net/i?id=dca793c7f8bd10501d5fb7083c762423fcfa939a-8257574-images-thumbs&n=13' />
          </div>
          <div>
            <img src='https://avatars.mds.yandex.net/i?id=b70aab8decbd3b8c992533f5046db92141352487-9065887-images-thumbs&n=13' />
            ava + description
          </div>
          <MyPosts />
        </div>
    )
}

export default Profile;