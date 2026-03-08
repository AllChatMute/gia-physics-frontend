import styles from "./tasksPage.module.css";
import { Link } from "react-router";

const TasksPage = () => {
  return (
    <>
      <div className="container">
        <main className={styles.tasks}>
          <div className={styles.section}>
            <h3 className={styles.heading}>
              Часть 1. Физические методы. Строение вещества. Движение и
              взаимодействие тел. Силы вокруг нас. Давление тел. Работа,
              мощность, энергия. Задачи
            </h3>
            <ul className={styles.list}>
              <li className={styles.li}>
                <Link to="/tasks/1">Строение вещества</Link>
              </li>
              <li className={styles.li}>
                <Link to="/tasks/2">Механическое движение. Траектория</Link>
              </li>
              <li className={styles.li}>
                <Link to="/tasks/3">Прямолинейное равномерное движение</Link>
              </li>
              <li className={styles.li}>
                <Link to="/tasks/4">
                  Неравномерное движение. Средняя скорость
                </Link>
              </li>
              <li className={styles.li}>
                <Link to="/tasks/">Масса тела. Плотность вещества</Link>
              </li>
              <li className={styles.li}>
                <Link to="/tasks/">
                  Силы вокруг нас (силы тяжести, трения, упругости)
                </Link>
              </li>
              <li className={styles.li}>
                <Link to="/tasks/">Давление тел, жидкостей и газов</Link>
              </li>
              <li className={styles.li}>
                <Link to="/tasks/">Закон Архимеда</Link>
              </li>
              <li className={styles.li}>
                <Link to="/tasks/">Сообщающиеся сосуды. Шлюзы</Link>
              </li>
              <li className={styles.li}>
                <Link to="/tasks/">Механическая работа, мощность и КПД</Link>
              </li>
              <li className={styles.li}>
                <Link to="/tasks/">Простые механизмы. Блоки</Link>
              </li>
              <li className={styles.li}>
                <Link to="/tasks/">Рычаг. Равновесие рычага. Момент силы</Link>
              </li>
              <li className={styles.li}>
                <Link to="/tasks/">
                  Механическая энергия. Закон сохранения энергии
                </Link>
              </li>
              <li className={styles.li}>
                <Link to="/tasks/">Физика 7: все формулы и определения</Link>
              </li>
            </ul>
          </div>
        </main>
      </div>
    </>
  );
};

export default TasksPage;
