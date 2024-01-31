import { useState } from "react";
import { useSignup } from "../../hooks/useSignup";
import HomeImage from "./HomeImage.jpg";


import styles from './Signin.module.css'

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup, isPending, error } = useSignup()

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(email, password);
  };

  return (
    <div>
      {/* displays the heading in the middle of the right side of the page: */}
      <div className={styles["heading-spacer"]}>          
        <div className={styles["empty-left-side"]}></div>
        <div className={styles["right-side"]}>
        <h2>Create an account</h2>
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
          {!isPending && <button>Continue</button>}
          {isPending && <button disabled>Loading</button>}
          { error && <p>{error}</p>}
        </form>
      </div>
    </div>
  );
}
