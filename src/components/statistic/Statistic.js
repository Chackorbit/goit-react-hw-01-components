import s from './Statistic.module.css';
import propTypes from 'prop-types';
import randomColor from 'utils/randomColor';

export default function Statistic({ title, items }) {
  return (
    <section className={s.statistics}>
      <div className={s.containertitle}>
        {title && <h2 className={s.title}>{title}</h2>}
      </div>
      <ul className={s.statList}>
        {items.map(item => (
          <li
            className={s.item}
            key={item.id}
            style={{ backgroundColor: randomColor() }}
          >
            <div className={s.statItem}>
              <span className={s.label}>{item.label} </span>
              <span className={s.percentage}>{item.percentage}%</span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistic.propTypes = {
  title: propTypes.string,
  items: propTypes.array,
};
