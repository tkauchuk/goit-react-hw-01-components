import PropTypes from 'prop-types';

import styles from './Friends.module.css'

function Friends({ friends }) {
    return (
        <ul className={styles.list}>
            {
                friends.map(({ avatar, name, isOnline, id }) => {
                    return (
                        <li className={styles.item} key={id}>
                            <span className={isOnline ? styles.online : styles.offline}></span>
                            <img className="" src={avatar} alt={name} width="48"/>
                            <p className="">{name}</p>
                        </li>
                    );
                })
            }
        </ul>
    );
}

Friends.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        avatar: PropTypes.string,
        name: PropTypes.string,
        isOnline: PropTypes.bool,
        id: PropTypes.number
    }))
}

export default Friends;