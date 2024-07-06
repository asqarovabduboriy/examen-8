import React from "react";
import Modal from "../../components/modal/Modal";
import getInputValue from "../../hook/getInputValue";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const instalstate = {
  login: "john32",
  password: "87654321",
};

const Login = () => {
  const { formdata, handlechange, setFormdata } = getInputValue(instalstate);

  const location = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formdata);

    if (formdata.login === "john32" && formdata.password === "87654321") {
       localStorage.setItem("login", true);
      location("/admin");
    }
  };

  return (
    <>
      <div className="container">
        <Modal>
          <form onSubmit={handleSubmit} className="form_login">
            <label> Логин </label>
            <input
              name="login"
              value={formdata.login}
              onChange={handlechange}
              type="text"
            />
            <label> Пароль </label>
            <input
              name="password"
              value={formdata.password}
              onChange={handlechange}
              type="password"
            />
            <button> Войти </button>
            <Link to={"/"}>
              {" "}
              <button> главная </button>
            </Link>
          </form>
        </Modal>
      </div>
    </>
  );
};

export default Login;
