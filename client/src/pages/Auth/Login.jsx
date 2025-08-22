import React from "react";
import AuthServices from "../../services/authServices.js";
import {Link, useNavigate } from "react-router-dom";
import  styles from "./Login.module.css"
import login from "../../assets/login.png";
import {Button, Input, message} from "antd";
import { getErrorMessage } from "../../utils/GetError.js";

function Login() {
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [loading, setLoading] = React.useState(false);
    const navigate = useNavigate();

    const handleSubmit = async () => {
        try{
            setLoading(true);
            let data ={
                username,
                password
            }
            const response = await AuthServices.loginUser(data);
            console.log(response.data);
            localStorage.setItem("token", response.data.token);
            navigate("/to-do-list");
        }catch (error) {
            console.log(error);
            message.error(getErrorMessage(error));
        }finally {
            setLoading(false);
        }
    }
  return (
    <div>
      <div className={styles.login__card}>
        <img src={login} alt="Login" />
        <h2>Login</h2>
        <div className={styles.input__wrapper}>
          <Input placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className={styles.input__wrapper}>
          <Input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className={styles.input__info}>
          <div className={styles.register__link}>
            New user? <Link to="/register">Register</Link>
          </div>
          <div>
            <Button loading={loading} type="primary" size="large" disabled={!username || !password} onClick={handleSubmit}>Login</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
