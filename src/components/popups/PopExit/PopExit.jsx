import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Overlay,
  Container,
  Block,
  Title,
  Form,
  FormGroup,
  ExitYes,
  ExitNo,
} from "./PopExit.styled";

const PopExit = ({ setIsAuth }) => {
  const navigate = useNavigate();

  const handleExit = (e) => {
    e.preventDefault();

    if (window.location.hash) {
      window.location.hash = "";
    }
    if (setIsAuth) setIsAuth(false);
    navigate("/sign-in", { replace: true });
  };

  const handleStay = (e) => {
    e.preventDefault();

    if (window.location.hash) {
      window.location.hash = "";
    }
  };

  return (
    <Overlay className="pop-exit" id="popExit">
      <Container className="pop-exit__container">
        <Block className="pop-exit__block">
          <Title className="pop-exit__ttl">Выйти из аккаунта?</Title>
          <Form className="pop-exit__form" id="formExit" action="#">
            <FormGroup className="pop-exit__form-group">
              <ExitYes
                className="_hover01"
                id="exitYes"
                type="button"
                onClick={handleExit}
              >
                Да, выйти
              </ExitYes>
              <ExitNo
                className="_hover03"
                id="exitNo"
                type="button"
                onClick={handleStay}
              >
                Нет, остаться
              </ExitNo>
            </FormGroup>
          </Form>
        </Block>
      </Container>
    </Overlay>
  );
};

export default PopExit;
