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
            <ul className={styles.li}>
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
                <a href="https://uchitel.pro/%d0%bf%d1%80%d1%8f%d0%bc%d0%be%d0%bb%d0%b8%d0%bd%d0%b5%d0%b9%d0%bd%d0%be%d0%b5-%d1%80%d0%b0%d0%b2%d0%bd%d0%be%d0%bc%d0%b5%d1%80%d0%bd%d0%be%d0%b5-%d0%b4%d0%b2%d0%b8%d0%b6%d0%b5%d0%bd%d0%b8%d0%b5/">
                  Прямолинейное равномерное движение
                </a>
              </li>
              <li className={styles.li}>
                <a href="https://uchitel.pro/%d0%bd%d0%b5%d1%80%d0%b0%d0%b2%d0%bd%d0%be%d0%bc%d0%b5%d1%80%d0%bd%d0%be%d0%b5-%d0%b4%d0%b2%d0%b8%d0%b6%d0%b5%d0%bd%d0%b8%d0%b5/">
                  Неравномерное движение. Средняя скорость
                </a>
              </li>
              <li className={styles.li}>
                <a href="https://uchitel.pro/%d0%bc%d0%b0%d1%81%d1%81%d0%b0-%d0%b8-%d0%bf%d0%bb%d0%be%d1%82%d0%bd%d0%be%d1%81%d1%82%d1%8c/">
                  Масса тела. Плотность вещества
                </a>
              </li>
              <li className={styles.li}>
                <a href="https://uchitel.pro/%d1%81%d0%b8%d0%bb%d1%8b-%d0%b2%d0%be%d0%ba%d1%80%d1%83%d0%b3-%d0%bd%d0%b0%d1%81/">
                  Силы вокруг нас (силы тяжести, трения, упругости)
                </a>
              </li>
              <li className={styles.li}>
                <a href="https://uchitel.pro/%d0%b4%d0%b0%d0%b2%d0%bb%d0%b5%d0%bd%d0%b8%d0%b5-%d1%82%d0%b5%d0%bb/">
                  Давление тел, жидкостей и газов
                </a>
              </li>
              <li className={styles.li}>
                <a href="https://uchitel.pro/%d0%b7%d0%b0%d0%ba%d0%be%d0%bd-%d0%b0%d1%80%d1%85%d0%b8%d0%bc%d0%b5%d0%b4%d0%b0/">
                  Закон Архимеда
                </a>
              </li>
              <li className={styles.li}>
                <a href="https://uchitel.pro/%d1%81%d0%be%d0%be%d0%b1%d1%89%d0%b0%d1%8e%d1%89%d0%b8%d0%b5%d1%81%d1%8f-%d1%81%d0%be%d1%81%d1%83%d0%b4%d1%8b/">
                  Сообщающиеся сосуды. Шлюзы
                </a>
              </li>
              <li className={styles.li}>
                <a href="https://uchitel.pro/%d1%80%d0%b0%d0%b1%d0%be%d1%82%d0%b0-%d0%b8-%d1%8d%d0%bd%d0%b5%d1%80%d0%b3%d0%b8%d1%8f/">
                  Механическая работа, мощность и КПД
                </a>
              </li>
              <li className={styles.li}>
                <a href="https://uchitel.pro/%d0%bf%d1%80%d0%be%d1%81%d1%82%d1%8b%d0%b5-%d0%bc%d0%b5%d1%85%d0%b0%d0%bd%d0%b8%d0%b7%d0%bc%d1%8b-%d0%b1%d0%bb%d0%be%d0%ba%d0%b8/">
                  Простые механизмы. Блоки
                </a>
              </li>
              <li className={styles.li}>
                <a href="https://uchitel.pro/%d1%80%d1%8b%d1%87%d0%b0%d0%b3/">
                  Рычаг. Равновесие рычага. Момент силы
                </a>
              </li>
              <li className={styles.li}>
                <a href="https://uchitel.pro/%d0%bc%d0%b5%d1%85%d0%b0%d0%bd%d0%b8%d1%87%d0%b5%d1%81%d0%ba%d0%b0%d1%8f-%d1%8d%d0%bd%d0%b5%d1%80%d0%b3%d0%b8%d1%8f-%d0%b7%d0%b0%d0%ba%d0%be%d0%bd-%d1%81%d0%be%d1%85%d1%80%d0%b0%d0%bd%d0%b5%d0%bd/">
                  Механическая энергия. Закон сохранения энергии
                </a>
              </li>
              <li className={styles.li}>
                <a href="https://uchitel.pro/%d1%84%d0%b8%d0%b7%d0%b8%d0%ba%d0%b0-7-%d0%b2%d1%81%d0%b5-%d1%84%d0%be%d1%80%d0%bc%d1%83%d0%bb%d1%8b/">
                  Физика 7: все формулы и определения
                </a>
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
                <a href="https://uchitel.pro/%d0%b2%d0%b2%d0%b5%d0%b4%d0%b5%d0%bd%d0%b8%d0%b5-%d0%b2-%d0%be%d0%bf%d1%82%d0%b8%d0%ba%d1%83/">
                  Введение в оптику
                </a>
              </li>
              <li className={styles.li}>
                <a href="https://uchitel.pro/%d1%82%d0%b5%d0%bf%d0%bb%d0%be%d0%b2%d0%be%d0%b5-%d0%b4%d0%b2%d0%b8%d0%b6%d0%b5%d0%bd%d0%b8%d0%b5/">
                  Тепловое движение. Броуновское движение
                </a>
              </li>
              <li className={styles.li}>
                <a href="https://uchitel.pro/%d0%b4%d0%b8%d1%84%d1%84%d1%83%d0%b7%d0%b8%d1%8f/">
                  Диффузия. Взаимодействие молекул
                </a>
              </li>
              <li className={styles.li}>
                <a href="https://uchitel.pro/%d1%82%d0%b5%d0%bf%d0%bb%d0%be%d0%b2%d0%be%d0%b5-%d1%80%d0%b0%d0%b2%d0%bd%d0%be%d0%b2%d0%b5%d1%81%d0%b8%d0%b5/">
                  Тепловое равновесие. Температура. Шкала Цельсия
                </a>
              </li>
              <li className={styles.li}>
                <a href="https://uchitel.pro/%d0%b2%d0%bd%d1%83%d1%82%d1%80%d0%b5%d0%bd%d0%bd%d1%8f%d1%8f-%d1%8d%d0%bd%d0%b5%d1%80%d0%b3%d0%b8%d1%8f/">
                  Внутренняя энергия
                </a>
              </li>
              <li className={styles.li}>
                <a href="https://uchitel.pro/%d0%b2%d0%b8%d0%b4%d1%8b-%d1%82%d0%b5%d0%bf%d0%bb%d0%be%d0%bf%d0%b5%d1%80%d0%b5%d0%b4%d0%b0%d1%87%d0%b8/">
                  Виды теплопередачи: теплопроводность, конвекция, излучение
                </a>
              </li>
              <li className={styles.li}>
                <a href="https://uchitel.pro/%d0%ba%d0%be%d0%bb%d0%b8%d1%87%d0%b5%d1%81%d1%82%d0%b2%d0%be-%d1%82%d0%b5%d0%bf%d0%bb%d0%be%d1%82%d1%8b/">
                  Количество теплоты. Удельная теплоёмкость
                </a>
              </li>
              <li className={styles.li}>
                <a href="https://uchitel.pro/%d1%83%d1%80%d0%b0%d0%b2%d0%bd%d0%b5%d0%bd%d0%b8%d0%b5-%d1%82%d0%b5%d0%bf%d0%bb%d0%be%d0%b2%d0%be%d0%b3%d0%be-%d0%b1%d0%b0%d0%bb%d0%b0%d0%bd%d1%81%d0%b0/">
                  Уравнение теплового баланса
                </a>
              </li>
              <li className={styles.li}>
                <a href="https://uchitel.pro/%d0%b8%d1%81%d0%bf%d0%b0%d1%80%d0%b5%d0%bd%d0%b8%d0%b5/">
                  Испарение. Конденсация
                </a>
              </li>
              <li className={styles.li}>
                <a href="https://uchitel.pro/%d0%ba%d0%b8%d0%bf%d0%b5%d0%bd%d0%b8%d0%b5/">
                  Кипение. Удельная теплота парообразования
                </a>
              </li>
              <li className={styles.li}>
                <a href="https://uchitel.pro/%d0%b2%d0%bb%d0%b0%d0%b6%d0%bd%d0%be%d1%81%d1%82%d1%8c-%d0%b2%d0%be%d0%b7%d0%b4%d1%83%d1%85%d0%b0/">
                  Влажность воздуха
                </a>
              </li>
              <li className={styles.li}>
                <a href="https://uchitel.pro/%d0%bf%d0%bb%d0%b0%d0%b2%d0%bb%d0%b5%d0%bd%d0%b8%d0%b5-%d0%b8-%d0%ba%d1%80%d0%b8%d1%81%d1%82%d0%b0%d0%bb%d0%bb%d0%b8%d0%b7%d0%b0%d1%86%d0%b8%d1%8f/">
                  Плавление и кристаллизация
                </a>
              </li>
              <li className={styles.li}>
                <a href="https://uchitel.pro/%d1%82%d0%b5%d0%bf%d0%bb%d0%be%d0%b2%d1%8b%d0%b5-%d0%bc%d0%b0%d1%88%d0%b8%d0%bd%d1%8b/">
                  Тепловые машины. ДВС. Удельная теплота сгорания топлива
                </a>
              </li>
              <li className={styles.li}>
                <a href="https://uchitel.pro/%d1%8d%d0%bb%d0%b5%d0%ba%d1%82%d1%80%d0%b8%d0%b7%d0%b0%d1%86%d0%b8%d1%8f-%d1%82%d0%b5%d0%bb/">
                  Электризация тел
                </a>
              </li>
              <li className={styles.li}>
                <a href="https://uchitel.pro/%d0%b4%d0%b2%d0%b0-%d0%b2%d0%b8%d0%b4%d0%b0-%d1%8d%d0%bb%d0%b5%d0%ba%d1%82%d1%80%d0%b8%d1%87%d0%b5%d1%81%d0%ba%d0%b8%d1%85-%d0%b7%d0%b0%d1%80%d1%8f%d0%b4%d0%be%d0%b2/">
                  Два вида электрических зарядов. Взаимодействие зарядов
                </a>
              </li>
              <li className={styles.li}>
                <a href="https://uchitel.pro/%d0%b7%d0%b0%d0%ba%d0%be%d0%bd-%d1%81%d0%be%d1%85%d1%80%d0%b0%d0%bd%d0%b5%d0%bd%d0%b8%d1%8f-%d0%b7%d0%b0%d1%80%d1%8f%d0%b4%d0%b0/">
                  Закон сохранения электрического заряда
                </a>
              </li>
              <li className={styles.li}>
                <a href="https://uchitel.pro/%d1%8d%d0%bb%d0%b5%d0%ba%d1%82%d1%80%d0%b8%d1%87%d0%b5%d1%81%d0%ba%d0%be%d0%b5-%d0%bf%d0%be%d0%bb%d0%b5/">
                  Электрическое поле. Проводники и диэлектрики
                </a>
              </li>
              <li className={styles.li}>
                <a href="https://uchitel.pro/%d0%bf%d0%be%d1%81%d1%82%d0%be%d1%8f%d0%bd%d0%bd%d1%8b%d0%b9-%d1%8d%d0%bb%d0%b5%d0%ba%d1%82%d1%80%d0%b8%d1%87%d0%b5%d1%81%d0%ba%d0%b8%d0%b9-%d1%82%d0%be%d0%ba/">
                  Постоянный электрический ток
                </a>
              </li>
              <li className={styles.li}>
                <a href="https://uchitel.pro/%d1%81%d0%b8%d0%bb%d0%b0-%d1%82%d0%be%d0%ba%d0%b0-%d0%bd%d0%b0%d0%bf%d1%80%d1%8f%d0%b6%d0%b5%d0%bd%d0%b8%d0%b5/">
                  Сила тока. Напряжение
                </a>
              </li>
              <li className={styles.li}>
                <a href="https://uchitel.pro/%d1%8d%d0%bb%d0%b5%d0%ba%d1%82%d1%80%d0%b8%d1%87%d0%b5%d1%81%d0%ba%d0%be%d0%b5-%d1%81%d0%be%d0%bf%d1%80%d0%be%d1%82%d0%b8%d0%b2%d0%bb%d0%b5%d0%bd%d0%b8%d0%b5/">
                  Электрическое сопротивление
                </a>
              </li>
              <li className={styles.li}>
                <a href="https://uchitel.pro/%d0%b7%d0%b0%d0%ba%d0%be%d0%bd-%d0%be%d0%bc%d0%b0-%d1%81%d0%be%d0%b5%d0%b4%d0%b8%d0%bd%d0%b5%d0%bd%d0%b8%d0%b5-%d0%bf%d1%80%d0%be%d0%b2%d0%be%d0%b4%d0%bd%d0%b8%d0%ba%d0%be%d0%b2/">
                  Закон Ома. Соединение проводников
                </a>
              </li>
              <li className={styles.li}>
                <a href="https://uchitel.pro/%d1%80%d0%b0%d0%b1%d0%be%d1%82%d0%b0-%d0%b8-%d0%bc%d0%be%d1%89%d0%bd%d0%be%d1%81%d1%82%d1%8c-%d1%82%d0%be%d0%ba%d0%b0/">
                  Работа и мощность электрического тока
                </a>
              </li>
              <li className={styles.li}>
                <a href="https://uchitel.pro/%d0%b7%d0%b0%d0%ba%d0%be%d0%bd-%d0%b4%d0%b6%d0%be%d1%83%d0%bb%d1%8f-%d0%bb%d0%b5%d0%bd%d1%86%d0%b0/">
                  Закон Джоуля-Ленца и его применение
                </a>
              </li>
              <li className={styles.li}>
                <a href="https://uchitel.pro/%d1%8d%d0%bb%d0%b5%d0%ba%d1%82%d1%80%d0%be%d0%bc%d0%b0%d0%b3%d0%bd%d0%b8%d1%82%d0%bd%d1%8b%d0%b5-%d1%8f%d0%b2%d0%bb%d0%b5%d0%bd%d0%b8%d1%8f/">
                  Электромагнитные явления
                </a>
              </li>
              <li className={styles.li}>
                <a href="https://uchitel.pro/%d0%ba%d0%be%d0%bb%d0%b5%d0%b1%d0%b0%d1%82%d0%b5%d0%bb%d1%8c%d0%bd%d1%8b%d0%b5-%d0%b8-%d0%b2%d0%be%d0%bb%d0%bd%d0%be%d0%b2%d1%8b%d0%b5-%d1%8f%d0%b2%d0%bb%d0%b5%d0%bd%d0%b8%d1%8f/">
                  Колебательные и волновые явления
                </a>
              </li>
              <li className={styles.li}>
                <a href="https://uchitel.pro/%d1%84%d0%b8%d0%b7%d0%b8%d0%ba%d0%b0-8-%d0%b2%d1%81%d0%b5-%d1%84%d0%be%d1%80%d0%bc%d1%83%d0%bb%d1%8b/">
                  Физика 8: все формулы и определения
                </a>
              </li>
              <li className={styles.li}>
                <a href="https://uchitel.pro/%d0%be%d0%bf%d1%8b%d1%82%d1%8b-%d1%8d%d1%80%d1%81%d1%82%d0%b5%d0%b4%d0%b0-%d0%bc%d0%b0%d0%b3%d0%bd%d0%b8%d1%82%d0%bd%d0%be%d0%b5-%d0%bf%d0%be%d0%bb%d0%b5-%d1%8d%d0%bb%d0%b5%d0%ba%d1%82%d1%80%d0%be/">
                  Опыты Эрстеда. Магнитное поле. Электромагнит
                </a>
              </li>
              <li className={styles.li}>
                <a href="https://uchitel.pro/%d0%bc%d0%b0%d0%b3%d0%bd%d0%b8%d1%82%d0%bd%d0%be%d0%b5-%d0%bf%d0%be%d0%bb%d0%b5-%d0%bf%d0%be%d1%81%d1%82%d0%be%d1%8f%d0%bd%d0%bd%d0%be%d0%b3%d0%be-%d0%bc%d0%b0%d0%b3%d0%bd%d0%b8%d1%82%d0%b0/">
                  Магнитное поле постоянного магнита
                </a>
              </li>
              <li className={styles.li}>
                <a href="https://uchitel.pro/%d0%b4%d0%b5%d0%b9%d1%81%d1%82%d0%b2%d0%b8%d0%b5-%d0%bc%d0%b0%d0%b3%d0%bd%d0%b8%d1%82%d0%bd%d0%be%d0%b3%d0%be-%d0%bf%d0%be%d0%bb%d1%8f/">
                  Действие магнитного поля на проводник с током
                </a>
              </li>
              <li className={styles.li}>
                <a href="https://uchitel.pro/%d0%be%d0%bf%d1%8b%d1%82%d1%8b-%d1%84%d0%b0%d1%80%d0%b0%d0%b4%d0%b5%d1%8f/">
                  Электромагнитная индукция. Опыты Фарадея
                </a>
              </li>
              <li className={styles.li}>
                <a href="https://uchitel.pro/%d1%8f%d0%b2%d0%bb%d0%b5%d0%bd%d0%b8%d1%8f-%d1%80%d0%b0%d1%81%d0%bf%d1%80%d0%be%d1%81%d1%82%d1%80%d0%b0%d0%bd%d0%b5%d0%bd%d0%b8%d1%8f-%d1%81%d0%b2%d0%b5%d1%82%d0%b0/">
                  Явления распространения света
                </a>
              </li>
              <li className={styles.li}>
                <a href="https://uchitel.pro/%d0%b4%d0%b8%d1%81%d0%bf%d0%b5%d1%80%d1%81%d0%b8%d1%8f-%d1%81%d0%b2%d0%b5%d1%82%d0%b0-%d0%bb%d0%b8%d0%bd%d0%b7%d0%b0/">
                  Дисперсия света. Линза
                </a>
              </li>
              <li className={styles.li}>
                <a href="https://uchitel.pro/%d0%be%d0%bf%d1%82%d0%b8%d1%87%d0%b5%d1%81%d0%ba%d0%b8%d0%b5-%d0%bf%d1%80%d0%b8%d0%b1%d0%be%d1%80%d1%8b/">
                  Оптические приборы
                </a>
              </li>
              <li className={styles.li}>
                <a href="https://uchitel.pro/%d1%8d%d0%bb%d0%b5%d0%ba%d1%82%d1%80%d0%be%d0%bc%d0%b0%d0%b3%d0%bd%d0%b8%d1%82%d0%bd%d1%8b%d0%b5-%d0%ba%d0%be%d0%bb%d0%b5%d0%b1%d0%b0%d0%bd%d0%b8%d1%8f-%d0%b8-%d0%b2%d0%be%d0%bb%d0%bd%d1%8b/">
                  Электромагнитные колебания и волны
                </a>
              </li>
            </ul>
          </div>
        </main>
      </div>
    </>
  );
};

export default NotesPage;
