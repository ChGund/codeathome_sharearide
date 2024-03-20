import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <ul className={styles["footer-links"]}>
        <li>
          <Link to="/codeathome_final_project/">Home</Link>
        </li>
        <li>
          <Link to="/codeathome_final_project/about">About us</Link>
        </li>
      </ul>
      <p>© by Share a Ride 2024</p>
    </div>
  );
}
