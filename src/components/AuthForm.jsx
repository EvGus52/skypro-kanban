import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Wrapper,
  Container,
  Modal,
  ModalBlock,
  ModalTitle,
  ModalForm,
  ModalInput,
  PrimaryBtn,
  FormGroup,
} from "./AuthForm.styled";

const AuthForm = ({ isSignUp = false, setIsAuth }) => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (setIsAuth) {
      setIsAuth(true);
    }
    navigate("/", { replace: true });
  };

  return (
    <Wrapper>
      <Container>
        <Modal>
          <ModalBlock>
            <ModalTitle>
              <h2>{isSignUp ? "Регистрация" : "Вход"}</h2>
            </ModalTitle>
            <ModalForm action="#">
              {isSignUp && (
                <ModalInput
                  type="text"
                  name="first-name"
                  id="first-name"
                  placeholder="Имя"
                />
              )}
              <ModalInput
                type="text"
                name="login"
                id={isSignUp ? "loginReg" : "formlogin"}
                placeholder="Эл. почта"
              />
              <ModalInput
                type="password"
                name="password"
                id={isSignUp ? "passwordFirst" : "formpassword"}
                placeholder="Пароль"
              />
              <PrimaryBtn
                className="_hover01"
                type="button"
                onClick={isSignUp ? handleLogin : handleLogin}
              >
                {isSignUp ? "Зарегистрироваться" : "Войти"}
              </PrimaryBtn>
              <FormGroup>
                {isSignUp ? (
                  <p>
                    Уже есть аккаунт? <Link to="/sign-in">Войдите здесь</Link>
                  </p>
                ) : (
                  <>
                    <p>Нужно зарегистрироваться?</p>
                    <Link to="/sign-up">Регистрируйтесь здесь</Link>
                  </>
                )}
              </FormGroup>
            </ModalForm>
          </ModalBlock>
        </Modal>
      </Container>
    </Wrapper>
  );
};

export default AuthForm;
