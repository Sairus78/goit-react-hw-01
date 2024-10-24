import css from "./friendsList.module.css";
import FriendListItem from "../friendListItem/friendListItem";
import PropTypes from "prop-types";

const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <li key={id} className={css.friendListItem}>
            <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
          </li>
        );
      })}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired, // 'id' має бути рядком
      avatar: PropTypes.string.isRequired, // URL аватарки у вигляді рядка
      name: PropTypes.string.isRequired, // Ім'я також рядок
      isOnline: PropTypes.bool.isRequired, // Булеве значення (онлайн/офлайн)
    })
  ).isRequired, // Переконуємося, що 'friends' – масив і є обов'язковим пропом
};

export default FriendList;
