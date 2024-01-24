import styles from './About.module.css'

import HomeImage from "./HomeImage.jpg";


export default function About() {
  return (
    <div className={styles['about']}>
    <h1>About us</h1>
      <div className={styles["about-page"]}>
        <div className={styles["image-container"]}>
          <img src={HomeImage} alt="Share a Ride" />
          <p>Image by storyset on Freepik</p> 
        </div>
        <div className={styles["text-container"]}>
          <p><strong>Share A Ride - Connecting the Countryside!</strong> <br />
          We are on a mission to make the countryside more accessible for everyone. <br />
          <strong>Share A Ride</strong> aims to revolutionize rural public transport. We connect people by letting them share single or regular car rides. This saves money, time, and our planet! <br />
          Join our growing community by sharing or booking a ride to your next destination!</p>
        </div>
      </div>
    </div>
  )
}
