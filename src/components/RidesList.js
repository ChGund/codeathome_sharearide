
import { useFirestore } from '../hooks/useFirestore'

import styles from '../pages/share/Share.module.css'

export default function RidesList( { rides }) {

    const { deleteDocument, response } = useFirestore('offeredRides')
    console.log(response);
  
    return (
    <ul className={styles['rides-list']}>
        {rides.map((ride) => (
            <li key={ride.id}>
                <p className={styles.location}>{ride.location}</p>
                <p className={styles.destination}>{ride.destination}</p>
                <p className={styles.date}>{ride.date}</p>
                <button className={styles.button} onClick={() => deleteDocument(ride.id)}>Delete this ride</button>      
            </li>
        ))}
    </ul>
  )
}
