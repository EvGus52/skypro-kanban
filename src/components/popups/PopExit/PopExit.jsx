import React, { useEffect, useCallback, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
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

const PopExit = () => {
  const navigate = useNavigate();
  const { logout } = useContext(AuthContext);

  const handleClose = useCallback(() => {
    window.location.href = window.location.origin + "/";
  }, []);

  const handleExit = (e) => {
    e.preventDefault();
    logout();
    localStorage.removeItem("token");
    navigate("/sign-in", { replace: true });
  };

  const handleStay = (e) => {
    e.preventDefault();
    handleClose();
  };

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
    <Overlay className="pop-exit" id="popExit" onClick={handleClose}>
      <Container className="pop-exit__container">
        <Block className="pop-exit__block" onClick={(e) => e.stopPropagation()}>
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
