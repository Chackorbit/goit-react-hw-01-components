import s from './TransactionHistory.module.css';
import propTypes from 'prop-types';

export default function TransactionHistory({ transactions }) {
  return (
    <div className={s.container}>
      <table className={s.table}>
        <thead className={s.table_header}>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
        <tbody className={s.table_body}>
          {transactions.map(transaction => (
            <tr key={transaction.id}>
              <td>{transaction.type}</td>
              <td>{transaction.amount}</td>
              <td>{transaction.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
TransactionHistory.propTypes = {
  transactions: propTypes.array,
};
