import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    src='https://avatars.mds.yandex.net/i?id=dca793c7f8bd10501d5fb7083c762423fcfa939a-8257574-images-thumbs&n=13'/>
            </div>
             <div className={s.descriptionBlock}>
                <img
                    src='https://avatars.mds.yandex.net/i?id=b70aab8decbd3b8c992533f5046db92141352487-9065887-images-thumbs&n=13'/>
                ava + description
             </div>
        </div>
)
}

export default ProfileInfo;