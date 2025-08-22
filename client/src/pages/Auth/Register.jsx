import React from 'react';
import styles from './Login.module.css';
import login from '../../assets/login.png';
import { Button, Input, message } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import AuthServices from '../../services/authServices.js';
import { getErrorMessage } from '../../utils/GetError.js';

function Register() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const data = {
        firstName,
        lastName,
        username,
        password
      }
      const response = await AuthServices.registerUser(data);
      console.log(response.data);
      message.success("Registration successful! Please login.");
      navigate("/login");
    } catch (error) {
      console.log(error);
      message.error(getErrorMessage(error));
    }
    finally {
      setLoading(false);
    }
  }
  return (
    <div>
      <div className={styles.login__card}>
        <img src={login} alt="Login" />
        <h2>Register</h2>
        <div className={styles.input__inline__wrapper}>
          <Input placeholder="First Name" type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
          <Input placeholder="Last Name" type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </div>
        <div className={styles.input__wrapper}>
          <Input placeholder="Username" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className={styles.input__wrapper}>
          <Input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className={styles.input__info}>
          <div className={styles.register__link}>
            Already have an account? <Link to="/login">Login</Link>
          </div>
        </div>
        <Button type="primary" size='large' disabled={!username || !password} onClick={handleSubmit}>Register</Button>
    </div>
    </div>
  );
}

export default Register;
