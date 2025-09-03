import React from "react";
import { Wrapper, Card, Title, Text, LinkBtn } from "./NotFoundPage.styled";

const NotFoundPage = () => (
  <Wrapper>
    <Card>
      <Title>404 — Страница не найдена</Title>
      <Text>Похоже, вы перешли по неверной ссылке.</Text>
      <div>
        <LinkBtn className="_hover01" href="/">
          На главную
        </LinkBtn>
      </div>
    </Card>
  </Wrapper>
);

export default NotFoundPage;
