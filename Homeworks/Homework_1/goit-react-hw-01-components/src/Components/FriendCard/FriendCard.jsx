import React from "react";
import propTypes from "prop-types"

import "modern-normalize/modern-normalize.css"

import style from "./Friendcard.module.css"

const FriendCart = ({avatar, name, isOnline}) => {
    return (
        <li className={style.item}>
        <div className={isOnline ? style.isOnline : style.isNotOnline}></div>
        <img className={style.avatar} src={avatar} alt="User avatar" width="48" />
        <p className={style.name}>{name}</p>
        </li>
    )
}

FriendCart.propTypes = {
    avatar: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    isOnline: propTypes.bool.isRequired
}
export default FriendCart