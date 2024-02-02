import { useState } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";

import { useFirestore } from "../../hooks/useFirestore";

import styles from "./Share.module.css";

export default function RidesForm({ uid }) {
  const { user } = useAuthContext()
  const [location, setLocation] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [seats, setSeats] = useState("");
  const { addDocument, response } = useFirestore("offeredRides");

  console.log(response);

  const handleSubmit = (e) => {
    e.preventDefault();
    addDocument({
      uid,
      location,
      destination,
      date,
      seats,
      contact: user.email
    });

    //cleanup the form
    setLocation("");
    setDestination("");
    setDate("");
    setSeats("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={styles["rides-form"]}>
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
        <label>
          <span>Number of seats:</span>
          <input
            type="number"
            onChange={(e) => setSeats(e.target.value)}
            value={seats}
          />
        </label>
        <button>Add</button>
      </form>
    </div>
  );
}
