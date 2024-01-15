import { useState } from "react";
import HomeImage from "./HomeImage.jpg";
import styles from "./Login.module.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    //backend needs to attach this to handle authentication:
    console.log(email, password);
  };

  return (
    <div>
      {/* displays the heading in the middle of the ride side of the page: */}
      <div className={styles["heading-spacer"]}>          
        <div className={styles["empty-left-side"]}></div>
        <h2>Share a Ride</h2>
      </div>
      <div className={styles["login-page"]}>
        <div className={styles["image-container"]}>
          <img src={HomeImage} alt="Share a Ride" />
          <p>Image by storyset on Freepik</p>
        </div>
        <form onSubmit={handleSubmit} className={styles["form-container"]}>
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
          <button>Sign in</button>
        </form>
      </div>
    </div>
  );
}
