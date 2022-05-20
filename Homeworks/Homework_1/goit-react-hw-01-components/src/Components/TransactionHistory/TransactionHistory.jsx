import React from "react";
import propTypes from "prop-types"

import "modern-normalize/modern-normalize.css"
import Transaction from "../transaction/transaction";

import style from "./TransactionHistory.module.css"

const TransactionHistory = ({items}) => {
    return (
        <table className={style.transactionHistory}>
            <thead className={style.head}>
                <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
                </tr>
            </thead>

            <tbody>
                {items.map((item => (
                    <Transaction id={item.id}
                    amount={item.amount}
                    type={item.type}
                    currency={item.currency}></Transaction>
                )))}
            </tbody>
        </table>
    )
}

TransactionHistory.propTypes = {
    items: propTypes.array.isRequired
}

export default TransactionHistory
