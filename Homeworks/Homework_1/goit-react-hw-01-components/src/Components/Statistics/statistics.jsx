import React from "react";
import propTypes from "prop-types"


import "modern-normalize/modern-normalize.css"
import styles from "./statistics.module.css"

import Stat from "../stat/stat"
import Title from "../title/title";

const Statistics = ({title ,stats}) => {
    return (
        <div className={styles.statistics}>
        <Title title={title}></Title>
        <ul className={styles.statList}>
        {stats.map((stat) => (
            <Stat
            label = {stat.label}
            percentage = {stat.percentage}></Stat>
            ))}
        </ul>
        </div>
    )
    
}

Statistics.propTypes = {
    title: propTypes.string.isRequired,
    stats: propTypes.arrayOf(
        propTypes.shape({
            id: propTypes.string,
            label: propTypes.string.isRequired,
            percentage: propTypes.number.isRequired
            }
        )
    )
}
export default Statistics