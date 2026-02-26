import { Link } from "react-router";
import styles from "./notesPage.module.css";

const NotesPage = () => {
  return (
    <>
      <div className="container">
        <main className={styles.notes}>
          <div className={styles.section}>
            <h3 className={styles.heading}>
              Часть 1. Физические методы. Строение вещества. Движение и
              взаимодействие тел. Силы вокруг нас. Давление тел. Работа,
              мощность, энергия.
            </h3>
            <ul className={styles.list}>
              <li className={styles.li}>
                <Link to="/notes/1">Физические величины</Link>
              </li>
              <li className={styles.li}>
                <Link to="/notes/2">Строение вещества</Link>
              </li>
              <li className={styles.li}>
                <Link to="/notes/3">Механическое движение. Траектория</Link>
              </li>
              <li className={styles.li}>
                <Link to="/notes/4">Прямолинейное равномерное движение</Link>
              </li>
              <li className={styles.li}>
                <Link to="/notes/5">
                  Неравномерное движение. Средняя скорость
                </Link>
              </li>
              <li className={styles.li}>
                <Link to="/notes/">Масса тела. Плотность вещества</Link>
              </li>
              <li className={styles.li}>
                <Link to="/notes/">
                  Силы вокруг нас (силы тяжести, трения, упругости)
                </Link>
              </li>
              <li className={styles.li}>
                <Link to="/notes/">Давление тел, жидкостей и газов</Link>
              </li>
              <li className={styles.li}>
                <Link to="/notes/">Закон Архимеда</Link>
              </li>
              <li className={styles.li}>
                <Link to="/notes/">Сообщающиеся сосуды. Шлюзы</Link>
              </li>
              <li className={styles.li}>
                <Link to="/notes/">Механическая работа, мощность и КПД</Link>
              </li>
              <li className={styles.li}>
                <Link to="/notes/">Простые механизмы. Блоки</Link>
              </li>
              <li className={styles.li}>
                <Link to="/notes/">Рычаг. Равновесие рычага. Момент силы</Link>
              </li>
              <li className={styles.li}>
                <Link to="/notes/">
                  Механическая энергия. Закон сохранения энергии
                </Link>
              </li>
              <li className={styles.li}>
                <Link to="/notes/">Физика 7: все формулы и определения</Link>
              </li>
            </ul>
          </div>
          <div className={styles.section}>
            <h3 className={styles.heading}>
              Часть 2. Тепловые явления. Электрические явления. Электромагнитные
              явления. Световые явления.
            </h3>

            <ul className={styles.list}>
              <li className={styles.li}>
                <Link to="/notes/">Введение в оптику</Link>
              </li>
              <li className={styles.li}>
                <Link to="/notes/">
                  Тепловое движение. Броуновское движение
                </Link>
              </li>
              <li className={styles.li}>
                <Link to="/notes/">Диффузия. Взаимодействие молекул</Link>
              </li>
              <li className={styles.li}>
                <Link to="/notes/">
                  Тепловое равновесие. Температура. Шкала Цельсия
                </Link>
              </li>
              <li className={styles.li}>
                <Link to="/notes/">Внутренняя энергия</Link>
              </li>
              <li className={styles.li}>
                <Link to="/notes/">
                  Виды теплопередачи: теплопроводность, конвекция, излучение
                </Link>
              </li>
              <li className={styles.li}>
                <Link to="/notes/">
                  Количество теплоты. Удельная теплоёмкость
                </Link>
              </li>
              <li className={styles.li}>
                <Link to="/notes/">Уравнение теплового баланса</Link>
              </li>
              <li className={styles.li}>
                <Link to="/notes/">Испарение. Конденсация</Link>
              </li>
              <li className={styles.li}>
                <Link to="/notes/">
                  Кипение. Удельная теплота парообразования
                </Link>
              </li>
              <li className={styles.li}>
                <Link to="/notes/">Влажность воздуха</Link>
              </li>
              <li className={styles.li}>
                <Link to="/notes/">Плавление и кристаллизация</Link>
              </li>
              <li className={styles.li}>
                <Link to="/notes/">
                  Тепловые машины. ДВС. Удельная теплота сгорания топлива
                </Link>
              </li>
              <li className={styles.li}>
                <Link to="/notes/">Электризация тел</Link>
              </li>
              <li className={styles.li}>
                <Link to="/notes/">
                  Два вида электрических зарядов. Взаимодействие зарядов
                </Link>
              </li>
              <li className={styles.li}>
                <Link to="/notes/">Закон сохранения электрического заряда</Link>
              </li>
              <li className={styles.li}>
                <Link to="/notes/">
                  Электрическое поле. Проводники и диэлектрики
                </Link>
              </li>
              <li className={styles.li}>
                <Link to="/notes/">Постоянный электрический ток</Link>
              </li>
              <li className={styles.li}>
                <Link to="/notes/">Сила тока. Напряжение</Link>
              </li>
              <li className={styles.li}>
                <Link to="/notes/">Электрическое сопротивление</Link>
              </li>
              <li className={styles.li}>
                <Link to="/notes/">Закон Ома. Соединение проводников</Link>
              </li>
              <li className={styles.li}>
                <Link to="/notes/">Работа и мощность электрического тока</Link>
              </li>
              <li className={styles.li}>
                <Link to="/notes/">Закон Джоуля-Ленца и его применение</Link>
              </li>
              <li className={styles.li}>
                <Link to="/notes/">Электромагнитные явления</Link>
              </li>
              <li className={styles.li}>
                <Link to="/notes/">Колебательные и волновые явления</Link>
              </li>
              <li className={styles.li}>
                <Link to="/notes/">Физика 8: все формулы и определения</Link>
              </li>
              <li className={styles.li}>
                <Link to="/notes/">
                  Опыты Эрстеда. Магнитное поле. Электромагнит
                </Link>
              </li>
              <li className={styles.li}>
                <Link to="/notes/">Магнитное поле постоянного магнита</Link>
              </li>
              <li className={styles.li}>
                <Link to="/notes/">
                  Действие магнитного поля на проводник с током
                </Link>
              </li>
              <li className={styles.li}>
                <Link to="/notes/">
                  Электромагнитная индукция. Опыты Фарадея
                </Link>
              </li>
              <li className={styles.li}>
                <Link to="/notes/">Явления распространения света</Link>
              </li>
              <li className={styles.li}>
                <Link to="/notes/">Дисперсия света. Линза</Link>
              </li>
              <li className={styles.li}>
                <Link to="/notes/">Оптические приборы</Link>
              </li>
              <li className={styles.li}>
                <Link to="/notes/">Электромагнитные колебания и волны</Link>
              </li>
            </ul>
          </div>
        </main>
      </div>
    </>
  );
};

export default NotesPage;
