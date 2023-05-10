import Header from "../Header/Header";
import { useState } from "react";
import * as Auth from "../../Auth";
import { Link, useNavigate } from "react-router-dom";

export default function Login({
  handleLogin,
  setUserEmail = { setUserEmail },
}) {
  const [formValue, setFormValue] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormValue({
      ...formValue,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Auth.authorize(formValue.email, formValue.password)
      .then((data) => {
        if (data.token) {
          setUserEmail(formValue.email);
          setFormValue({ email: "", password: "" });
          handleLogin();
          navigate("/", { replace: true });
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <Header link_path="/sign-up" link_action="Регистрация" isMain={false} />
      <div className="login__wrapper">
        <h2 className="login__action">Вход</h2>
        <form className="login__form" onSubmit={handleSubmit}>
          <input
            required
            name="email"
            type="email"
            className="login__input"
            placeholder="Email"
            onChange={handleChange}
          ></input>
          <input
            required
            name="password"
            type="password"
            className="login__input"
            placeholder="Пароль"
            onChange={handleChange}
          ></input>
          <button type="submit" className="login__submit">
            Войти
          </button>
        </form>
      </div>
    </>
  );
}
