import { forwardRef } from 'react';
import styles from './Objective.module.css';
import { Link } from 'react-router-dom';

const Objective = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div className={styles.objective} ref={ref}>
      <div className={styles.container}>
        <Link
          to={{ pathname: 'mission', search: '?part=1' }}
          className={`${styles.imageContainer} ${styles.imageContainer1}`}
        >
          <h3>Consulting Crop Protection</h3>
        </Link>
        <Link
          to={{ pathname: 'mission', search: '?part=2' }}
          className={`${styles.imageContainer} ${styles.imageContainer2}`}
        >
          <h3>Digital farming</h3>
        </Link>
        <Link
          to={{ pathname: 'mission', search: '?part=3' }}
          className={`${styles.imageContainer} ${styles.imageContainer3}`}
        >
          <h3>Promoting in Flanders</h3>
        </Link>
      </div>
    </div>
  );
});

export default Objective;
