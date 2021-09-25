import PropTypes from 'prop-types';

import styles from './Profile.module.css';

function Profile({ name, tag, location, avatar, stats }) {
    const { followers, views, likes } = stats;
    return (
        <div className={styles.container}>
            <div className={styles.description}>
                <img
                    src={avatar}
                    alt="Аватар пользователя"
                    className={styles.image}
                    width="96"
                />
                <p className={styles.name}>{name}</p>
                <p className={styles.tag}>{'@'+ tag}</p>
                <p className={styles.location}>{location}</p>
            </div>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <span className={styles.label}>Followers</span>
                    <span className={styles.stats}>{followers}</span>
                </li>
                <li className={styles.item}>
                    <span className={styles.label}>Views</span>
                    <span className={styles.stats}>{views}</span>
                </li>
                <li className={styles.item}>
                    <span className={styles.label}>Likes</span>
                    <span className={styles.stats}>{likes}</span>
                </li>
            </ul>
        </div>
    );
}

Profile.propTypes = {
    name: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
    stats: PropTypes.objectOf(PropTypes.number)
}
Profile.defaultProps = {
    avatar: 'http://www.pngall.com/wp-content/uploads/5/Profile-PNG-File.png'
}
export default Profile;