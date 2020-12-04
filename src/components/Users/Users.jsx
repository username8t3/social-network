import React from "react";
import styles from './users.module.css';

let Users = (props) => {
    if ( props.users.length === 0 ) {
        props.setUsers([
            {
                id: 1,
                photoUrl: 'https://www.f-legrand.fr/scidoc/figures/image/niveaux/images/babouin.png',
                followed: true,
                fullName: 'Dmitry',
                status: 'Learning',
                location: {
                    country: 'Russia',
                    city: 'St. Petersburg',
                }
            },
            {
                id: 2,
                photoUrl: 'https://www.f-legrand.fr/scidoc/figures/image/niveaux/images/babouin.png',            followed: false,
                fullName: 'Alexey',
                status: 'Drinking',
                location: {
                    country: 'Russia',
                    city: 'Moscow',
                }
            },
            {
                id: 3,
                photoUrl: 'https://www.f-legrand.fr/scidoc/figures/image/niveaux/images/babouin.png',            followed: false,
                fullName: 'Anatoly',
                status: 'Working',
                location: {
                    country: 'Russia',
                    city: 'Naryan-Mar'
                }
            },
        ])
    }

    return <div>{
       props.users.map( u =>
           <div key={u.id}>
              <span>
                  <div>
                      <img src={u.photoUrl} className={styles.userPhoto}/>
                  </div>
                  <div>
                      { u.followed
                          ? <button onClick={ () => { props.unfollow(u.id)}}>Unfollow</button>
                          : <button onClick={ () => { props.follow(u.id)}}>Follow</button>}
                  </div>
              </span>
               <span>
                   <span>
                       <div>{u.fullName}</div>
                       <div>{u.status}</div>
                   </span>
                   <span>
                       <div>{u.location.country}</div>
                       <div>{u.location.city}</div>
                   </span>
               </span>
           </div>
       )
    }</div>
}

export default Users;
