import React, { useEffect, useCallback, useContext, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
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
  const location = useLocation();
  const { logout } = useContext(AuthContext);
  const [isVisible, setIsVisible] = useState(false);

  // Показываем попап только если в URL есть якорь #popExit
  useEffect(() => {
    setIsVisible(location.hash === "#popExit");
  }, [location.hash]);

  const handleClose = useCallback(() => {
    navigate("/", { replace: true });
  }, [navigate]);

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
    if (!isVisible) return;

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
  }, [handleClose, isVisible]);

  if (!isVisible) return null;

  return (
    <Overlay className="pop-exit" id="popExit" onClick={handleClose}>
      <Container>
        <Block onClick={(e) => e.stopPropagation()}>
          <Title>Выйти из аккаунта?</Title>
          <Form id="formExit" action="#">
            <FormGroup>
              <ExitYes id="exitYes" type="button" onClick={handleExit}>
                Да, выйти
              </ExitYes>
              <ExitNo id="exitNo" type="button" onClick={handleStay}>
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
