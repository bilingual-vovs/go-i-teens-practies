import React from "react";
import propTypes from "prop-types"

import styles from "./title.module.css"

const Title = ({title}) => { 
    if(title == null){
        
    }
    else{
        return (
            <h2 className={styles.title}>{title}</h2>
        )
    }
}

Title.propTypes = {
    title: propTypes.string.isRequired
}

export default Title