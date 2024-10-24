import css from "./frienListItem.module.css";
import PropTypes from "prop-types";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={css.friendListItem}>
      <img src={avatar} alt={`${name} avatar`} width="48" />
      <p>{name}</p>
      <p style={isOnline ? { color: "green" } : { color: "red" }}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};

// Додаємо перевірку типів пропсів

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired, // Очікуємо рядок (URL до зображення)
  name: PropTypes.string.isRequired, // Очікуємо рядок
  isOnline: PropTypes.bool.isRequired, // Очікуємо булеве значення
};
export default FriendListItem;
