import css from "./transactionHistory.module.css";
import PropTypes from "prop-types";

const TransactionHistory = ({ items }) => {
  return (
    <table>
      <thead>
        <tr className={css.tableMenu}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody className={css.tableItems}>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired, // 'id' має бути рядком
      type: PropTypes.string.isRequired, // 'type' має бути рядком
      amount: PropTypes.string.isRequired, // 'amount' також рядок (може містити числа у вигляді тексту)
      currency: PropTypes.string.isRequired, // 'currency' має бути рядком
    })
  ).isRequired, // Перевіряємо, що 'items' обов'язково передається як масив об'єктів
};

export default TransactionHistory;
