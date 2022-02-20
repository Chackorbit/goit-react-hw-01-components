import s from './Statistic.module.css';

function randomColor() {
  let r =
    '#' +
    (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase() +
    '80';
  return r;
}

export default function Statistic({ title, items }) {
  return (
    <section className={s.statistics}>
      <div className={s.containertitle}>
        <h2 className={s.title}>{title}</h2>
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
