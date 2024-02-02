import { useAuthContext } from '../../hooks/useAuthContext'
import { useCollection } from '../../hooks/useCollection'

import RidesForm from './RidesForm'
import RidesList from '../../components/RidesList'

import styles from './Share.module.css'


export default function Share() {

  const { user } = useAuthContext()
  const { documents, error } = useCollection(
    'offeredRides',
    ["uid", "==", user.uid],
    ['createdAt', 'desc']
    ['creatorEmail']
    )

  return (
    <>
    <div className={styles.container}>
        <h2>Add a new ride:</h2>
        <h2>Rides you're offering:</h2>
      </div>
      <div className={styles.container}>
        <div className={styles["rides-form"]}>
          <RidesForm uid={user.uid} />
        </div>
        <div className={styles["rides-list"]}>
        {/* <h4>Rides you're offering:</h4> */}
          {error && <p>{error}</p>}
          {documents && <RidesList rides={documents} />}
        </div>
      </div>
    </>
  );
}


