import React from "react";
import propTypes from "prop-types"

import "modern-normalize/modern-normalize.css"
import styles from "./Profile.module.css"


const Profile = ({user}) => {
    return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img
          src={user.avatar}
          alt="User avatar"
          className={styles.avatar}
        />
        <p className={styles.name}>{user.username}</p>
        <p className={styles.location}>{user.location}</p>
        <p className={styles.tag}>@{user.tag}</p>
      </div>

      <ul className={styles.stats}>
        <li>
          <span className={styles.label}>Followers: </span>
          <span className={styles.quantity}>{user.stats.subs}</span>
        </li>
        <li>
          <span className={styles.label}>Views: </span>
          <span className={styles.quantity}>{user.stats.views}</span>
        </li>
        <li>
          <span className={styles.label}>Likes: </span>
          <span className={styles.quantity}>{user.stats.likes}</span>
        </li>
      </ul>
    </div>
    )
}

Profile.propTypes = {
  user: propTypes.shape({
    username: propTypes.string,
  tag:  propTypes.string.isRequired,
  location: propTypes.string,
  avatar: propTypes.string.isRequired,
  stats: propTypes.shape({
    likes: propTypes.number,
    subs: propTypes.number,
    views: propTypes.number
  })
  })
  
}

export default Profile