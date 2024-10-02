import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./Result.module.css";

const Result = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const {dowryAmount } = location.state || {};

    const handleBackButton = (e) => {
      navigate('/');
    };
    
  return (
    <div className={styles.bodyy}>
      <div className={styles.card}>
        <h1>Dowry Calculator</h1>
        <p id={styles.sub}>How much dowry should you ask for?</p>
        <div className={styles.dowry_amount}>₹{dowryAmount ? dowryAmount.toLocaleString('en-IN') : 'N/A'}</div>
        <button className={styles.go_back} onClick={handleBackButton}>Go Back</button>
      </div>
    </div>
  );
};

export default Result;
