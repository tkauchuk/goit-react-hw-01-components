import PropTypes from 'prop-types';

import styles from './Stats.module.css';

function Stats({ title, stats, palette }) {
    return (
        <section className={styles.section}>
            {title && <h2 className={styles.title}>{title}</h2>}
            <ul className={styles.list}>
                {
                    stats.map((item, index) => {
                        return (
                            <li
                                className={styles.listItem}
                                key={item.id}
                                style={{ background: palette[index] ? palette[index].color : '#7dc4a8'}}>
                                <span className={styles.label}>{item.label}</span>
                                <span className={styles.percentage}>{item.percentage +'%'}</span>
                            </li>
                        )
                    })
                }
            </ul>
        </section>
    );
}

Stats.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string,
        percentage: PropTypes.number
    })),
    palette: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string))
};

export default Stats;

