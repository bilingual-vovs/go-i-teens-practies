import React from "react";
import propTypes from "prop-types"


import "modern-normalize/modern-normalize.css"
import styles from "./stat.module.css"

const Stat = ({label, percentage}) => {
    return (
        <li className={styles.item}>
        <span className={styles.label}>{label}</span>
        <span className={styles.percentage}>{percentage}%</span>
    </li>
    )
}

Stat.propTypes = {
    label: propTypes.string.isRequired,
    percentage: propTypes.number.isRequired
}
export default Stat