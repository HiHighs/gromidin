import styles from './ContactInfo.module.css';

function ContactInfo() {
  return (
    <div className={styles.contactInfo}>
      <h2>Contact info</h2>
      <div className={styles.infoContainer}>
        <p className={styles.right}>
          Gromidin BV
          <br />
          Bergenstraat 158
          <br />
          3052 Blanden
        </p>
        <p className={styles.left}>
          Michel Degroote
          <br />
          Managing Director
          <br />
          <a href='tel:+32476452363'>+32(0) 476 45 23 63</a>
          <br />
          <a href='mailto:michel.degroote@gmail.com'>
            michel.degroote@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
}

export default ContactInfo;
