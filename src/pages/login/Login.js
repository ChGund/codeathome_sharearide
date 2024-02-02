import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useLogin } from '../../hooks/useLogin'

import HomeImage from "./HomeImage.jpg";
import styles from "./Login.module.css";


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isPending } = useLogin()

  const handleSubmit = (e) => {
    e.preventDefault();
    login (email, password);
  };

  return (
    <div>
      {/* displays the heading in the middle of the right side of the page: */}
      <div className={styles["heading-spacer"]}>          
        <div className={styles["empty-left-side"]}></div>
        <h2>Connecting the countryside</h2>
      </div>
      <div className={styles["login-page"]}>
        <div className={styles["image-container"]}>
          <img src={HomeImage} alt="Share a Ride" />
          <p>Image by storyset on Freepik</p>
        </div>
        <form onSubmit={handleSubmit} className={styles["form-container-l"]}>
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
          {!isPending && <button>Sign in</button>}
          {isPending && <button disabled>Loading</button>}
          {error && <p>{error}</p>}
          <br />
          <p className={styles["nav-link"]}><NavLink to='/codeathome_final_project/signin'>Create an account here</NavLink></p>
        </form>
      </div>
    </div>
  );
}
