import React, { useState } from "react";

const Calendar = ({ selectedDate, onDateSelect, isEditing = true }) => {
  const [currentDate] = useState(new Date());
  const [displayDate, setDisplayDate] = useState(new Date());

  // Функция для форматирования даты в формат "30.10.23"
  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear().toString().slice(-2);
    return `${day}.${month}.${year}`;
  };

  // Названия месяцев на русском
  const monthNames = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
  ];

  // Навигация по месяцам
  const goToPreviousMonth = () => {
    setDisplayDate(
      (prev) => new Date(prev.getFullYear(), prev.getMonth() - 1, 1)
    );
  };

  const goToNextMonth = () => {
    setDisplayDate(
      (prev) => new Date(prev.getFullYear(), prev.getMonth() + 1, 1)
    );
  };

  // Генерация календарной сетки
  const generateCalendarDays = () => {
    const year = displayDate.getFullYear();
    const month = displayDate.getMonth();

    // Первый день месяца и количество дней в месяце
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();

    // День недели первого дня (0 = воскресенье, 1 = понедельник, ...)
    const firstDayOfWeek = firstDay.getDay();
    const adjustedFirstDay = firstDayOfWeek === 0 ? 6 : firstDayOfWeek - 1; // Преобразуем воскресенье в 6

    // Дни предыдущего месяца
    const prevMonth = new Date(year, month - 1, 0);
    const daysInPrevMonth = prevMonth.getDate();

    const days = [];

    // Добавляем дни предыдущего месяца
    for (let i = adjustedFirstDay - 1; i >= 0; i--) {
      const day = daysInPrevMonth - i;
      days.push({
        day,
        isCurrentMonth: false,
        isToday: false,
        isSelected: false,
        isWeekend: false,
      });
    }

    // Добавляем дни текущего месяца
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);
      const isToday = date.toDateString() === currentDate.toDateString();
      const isWeekend = date.getDay() === 0 || date.getDay() === 6;
      const isSelected =
        selectedDate &&
        date.toDateString() === new Date(selectedDate).toDateString();

      days.push({
        day,
        isCurrentMonth: true,
        isToday,
        isSelected,
        isWeekend,
        date,
      });
    }

    // Добавляем дни следующего месяца до заполнения сетки (42 дня = 6 недель)
    const remainingDays = 42 - days.length;
    for (let day = 1; day <= remainingDays; day++) {
      days.push({
        day,
        isCurrentMonth: false,
        isToday: false,
        isSelected: false,
        isWeekend: false,
      });
    }

    return days;
  };

  const handleDateClick = (dayData) => {
    if (!isEditing || !dayData.isCurrentMonth) return;

    const { day } = dayData;
    const newDate = new Date(
      displayDate.getFullYear(),
      displayDate.getMonth(),
      day
    );
    onDateSelect(newDate);
  };

  const days = generateCalendarDays();

  return (
    <div className="pop-new-card__calendar calendar">
      <p className="calendar__ttl subttl">Даты</p>
      <div className="calendar__block">
        <div className="calendar__nav">
          <div className="calendar__month">
            {monthNames[displayDate.getMonth()]} {displayDate.getFullYear()}
          </div>
          <div className="nav__actions">
            <div
              className="nav__action"
              data-action="prev"
              onClick={goToPreviousMonth}
              style={{ cursor: "pointer" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="6"
                height="11"
                viewBox="0 0 6 11"
              >
                <path d="M5.72945 1.95273C6.09018 1.62041 6.09018 1.0833 5.72945 0.750969C5.36622 0.416344 4.7754 0.416344 4.41218 0.750969L0.528487 4.32883C-0.176162 4.97799 -0.176162 6.02201 0.528487 6.67117L4.41217 10.249C4.7754 10.5837 5.36622 10.5837 5.72945 10.249C6.09018 9.9167 6.09018 9.37959 5.72945 9.04727L1.87897 5.5L5.72945 1.95273Z" />
              </svg>
            </div>
            <div
              className="nav__action"
              data-action="next"
              onClick={goToNextMonth}
              style={{ cursor: "pointer" }}
            >
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
            {days.map((dayData, index) => (
              <div
                key={index}
                className={`calendar__cell ${
                  dayData.isCurrentMonth ? "_cell-day" : "_other-month"
                } ${dayData.isWeekend ? "_weekend" : ""} ${
                  dayData.isToday ? "_current" : ""
                } ${dayData.isSelected ? "calendar__cell--selected" : ""}`}
                onClick={() => handleDateClick(dayData)}
                style={{
                  cursor:
                    isEditing && dayData.isCurrentMonth ? "pointer" : "default",
                  backgroundColor: dayData.isSelected
                    ? "#94A6BE"
                    : "transparent",
                  color: dayData.isSelected ? "white" : "inherit",
                  fontWeight: dayData.isToday ? "bold" : "normal",
                }}
              >
                {dayData.day}
              </div>
            ))}
          </div>
        </div>

        <input
          type="hidden"
          id="datepick_value"
          value={selectedDate ? formatDate(selectedDate) : ""}
        />
        <div className="calendar__period">
          <p className="calendar__p date-end">
            {isEditing ? "Выберите срок исполнения" : "Срок исполнения"}{" "}
            <span className="date-control">
              {selectedDate ? formatDate(selectedDate) : "Выберите дату"}
            </span>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
