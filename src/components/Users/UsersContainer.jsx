import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {followAC, setUsersAC, unfollowAC} from "../../redux/users-reducer";

// Ф-ция принимающая весь state и возращающая объект
// с необходимыми данными.
let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}

// Ф-ция передающая дочернему компоненту колбэки
// для вызова презентационным компонентом
let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
