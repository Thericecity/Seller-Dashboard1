import React, { useEffect } from "react";
import axios from 'axios'
import styles from "./Form.module.css";
const Form = () => {
  const handleForm = (e) => {
    e.preventDefault();

let obj={
  productName:e.target[0].value,
  category:e.target[1].value,
  description:e.target[2].value,
  price:Number(e.target[3].value),
  image:e.target[4].value,
  brand:e.target[5].value,
  saller:e.target[6].value,
  stockQuantity:Number(e.target[7].value),
  manufacturer:e.target[8].value,
  features:e.target[9].value
  
  
}
getApi(obj)

console.log(obj)


  };

  const getApi=(payload)=>{
    axios.post("http://localhost:7000/product/create",payload)
    .then((res)=>{
      console.log(res)
    })
  }
  

  
  return (
    <>
      <div className={styles.mainf}>
        <form className={styles.logincontain} onSubmit={handleForm}>
          <div className={styles.headdiv}>
          <div>
          <h2>Product Form</h2>

          </div>

            <div className={styles.namehead}></div>

            <div className={styles.name}>
              <p>Product Name</p>

              <input type="text" name="productName" placeholder="Enter your  productname"  />
            </div>

            <div className={styles.name}>
              <p>Category</p>

              <input type="text"  name="category" placeholder="Enter your  category" />
            </div>

            <div className={styles.name}>
              <p>Description</p>

              <input type="text"  name="description" placeholder="Enter your  description" />
            </div>

            <div className={styles.name}>
              <p>Price</p>

              <input type="text"  name="price" placeholder="Enter your  price" />
            </div>

            <div className={styles.image}>
              <p>Image</p>
              <input type="url" name="image" placeholder="Enter Image URL" />
            </div>

            <div className={styles.name}>
              <p>Brand</p>

              <input type="text"  name="brand" placeholder="Enter your  brand" />
            </div>
            <div className={styles.name}>
              <p>Saller</p>

              <input type="text"  name="saller" placeholder="Enter your  saller" />
            </div>


            <div className={styles.name}>
              <p>    stockQuantity</p>

              <input type="number" name="stockQuantity" placeholder="Enter your  features" />
            </div>

            <div className={styles.name}>
              <p>Manufacturer</p>

              <input type="text"  name="manufacturer" placeholder="Enter your  features" />
            </div>
            <div className={styles.name}>
              <p>Features</p>

              <input type="text"  name="features" placeholder="Enter your  features" />
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
