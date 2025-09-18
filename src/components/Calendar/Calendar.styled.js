import styled from "styled-components";

// Основные стили календаря
export const CalendarContainer = styled.div`
  width: 182px;
  margin-bottom: 20px;
  display: block;

  @media screen and (max-width: 660px) {
    max-width: 340px;
    width: 100%;
  }
`;

export const CalendarTitle = styled.div`
  margin-bottom: 14px;
  padding: 0 7px;

  p {
    font-family: ${(props) => props.theme.fonts.family};
    font-weight: ${(props) => props.theme.fonts.weight.semibold};
    font-style: normal;
    font-size: ${(props) => props.theme.fonts.size.normal};
    line-height: 100%;
    margin: 0;
  }

  @media screen and (max-width: 660px) {
    padding: 0;
  }
`;

export const CalendarParagraph = styled.p`
  color: ${(props) => props.theme.colors.textMuted};
  font-size: ${(props) => props.theme.fonts.size.small};
  line-height: 1;

  @media screen and (max-width: 660px) {
    font-size: ${(props) => props.theme.fonts.size.normal};
  }

  span {
    color: ${(props) => props.theme.colors.text};
  }
`;

export const CalendarBlock = styled.div`
  display: block;
`;

export const CalendarMonth = styled.div`
  color: ${(props) => props.theme.colors.textMuted};
  font-size: ${(props) => props.theme.fonts.size.normal};
  line-height: 25px;
  font-weight: ${(props) => props.theme.fonts.weight.semibold};
`;

export const CalendarContent = styled.div`
  margin-bottom: 12px;
`;

export const CalendarDaysNames = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  margin: 7px 0;
  padding: 0 7px;

  @media screen and (max-width: 660px) {
    padding: 0;
    justify-content: space-around;
  }
`;

export const CalendarDayName = styled.div`
  color: ${(props) => props.theme.colors.textMuted};
  font-size: ${(props) => props.theme.fonts.size.small};
  font-weight: ${(props) => props.theme.fonts.weight.medium};
  line-height: normal;
  letter-spacing: -0.2px;

  @media screen and (max-width: 660px) {
    font-size: ${(props) => props.theme.fonts.size.normal};
  }

  &.weekend {
    color: ${(props) => props.theme.colors.textMuted};
  }
`;

export const CalendarCells = styled.div`
  width: 182px;
  height: 126px;
  display: flex;
  flex-wrap: wrap;

  @media screen and (max-width: 660px) {
    width: 344px;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
`;

export const CalendarCell = styled.div`
  width: 22px;
  height: 22px;
  margin: 2px;
  border-radius: 50%;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.colors.textMuted};
  font-size: ${(props) => props.theme.fonts.size.small};
  line-height: 1;
  letter-spacing: -0.2px;
  cursor: default;
  background-color: transparent;
  font-weight: normal;

  @media screen and (max-width: 660px) {
    width: 42px;
    height: 42px;
    font-size: ${(props) => props.theme.fonts.size.normal};
  }

  &.other-month {
    opacity: 0;
  }

  &.cell-day {
    cursor: pointer;

    &:hover:not(.selected) {
      color: ${(props) => props.theme.colors.textMuted};
      background-color: ${(props) => props.theme.colors.calendarCellHover};
    }

    /* Для мобильных устройств - активное состояние при нажатии */
    &:active:not(.selected) {
      color: ${(props) => props.theme.colors.textMuted};
      background-color: ${(props) => props.theme.colors.calendarCellHover};
    }

    /* Дополнительно для touch-устройств */
    @media (hover: none) and (pointer: coarse) {
      &:active:not(.selected) {
        color: ${(props) => props.theme.colors.textMuted};
        background-color: ${(props) => props.theme.colors.calendarCellHover};
      }
    }
  }

  &.weekend {
    color: ${(props) => props.theme.colors.textMuted};
  }

  &.current {
    font-weight: 700;
  }

  &.selected {
    background-color: ${(props) => props.theme.colors.calendarActiveDay};
    color: ${(props) => props.theme.colors.calendarActiveDayText};
  }
`;

export const CalendarNav = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 14px;
  padding: 0 7px;

  @media screen and (max-width: 660px) {
    padding: 0;
  }
`;

export const CalendarPeriod = styled.div`
  padding: 0 7px;

  @media screen and (max-width: 660px) {
    padding: 0;
  }
`;

export const NavActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavAction = styled.div`
  width: 18px;
  height: 25px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    fill: ${(props) => props.theme.colors.textMuted};
  }
`;

// Модификаторы для календаря
