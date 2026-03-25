import styles from "./promptPage.module.css";

const PromptPage = () => {
  return (
    <>
      <div className="container">
        <main className={styles.prompt}>
          <div className={styles.section}>
            <h3 className={styles.heading}>
              Рекомендуемые нейросети для решения задач ГИА по физике:
            </h3>
            <h4 className={styles.subheading}>Бесплатные:</h4>
            <ul className={styles.list}>
              <li className={styles.li}>
                <a href="https://giga.chat" target="_blank">
                  GigaChat
                </a>{" "}
                — объясняет решения шаг за шагом
              </li>
              <li className={styles.li}>
                <a href="https://chat.deepseek.com/">DeepSeek</a> — помогает с
                формулами
              </li>
              <li className={styles.li}>
                <a href="https://alice.yandex.ru/">YandexGPT</a> — быстрые
                ответы и теория
              </li>
            </ul>
            <h4 className={styles.subheading}>С ограничениями:</h4>
            <ul className={styles.list}>
              <li className={styles.li}>
                <a href="https://claude.ai">Claude</a> — глубокие разборы задач
              </li>
              <li className={styles.li}>
                <a href="https://www.perplexity.ai">Perplexity AI</a> — решения
                с источниками
              </li>
            </ul>
            <h4 className={styles.subheading}>Платные:</h4>
            <ul className={styles.list}>
              <li className={styles.li}>
                <a href="https://chatgpt.com">ChatGPT</a> — самые точные и
                подробные решения
              </li>
              <li className={styles.li}>
                <a href="https://claude.ai">Claude Pro</a> — сложные задачи и
                большие объяснения
              </li>
            </ul>
          </div>
          <div className={styles.section}>
            <h3 className={styles.heading}>
              Как написать правильный промпт для решения задачи по физике?
            </h3>
            <h4 className={styles.subheading}>
              Основные элементы хорошего промпта:
            </h4>
            <ol className={styles.list}>
              <li className={styles.li}>
                <strong>Роль для модели</strong>. Задайте нейросети роль
                эксперта — это повысит качество ответа. Например: «Выступи в
                роли преподавателя физики», «Ты — опытный репетитор по физике
                для старшеклассников».
              </li>
              <li className={styles.li}>
                <strong>Уровень сложности</strong>. Укажите, для кого задача:
                школьник (класс), студент, подготовка к ЕГЭ/ОГЭ, олимпиадный
                уровень и т.д.
              </li>
              <li className={styles.li}>
                <strong>Условие задачи</strong>. Приведите полный текст задачи
                без сокращений.
              </li>
              <li className={styles.li}>
                <strong>Формат ответа</strong>. Чётко опишите, что вы хотите
                получить:
                <ul>
                  <li className={styles.li}>только итоговый ответ;</li>
                  <li className={styles.li}>
                    пошаговое решение с объяснениями;
                  </li>
                  <li className={styles.li}>
                    анализ физического смысла результата;
                  </li>
                  <li className={styles.li}>проверку размерности;</li>
                  <li className={styles.li}>
                    схему/график/чертёж (опишите, что должно быть на нём);
                  </li>
                  <li className={styles.li}>альтернативные способы решения;</li>
                  <li className={styles.li}>
                    разбор типичных ошибок в таких задачах.
                  </li>
                </ul>
              </li>
              <li className={styles.li}>
                <strong>Особые требования</strong>. Добавьте дополнительные
                инструкции, если нужно:
                <ul>
                  <li className={styles.li}>
                    использовать конкретные законы/формулы;
                  </li>
                  <li className={styles.li}>
                    проверить решение предельными случаями;
                  </li>
                  <li className={styles.li}>
                    привести численный ответ с единицами измерения;
                  </li>
                  <li className={styles.li}>
                    оформить расчёты в виде таблицы и т.п.
                  </li>
                </ul>
              </li>
            </ol>
            <div>
              <h3 className={styles.heading}>Пример готового промпта:</h3>
              <p>
                <i>
                  Выступи в роли репетитора по физике для 9 класса. Условие
                  задачи: Тело массой 2 кг движется по горизонтальной
                  поверхности под действием силы 10 Н, направленной под углом
                  30∘ к горизонту. Коэффициент трения между телом и поверхностью
                  равен 0,3. Найди ускорение тела. g=10 м/с². Реши задачу
                  пошагово:
                </i>
              </p>
              <ol className={styles.list}>
                <li className={styles.li}>
                  Выпиши все известные величины и искомую величину с единицами
                  измерения.
                </li>
                <li className={styles.li}>
                  Нарисуй схематический чертёж, покажи все силы, действующие на
                  тело, и оси координат.
                </li>
                <li className={styles.li}>
                  Запиши второй закон Ньютона в векторной форме и в проекциях на
                  оси.
                </li>
                <li className={styles.li}>
                  Выведи формулу для ускорения в общем виде.
                </li>
                <li className={styles.li}>
                  Подставь числовые значения и выполни вычисления.
                </li>
                <li className={styles.li}>Проверь размерность результата.</li>
                <li className={styles.li}>
                  Проанализируй ответ: логичен ли он? Что изменится, если угол
                  будет 0∘ или 90∘? В конце напиши итоговый ответ с единицами
                  измерения.
                </li>
              </ol>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default PromptPage;
