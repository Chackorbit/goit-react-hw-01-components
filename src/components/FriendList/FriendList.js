import s from './FriendList.module.css';
import propTypes from 'prop-types';

export default function FriendList({ friends }) {
  return (
    <ul className={s.friend_list}>
      {friends.map(friend => (
        <li className={s.item} key={friend.id}>
          <span
            className={s.status}
            style={{ backgroundColor: friend.isOnline ? '#0f0' : '#ff2400' }}
          >
            {friend.isOnline}
          </span>
          <img
            className={s.avatar}
            src={friend.avatar}
            alt="User avatar"
            width="48"
          />
          <p className={s.name}>{friend.name}</p>
        </li>
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: propTypes.node,
};
