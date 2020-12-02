import React from 'react';
import style from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src="https://www.w3schools.com/w3css/img_lights.jpg"/>
            </div>
            <div className={style.descriptionBlock}>
                ava + d
            </div>
        </div>
    );
}

export default ProfileInfo;
