import { useState } from 'react'
import styles from './Search.module.css'


export default function Search() {
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [destination, setDestination] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    //backend needs to modify this to handle the form:
    console.log({
       date,
       location, 
       destination});
  };
  
  return (
    <div>
    <h2>Search a ride</h2>
    <form onSubmit={handleSubmit} className={styles["search-form"]}>
      <label>
          <span>Date:</span>
          <input
            type="date"
            required
            onChange={(e) => setDate(e.target.value)}
            value={date}
          />
        </label>
        <label>
          <span>Location:</span>
          <input
            type="text"
            required
            onChange={(e) => setLocation(e.target.value)}
            value={location}
          />
        </label>
        <label>
          <span>Destination:</span>
          <input
            type="text"
            onChange={(e) => setDestination(e.target.value)}
            value={destination}
          />
        </label>
      <button>Continue</button>
    </form> 
    </div>
  )
}
