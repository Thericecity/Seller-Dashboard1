import React, { useState } from "react";
import styles from "./Form.module.css";
const Form = () => {
  const [email, setEmail] = useState("");
  const [err, setErr] = useState("");
  const [pass, setPass] = useState();
  const handleForm = (e) => {
    e.preventDefault();

    if (email === "") {
      setErr("Email can't be empty");
    }
  };
  return (
    <>
      <div className={styles.mainf}>
        <form className={styles.logincontain} onSubmit={handleForm}>
          <div className={styles.headdiv}>
            <h2>Product Form</h2>

            <div className={styles.namehead}></div>

            <div className={styles.name}>
              <p>Product Name</p>

              <input type="name" placeholder="Enter your  productname" />
            </div>

            <div className={styles.name}>
              <p>Category</p>

              <input type="name" placeholder="Enter your  category" />
            </div>

            <div className={styles.name}>
              <p>Description</p>

              <input type="name" placeholder="Enter your  description" />
            </div>

            <div className={styles.name}>
              <p>Price</p>

              <input type="name" placeholder="Enter your  price" />
            </div>

            <div className={styles.image}>
              <p>Image</p>
              <input type="text" placeholder="Enter Image URL" />
              <button className={styles.imgbtn}>Upload</button>
            </div>

            <div className={styles.name}>
              <p>Brand</p>

              <input type="name" placeholder="Enter your  brand" />
            </div>
            <div className={styles.name}>
              <p>Saller</p>

              <input type="name" placeholder="Enter your  saller" />
            </div>
            <div className={styles.name}>
              <p>Features</p>

              <input type="name" placeholder="Enter your  features" />
            </div>

            <div></div>

            <div className={styles.submit}>
              <input type="submit" />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;
