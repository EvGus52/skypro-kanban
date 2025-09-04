import React, { useEffect, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Colors } from "../../../Colors";
import { cardsList } from "../../../../data";

const PopBrowse = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Находим карточку по ID
  const cardData = cardsList.find((card) => card.id === parseInt(id));

  // Функция для получения цвета темы
  const getThemeColor = (topic) => {
    switch (topic) {
      case "Web Design":
        return Colors.orange;
      case "Research":
        return Colors.green;
      case "Copywriting":
        return Colors.purple;
      default:
        return Colors.gray;
    }
  };

  // Функция для получения цвета статуса
  const getStatusColor = (status) => {
    switch (status) {
      case "Без статуса":
        return Colors.gray;
      case "Нужно сделать":
        return Colors.gray;
      case "В работе":
        return Colors.gray;
      case "Тестирование":
        return Colors.gray;
      case "Готово":
        return Colors.gray;
      default:
        return Colors.gray;
    }
  };

  const themeColor = cardData ? getThemeColor(cardData.topic) : Colors.orange;
  const statusColor = cardData ? getStatusColor(cardData.status) : Colors.gray;

  const handleClose = useCallback(() => {
    navigate("/");
  }, [navigate]);

  // Обработка клавиши Escape и блокировка прокрутки
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        handleClose();
      }
    };

    // Блокируем прокрутку страницы когда модальное окно открыто
    document.body.style.overflow = "hidden";

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      // Восстанавливаем прокрутку при закрытии модального окна
      document.body.style.overflow = "unset";
    };
  }, [handleClose]);

  return (
    <div className="pop-browse" id="popBrowse">
      <div className="pop-browse__container" onClick={handleClose}>
        <div className="pop-browse__block" onClick={(e) => e.stopPropagation()}>
          <div className="pop-browse__content">
            <div className="pop-browse__top-block">
              <h3 className="pop-browse__ttl">
                {cardData?.title || "Название задачи"}
              </h3>
              <div
                className="categories__theme theme-top _active-category"
                style={{
                  backgroundColor: themeColor.background,
                  color: themeColor.color,
                }}
              >
                <p style={{ color: themeColor.color }}>
                  {cardData?.topic || "Web Design"}
                </p>
              </div>
            </div>
            <div className="pop-browse__status status">
              <p className="status__p subttl">Статус</p>
              <div className="status__themes">
                <div
                  className={`status__theme ${
                    cardData?.status === "Без статуса" ? "" : "_hide"
                  }`}
                  style={
                    cardData?.status === "Без статуса"
                      ? {
                          backgroundColor: statusColor.background,
                          color: statusColor.color,
                        }
                      : {}
                  }
                >
                  <p
                    style={
                      cardData?.status === "Без статуса"
                        ? { color: statusColor.color }
                        : {}
                    }
                  >
                    Без статуса
                  </p>
                </div>
                <div
                  className={`status__theme ${
                    cardData?.status === "Нужно сделать" ? "" : "_hide"
                  }`}
                  style={
                    cardData?.status === "Нужно сделать"
                      ? {
                          backgroundColor: statusColor.background,
                          color: statusColor.color,
                        }
                      : {}
                  }
                >
                  <p
                    style={
                      cardData?.status === "Нужно сделать"
                        ? { color: statusColor.color }
                        : {}
                    }
                  >
                    Нужно сделать
                  </p>
                </div>
                <div
                  className={`status__theme ${
                    cardData?.status === "В работе" ? "" : "_hide"
                  }`}
                  style={
                    cardData?.status === "В работе"
                      ? {
                          backgroundColor: statusColor.background,
                          color: statusColor.color,
                        }
                      : {}
                  }
                >
                  <p
                    style={
                      cardData?.status === "В работе"
                        ? { color: statusColor.color }
                        : {}
                    }
                  >
                    В работе
                  </p>
                </div>
                <div
                  className={`status__theme ${
                    cardData?.status === "Тестирование" ? "" : "_hide"
                  }`}
                  style={
                    cardData?.status === "Тестирование"
                      ? {
                          backgroundColor: statusColor.background,
                          color: statusColor.color,
                        }
                      : {}
                  }
                >
                  <p
                    style={
                      cardData?.status === "Тестирование"
                        ? { color: statusColor.color }
                        : {}
                    }
                  >
                    Тестирование
                  </p>
                </div>
                <div
                  className={`status__theme ${
                    cardData?.status === "Готово" ? "" : "_hide"
                  }`}
                  style={
                    cardData?.status === "Готово"
                      ? {
                          backgroundColor: statusColor.background,
                          color: statusColor.color,
                        }
                      : {}
                  }
                >
                  <p
                    style={
                      cardData?.status === "Готово"
                        ? { color: statusColor.color }
                        : {}
                    }
                  >
                    Готово
                  </p>
                </div>
              </div>
            </div>
            <div className="pop-browse__wrap">
              <form
                className="pop-browse__form form-browse"
                id="formBrowseCard"
                action="#"
              >
                <div className="form-browse__block">
                  <label htmlFor="textArea01" className="subttl">
                    Описание задачи
                  </label>
                  <textarea
                    className="form-browse__area"
                    name="text"
                    id="textArea01"
                    readOnly
                    placeholder="Введите описание задачи..."
                  ></textarea>
                </div>
              </form>
              <div className="pop-new-card__calendar calendar">
                <p className="calendar__ttl subttl">Даты</p>
                <div className="calendar__block">
                  <div className="calendar__nav">
                    <div className="calendar__month">Сентябрь 2023</div>
                    <div className="nav__actions">
                      <div className="nav__action" data-action="prev">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="6"
                          height="11"
                          viewBox="0 0 6 11"
                        >
                          <path d="M5.72945 1.95273C6.09018 1.62041 6.09018 1.0833 5.72945 0.750969C5.36622 0.416344 4.7754 0.416344 4.41218 0.750969L0.528487 4.32883C-0.176162 4.97799 -0.176162 6.02201 0.528487 6.67117L4.41217 10.249C4.7754 10.5837 5.36622 10.5837 5.72945 10.249C6.09018 9.9167 6.09018 9.37959 5.72945 9.04727L1.87897 5.5L5.72945 1.95273Z" />
                        </svg>
                      </div>
                      <div className="nav__action" data-action="next">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="6"
                          height="11"
                          viewBox="0 0 6 11"
                        >
                          <path d="M0.27055 9.04727C-0.0901833 9.37959 -0.0901832 9.9167 0.27055 10.249C0.633779 10.5837 1.2246 10.5837 1.58783 10.249L5.47151 6.67117C6.17616 6.02201 6.17616 4.97799 5.47151 4.32883L1.58782 0.75097C1.2246 0.416344 0.633778 0.416344 0.270549 0.75097C-0.0901831 1.0833 -0.090184 1.62041 0.270549 1.95273L4.12103 5.5L0.27055 9.04727Z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="calendar__content">
                    <div className="calendar__days-names">
                      <div className="calendar__day-name">пн</div>
                      <div className="calendar__day-name">вт</div>
                      <div className="calendar__day-name">ср</div>
                      <div className="calendar__day-name">чт</div>
                      <div className="calendar__day-name">пт</div>
                      <div className="calendar__day-name -weekend-">сб</div>
                      <div className="calendar__day-name -weekend-">вс</div>
                    </div>
                    <div className="calendar__cells">
                      <div className="calendar__cell _other-month">28</div>
                      <div className="calendar__cell _other-month">29</div>
                      <div className="calendar__cell _other-month">30</div>
                      <div className="calendar__cell _cell-day">31</div>
                      <div className="calendar__cell _cell-day">1</div>
                      <div className="calendar__cell _cell-day _weekend">2</div>
                      <div className="calendar__cell _cell-day _weekend">3</div>
                      <div className="calendar__cell _cell-day">4</div>
                      <div className="calendar__cell _cell-day">5</div>
                      <div className="calendar__cell _cell-day ">6</div>
                      <div className="calendar__cell _cell-day">7</div>
                      <div className="calendar__cell _cell-day _current">8</div>
                      <div className="calendar__cell _cell-day _weekend _active-day">
                        9
                      </div>
                      <div className="calendar__cell _cell-day _weekend">
                        10
                      </div>
                      <div className="calendar__cell _cell-day">11</div>
                      <div className="calendar__cell _cell-day">12</div>
                      <div className="calendar__cell _cell-day">13</div>
                      <div className="calendar__cell _cell-day">14</div>
                      <div className="calendar__cell _cell-day">15</div>
                      <div className="calendar__cell _cell-day _weekend">
                        16
                      </div>
                      <div className="calendar__cell _cell-day _weekend">
                        17
                      </div>
                      <div className="calendar__cell _cell-day">18</div>
                      <div className="calendar__cell _cell-day">19</div>
                      <div className="calendar__cell _cell-day">20</div>
                      <div className="calendar__cell _cell-day">21</div>
                      <div className="calendar__cell _cell-day">22</div>
                      <div className="calendar__cell _cell-day _weekend">
                        23
                      </div>
                      <div className="calendar__cell _cell-day _weekend">
                        24
                      </div>
                      <div className="calendar__cell _cell-day">25</div>
                      <div className="calendar__cell _cell-day">26</div>
                      <div className="calendar__cell _cell-day">27</div>
                      <div className="calendar__cell _cell-day">28</div>
                      <div className="calendar__cell _cell-day">29</div>
                      <div className="calendar__cell _cell-day _weekend">
                        30
                      </div>
                      <div className="calendar__cell _other-month _weekend">
                        1
                      </div>
                    </div>
                  </div>

                  <input
                    type="hidden"
                    id="datepick_value"
                    value={cardData?.date || "08.09.2023"}
                  />
                  <div className="calendar__period">
                    <p className="calendar__p date-end">
                      Срок исполнения:{" "}
                      <span className="date-control">
                        {cardData?.date || "09.09.23"}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="theme-down__categories theme-down">
              <p className="categories__p subttl">Категория</p>
              <div
                className="categories__theme _active-category"
                style={{
                  backgroundColor: themeColor.background,
                  color: themeColor.color,
                }}
              >
                <p style={{ color: themeColor.color }}>
                  {cardData?.topic || "Web Design"}
                </p>
              </div>
            </div>
            <div className="pop-browse__btn-browse ">
              <div className="btn-group">
                <button className="btn-browse__edit _btn-bor _hover03">
                  <a href="#">Редактировать задачу</a>
                </button>
                <button className="btn-browse__delete _btn-bor _hover03">
                  <a href="#">Удалить задачу</a>
                </button>
              </div>
              <button
                className="btn-browse__close _btn-bg _hover01"
                onClick={handleClose}
              >
                <a href="#" onClick={(e) => e.preventDefault()}>
                  Закрыть
                </a>
              </button>
            </div>
            <div className="pop-browse__btn-edit _hide">
              <div className="btn-group">
                <button className="btn-edit__edit _btn-bg _hover01">
                  <a href="#">Сохранить</a>
                </button>
                <button className="btn-edit__edit _btn-bor _hover03">
                  <a href="#">Отменить</a>
                </button>
                <button
                  className="btn-edit__delete _btn-bor _hover03"
                  id="btnDelete"
                >
                  <a href="#">Удалить задачу</a>
                </button>
              </div>
              <button
                className="btn-edit__close _btn-bg _hover01"
                onClick={handleClose}
              >
                <a href="#" onClick={(e) => e.preventDefault()}>
                  Закрыть
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopBrowse;
