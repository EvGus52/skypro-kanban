import React from "react";
import { Link } from "react-router-dom";
import { Colors } from "../../Colors";
import { useTheme } from "../../hooks/useTheme";
import {
  CardsItem,
  CardsCard,
  CardGroup,
  CardTheme,
  CardBtn,
  CardTitle,
  CardDescription,
  CardContent,
  CardDate,
} from "./Card.styled";

const Card = ({ card }) => {
  const { isDarkMode } = useTheme();

  const getTheme = (topic) => {
    switch (topic) {
      case "Web Design":
        return "orange";
      case "Research":
        return "green";
      case "Copywriting":
        return "purple";
      default:
        return "orange";
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear().toString().slice(-2);
    return `${day}.${month}.${year}`;
  };

  const theme = getTheme(card.topic);
  const themeColors = isDarkMode ? Colors.dark[theme] : Colors.light[theme];

  return (
    <CardsItem>
      <CardsCard>
        <CardGroup>
          <CardTheme
            style={{
              backgroundColor: themeColors.background,
              color: themeColors.color,
            }}
          >
            <p style={{ color: themeColors.color }}>{card.topic}</p>
          </CardTheme>
          <Link to={`/card/${card.id}/browse`}>
            <CardBtn>
              <div></div>
              <div></div>
              <div></div>
            </CardBtn>
          </Link>
        </CardGroup>
        <CardContent>
          <Link to={`/card/${card.id}`}>
            <CardTitle>{card.title}</CardTitle>
          </Link>
          {card.description && (
            <CardDescription>{card.description}</CardDescription>
          )}
          <CardDate>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="13"
              viewBox="0 0 13 13"
              fill="none"
            >
              <g clipPath="url(#clip0_1_415)">
                <path
                  d="M10.5625 2.03125H2.4375C1.7644 2.03125 1.21875 2.5769 1.21875 3.25V10.5625C1.21875 11.2356 1.7644 11.7812 2.4375 11.7812H10.5625C11.2356 11.7812 11.7812 11.2356 11.7812 10.5625V3.25C11.7812 2.5769 11.2356 2.03125 10.5625 2.03125Z"
                  stroke="#94A6BE"
                  strokeWidth="0.8"
                  strokeLinejoin="round"
                />
                <path
                  d="M11.7812 4.0625H1.21875M3.25 1.21875V2.03125V1.21875ZM9.75 1.21875V2.03125V1.21875Z"
                  stroke="#94A6BE"
                  strokeWidth="0.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_415">
                  <rect width="13" height="13" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <p>{formatDate(card.date)}</p>
          </CardDate>
        </CardContent>
      </CardsCard>
    </CardsItem>
  );
};

export default Card;
