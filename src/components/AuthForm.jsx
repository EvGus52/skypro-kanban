import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Wrapper,
  Container,
  Modal,
  ModalBlock,
  ModalTitle,
  ModalForm,
  PrimaryBtn,
  FormGroup,
} from "./AuthForm.styled";
import { signIn, signUp } from "../services/Auth.js";
import BaseInput from "./BaseInput/BaseInput";
import { AuthContext } from "../context/AuthContext";

const AuthForm = ({ isSignUp }) => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  // состояние полей
  const [formData, setFormData] = useState({
    name: "",
    login: "",
    password: "",
  });

  // состояние ошибок
  const [errors, setErrors] = useState({
    name: "",
    login: "",
    password: "",
  });

  // состояние текста ошибки, чтобы показать её пользователю
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // функция валидации
  const validateForm = () => {
    const newErrors = { name: "", login: "", password: "" };
    let isValid = true;

    if (isSignUp && !formData.name.trim()) {
      newErrors.name = "Имя обязательно";
      setError("Заполните все поля");
      isValid = false;
    }

    if (!formData.login.trim()) {
      newErrors.login = "Эл. почта обязательна";
      setError("Заполните все поля");
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.login)) {
      newErrors.login = "Введите корректный email";
      setError("Введите корректный email");
      isValid = false;
    }

    if (!formData.password.trim()) {
      newErrors.password = "Пароль обязателен";
      setError("Заполните все поля");
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  // функция, которая отслеживает в полях изменения
  // и меняет состояние компонента
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({ ...errors, [name]: "" });
    setError("");
  };

  // функция отправки формы
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      // если у нас форма не прошла валидацию, то дальше не продолжаем
      return;
    }

    setLoading(true);
    setError("");

    try {
      // чтобы не писать две разных функции, выберем нужный запрос через
      // тернарный оператор
      const data = !isSignUp
        ? await signIn({ login: formData.login, password: formData.password })
        : await signUp(formData);

      if (data) {
        // Сохраняем токен в localStorage
        localStorage.setItem("token", data.token);
        // Обновляем данные пользователя в контексте
        login(data);
        // Переходим на главную страницу
        navigate("/");
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Wrapper>
      <Container>
        <Modal>
          <ModalBlock>
            <ModalTitle>
              <h2>{isSignUp ? "Регистрация" : "Вход"}</h2>
            </ModalTitle>
            <ModalForm onSubmit={handleSubmit}>
              {error && (
                <div
                  style={{
                    color: "#FF6B6B",
                    marginBottom: "10px",
                    textAlign: "center",
                  }}
                >
                  {error}
                </div>
              )}
              {isSignUp && (
                <div>
                  <BaseInput
                    type="text"
                    name="name"
                    id="first-name"
                    placeholder="Имя"
                    value={formData.name}
                    onChange={handleChange}
                    error={!!errors.name}
                  />
                  {errors.name && (
                    <div
                      style={{
                        color: "#FF6B6B",
                        fontSize: "12px",
                        marginTop: "4px",
                      }}
                    >
                      {errors.name}
                    </div>
                  )}
                </div>
              )}
              <div>
                <BaseInput
                  type="email"
                  name="login"
                  id={isSignUp ? "loginReg" : "formlogin"}
                  placeholder="Эл. почта"
                  value={formData.login}
                  onChange={handleChange}
                  error={!!errors.login}
                />
                {errors.login && (
                  <div
                    style={{
                      color: "#FF6B6B",
                      fontSize: "12px",
                      marginTop: "4px",
                    }}
                  >
                    {errors.login}
                  </div>
                )}
              </div>
              <div>
                <BaseInput
                  type="password"
                  name="password"
                  id={isSignUp ? "passwordFirst" : "formpassword"}
                  placeholder="Пароль"
                  value={formData.password}
                  onChange={handleChange}
                  error={!!errors.password}
                />
                {errors.password && (
                  <div
                    style={{
                      color: "#FF6B6B",
                      fontSize: "12px",
                      marginTop: "4px",
                    }}
                  >
                    {errors.password}
                  </div>
                )}
              </div>
              <PrimaryBtn className="_hover01" type="submit" disabled={loading}>
                {loading
                  ? "Загрузка..."
                  : isSignUp
                  ? "Зарегистрироваться"
                  : "Войти"}
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
