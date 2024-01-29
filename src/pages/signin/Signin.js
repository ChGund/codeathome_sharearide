import { useState } from "react";
import HomeImage from "./HomeImage.jpg";

import styles from './Signin.module.css'

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    //backend needs to modify this to handle authentication:
    console.log(email, password);
  };

  return (
    <div>
      {/* displays the heading in the middle of the ride side of the page: */}
      <div className={styles["heading-spacer"]}>          
        <div className={styles["empty-left-side"]}></div>
        <div className={styles["right-side"]}>
        <h2>Connecting the countryside</h2>
        <h3>Create an account</h3>
        </div>  
      </div>
      <div className={styles["signin-page"]}>
        <div className={styles["image-container"]}>
          <img src={HomeImage} alt="Share a Ride" />
          <p>Image by storyset on Freepik</p>
        </div>
        <form onSubmit={handleSubmit} className={styles["form-container-s"]}>
          <label>
            <span>E-mail address:</span>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </label>
          <label>
            <span>Password:</span>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </label>
          <button>Continue</button>
        </form>
      </div>
    </div>
  );
}
