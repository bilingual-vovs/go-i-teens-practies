import React from "react";
import propTypes from "prop-types"

import "modern-normalize/modern-normalize.css"

import style from "./transaction.module.css"

const Transaction = ({type, amount, currency, id}) => {
    return (
        <tr className={style.item} id={id}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
        </tr>
    )
}

Transaction.propTypes = {
    type: propTypes.string,
    amount: propTypes.number.isRequired, 
    currency: propTypes.string,
    id: propTypes.string.isRequired
}

export default Transaction