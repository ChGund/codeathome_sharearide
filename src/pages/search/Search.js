import { useCollection } from '../../hooks/useCollection';

import styles from '../share/Share.module.css'

export default function Search() {
  const { documents: rides, error } = useCollection('offeredRides');
  
  return (
    <>
    <h2>Search a Ride:</h2>
    <div className={styles['container-search']}> 
    <div></div>
      <ul className={styles['rides-list']}>
        {rides && rides
          .slice() 
          .sort((a, b) => new Date(a.date) - new Date(b.date)) 
          .map((ride) => (
            <li key={ride.id}>
              <p className={styles.location}>{ride.location}</p>
              <p className={styles.arrow}>>>></p>
              <p className={styles.destination}>{ride.destination}</p>
              <p className={styles.date}>{ride.date}</p>   
              <p className={styles.seats}>Seats: {ride.seats}</p>
              <p className={styles.contact}>Contact: {ride.contact}</p>
            </li>
          ))}
          <div></div>
      </ul>
      {error && <p>{error}</p>}
    </div>
    </>
  );
}
