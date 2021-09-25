import PropTypes from 'prop-types';

import styles from './Transactions.module.css';

function Transactions({ items }) {
    return (
        <table className={styles.table}>
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>
            <tbody>
                {items.map(({ id, type, amount, currency }) => {
                    return (
                        <tr key={id}>
                            <td className={styles.type}>{type}</td>
                            <td>{amount}</td>
                            <td>{currency}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}

Transactions.propTypes = {
    items: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string))
}

export default Transactions;