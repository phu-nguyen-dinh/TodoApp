import React, {useEffect, useState} from "react";
import Navbar from "../../components/Navbar";
import { Link } from 'react-router-dom'
import landing from '../../assets/landing.png';
import styles from "./Landing.module.css";

function Landing() {
    const [user, setUser] = useState(null);
    useEffect(() => {
        const userDetails = JSON.parse(localStorage.getItem('toDoAppUser'));
        setUser(userDetails);
    }, []);
  return (
    <div>
       <Navbar active={"home"}/>
        <div className={styles.landing__wrapper}>
            <div className={styles.landing__text}>
                <h1>Schedule Your Daily Tasks With <span className="primaryText">DoDo!</span></h1>
            {user ? <> <Link to="/to-do-list" className="primaryBtn">Go to My Tasks</Link> </> : <>
            <div className='btnWrapper'>
              <Link to="/register" className="primaryBtn">Register</Link>
              <Link to="/login" className='secondaryBtn'>Login</Link>
              </div>
            </>}
            </div>
            <div className={styles.landing__img}>
                <img src={landing} alt="landing" />
            </div>
      </div>
    </div>
  );
}

export default Landing;
