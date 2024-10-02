import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import styles from "./DowryCalculator.module.css";

const DowryCalculator = () => {
  const [formData, setFormData] = useState({
    age: "",
    profession: "",
    salary: "",
    education: "",
    land: "",
    maritalStatus: "",
    homeOwnership: "",
    carOwnership: "",
    location: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };


  const calculateDowry = () => {
    let agePoint;
    let professionPoint;
    let salaryPoint;
    let educationPoint;
    let landPoint;
    let maritalStatusPoint;
    let homeOwnershipPoint;
    let carOwnershipPoint;
    let locationPoint;

    if(formData.age==='21-25') agePoint=8;
    else if(formData.age==='26-30') agePoint=6;
    else if(formData.age==='31-35') agePoint=4;
    else if(formData.age==='36-40') agePoint=2;
    else if(formData.age==='41-60') agePoint=1;

    if(formData.profession==="Doctor") professionPoint=7;
    else if(formData.profession==="Engineer") professionPoint=6;
    else if(formData.profession==="GovtJob") professionPoint=7;
    else if(formData.profession==="Business") professionPoint=5;
    else if(formData.profession==="Other") professionPoint=5;

    if(formData.salary>=0 && formData.salary<=20000) salaryPoint=1;
    else if(formData.salary>=20001 && formData.salary<=40000) salaryPoint=4;
    else if(formData.salary>=40001 && formData.salary<=60000) salaryPoint=5;
    else if(formData.salary>=60001 && formData.salary<=100000) salaryPoint=6;
    else if(formData.salary>=100001) salaryPoint=8;

    if(formData.education==="10th") educationPoint=1;
    else if(formData.education==="12th") educationPoint=6;
    else if(formData.education==="Bachelor") educationPoint=6;
    else if(formData.education==="PostGraduate") educationPoint=8;
    else if(formData.education==="Ph.D") educationPoint=8;

    if(formData.land==="0") landPoint=0;
    else if(formData.land==="0-9") landPoint=2;
    else if(formData.land==="10-19") landPoint=4;
    else if(formData.land==="20-49") landPoint=6;
    else if(formData.land==="50-99") landPoint=7;
    else if(formData.land==="100+") landPoint=8;

    if(formData.maritalStatus==="Single") maritalStatusPoint=7;
    else if(formData.maritalStatus==="Divorced") maritalStatusPoint=2;

    if(formData.homeOwnership==="Owned") homeOwnershipPoint = 8;
    else if(formData.homeOwnership==="Rented") homeOwnershipPoint = 3;

    if(formData.carOwnership==="Yes") carOwnershipPoint = 7;
    else if(formData.carOwnership==="No") carOwnershipPoint = 5;

    if(formData.location==="India - Urban") locationPoint=8;
    else if(formData.location==="India - Rural") locationPoint=4;
    else if(formData.location==="Outside India") locationPoint=8;

    let totalPoints = agePoint + professionPoint + salaryPoint + educationPoint + landPoint + maritalStatusPoint + homeOwnershipPoint + carOwnershipPoint + locationPoint;

    let ans;
    if(totalPoints>=0 && totalPoints<30) ans = 500000;
    else if(totalPoints>=30 && totalPoints<40) ans = 700000;
    else if(totalPoints>=40 && totalPoints<50) ans = 1000000;
    else if(totalPoints>=50 && totalPoints<60) ans = 2000000;
    else if(totalPoints>=60 && totalPoints<70) ans = 3000000;
    else if(totalPoints>=70 && totalPoints<80) ans = 3500000;
    else ans = 4000000;
    console.log(ans)
    return ans;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const dowryAmount = calculateDowry();
    navigate('/result', { state: {formData, dowryAmount } });
    console.log(formData);
  };

  return (
    <div className={styles.dowry_calculator}>
      <h1>Dowry Calculator</h1>
      <p id="subheading">How much dowry should you ask for?</p>

      <form onSubmit={handleSubmit}>
        <div className={styles.form_group}>
          <label htmlFor="age">Age</label>
          <select
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          >
            <option value="">Select your age</option>
            <option value="21-25">21-25</option>
            <option value="26-30">26-30</option>
            <option value="31-35">31-35</option>
            <option value="36-40">36-40</option>
            <option value="41-60">41-60</option>
          </select>
        </div>

        <div className={styles.form_group}>
          <label htmlFor="profession">Profession</label>
          <select
            id="profession"
            name="profession"
            value={formData.profession}
            onChange={handleChange}
            required
          >
            <option value="">Select your profession</option>
            <option value="Doctor">Doctor</option>
            <option value="Engineer">Engineer</option>
            <option value="GovtJob">Govt Job</option>
            <option value="Business">Business</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className={styles.form_group}>
          <label htmlFor="salary">Monthly Salary</label>
          <input
            type="text"
            id="salary"
            name="salary"
            value={formData.salary}
            onChange={handleChange}
            placeholder="Enter your monthly salary"
            required
          />
        </div>

        <div className={styles.form_group}>
          <label htmlFor="education">Education Level</label>
          <select
            id="education"
            name="education"
            value={formData.education}
            onChange={handleChange}
            required
          >
            <option value="">Select your education level</option>
            <option value="10th">10th</option>
            <option value="12th">12th</option>
            <option value="Bachelor">Bachelor's Degree</option>
            <option value="PostGraduate">PostGraduate Degree</option>
            <option value="Ph.D">Ph.D</option>
          </select>
        </div>

        <div className={styles.form_group}>
          <label htmlFor="land">Land Ownership</label>
          <select
            id="land"
            name="land"
            value={formData.land}
            onChange={handleChange}
            required
          >
            <option value="">Select your land ownership</option>
            <option value="0">0 Beegha</option>
            <option value="0-9">0-9 Beegha</option>
            <option value="10-19">10-19 Beegha</option>
            <option value="20-49">20-49 Beegha</option>
            <option value="50-99">50-99 Beegha</option>
            <option value="100+">100+ Beegha</option>
          </select>
        </div>

        <div className={styles.form_group}>
          <p>Marital Status</p>
          <div className={styles.radio_group}>
            <input
              type="radio"
              id="single"
              name="maritalStatus"
              value="Single"
              checked={formData.maritalStatus === "Single"}
              onChange={handleChange}
              required
            />
            <label htmlFor="single">Single</label>
            <input
              type="radio"
              id="divorced"
              name="maritalStatus"
              value="Divorced"
              checked={formData.maritalStatus === "Divorced"}
              onChange={handleChange}
            />
            <label htmlFor="divorced">Divorced</label>
          </div>
        </div>

        <div className={styles.form_group}>
          <p>Home Ownership</p>
          <div className={styles.radio_group}>
            <input
              type="radio"
              id="owned"
              name="homeOwnership"
              value="Owned"
              checked={formData.homeOwnership === "Owned"}
              onChange={handleChange}
              required
            />
            <label htmlFor="owned">Owned</label>
            <input
              type="radio"
              id="rented"
              name="homeOwnership"
              value="Rented"
              checked={formData.homeOwnership === "Rented"}
              onChange={handleChange}
            />
            <label htmlFor="rented">Rented</label>
          </div>
        </div>

        <div className={styles.form_group}>
          <p>Car Ownership</p>
          <div className={styles.radio_group} >
            <input
              type="radio"
              id="yesCar"
              name="carOwnership"
              value="Yes"
              checked={formData.carOwnership === "Yes"}
              onChange={handleChange}
              required
            />
            <label htmlFor="yesCar">Yes</label>
            <input
              type="radio"
              id="noCar"
              name="carOwnership"
              value="No"
              checked={formData.carOwnership === "No"}
              onChange={handleChange}
            />
            <label htmlFor="noCar">No</label>
          </div>
        </div>

        <div className={styles.form_group}>
          <p>Location</p>
          <div className={styles.radio_group}>
            <input
              type="radio"
              id="urban"
              name="location"
              value="India - Urban"
              checked={formData.location === "India - Urban"}
              onChange={handleChange}
              required
            />
            <label htmlFor="urban">Urban</label>
            <input
              type="radio"
              id="rural"
              name="location"
              value="India - Rural"
              checked={formData.location === "India - Rural"}
              onChange={handleChange}
            />
            <label htmlFor="rural">Rural</label>
            <input
              type="radio"
              id="outside"
              name="location"
              value="Outside India"
              checked={formData.location === "Outside India"}
              onChange={handleChange}
            />
            <label htmlFor="outside">Foreign</label>
          </div>
        </div>

        <button type="submit" className={styles.submit_btn}>
          Calculate Dowry
        </button>
      </form>
    </div>
  );
};

export default DowryCalculator;
