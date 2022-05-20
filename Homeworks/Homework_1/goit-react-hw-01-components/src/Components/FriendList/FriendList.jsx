import React from "react";
import propTypes from "prop-types"

import "modern-normalize/modern-normalize.css"
import FriendCart from "../FriendCard/FriendCard";

import styles from "./FriendsList.module.css"

const FriendsList = ({friends}) => {
    return (
        <ul className={styles.friendsList}>
            {friends.map((friend) => (
                <FriendCart 
                avatar={friend.avatar}
                name={friend.name}
                isOnline={friend.isOnline}
                ></FriendCart>
            ))}
        </ul>
    )
}

FriendsList.propTypes = {
    friends: propTypes.arrayOf(
        propTypes.shape({
            avatar: propTypes.string.isRequired,
            name: propTypes.string.isRequired,
            isOnline: propTypes.bool.isRequired
        })
    )
}
export default FriendsList