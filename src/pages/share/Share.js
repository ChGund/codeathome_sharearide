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
    )

  return (
    <>
    <div className={styles.spacer}>
      </div>
      <div className={styles.container}>
        <div className={styles["rides-form"]}>
        <h2>Add a new ride:</h2>
          <RidesForm uid={user.uid} />
        </div>
        <div className={styles["rides-list"]}>
        <h2>Rides you offer:</h2>
          {error && <p>{error}</p>}
          {documents && <RidesList rides={documents} />}
        </div>
      </div>
    </>
  );
}


