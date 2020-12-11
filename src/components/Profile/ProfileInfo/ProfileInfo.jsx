import React from 'react';
import style from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
    // Если профайл ещё не получен, вставляем заглушку.
    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div>
            <div>
                <img src="https://www.w3schools.com/w3css/img_lights.jpg"/>
            </div>
            <div className={style.descriptionBlock}>
                <img src={props.profile.photos.large}/>
            </div>
        </div>
    );
}

export default ProfileInfo;
