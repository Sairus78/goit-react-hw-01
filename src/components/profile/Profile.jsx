import PropTypes from "prop-types";
import css from "./profile.module.css";

const Profile = ({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) => {
  return (
    <div className={css.box}>
      <div className={css.userBox}>
        <img className={css.userImg} src={image} alt={`${name} avatar`} />
        <p>{name}</p>
        <p>{tag}</p>
        <p>{location}</p>
      </div>

      <ul className={css.userList}>
        <li className={css.userInfo}>
          <span>Followers</span>
          <span>{followers}</span>
        </li>

        <li className={css.userInfo}>
          <span>Views</span>
          <span>{views}</span>
        </li>

        <li className={css.userInfo}>
          <span>Likes</span>
          <span>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

export default Profile;
