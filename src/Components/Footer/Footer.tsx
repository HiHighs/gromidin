import styles from './Footer.module.css';
import logoLight from '../../assets/logo-lighter-green.png';
import logoDark from '../../assets/logo-darker-green.png';
import { Link } from 'react-router-dom';

function Footer({ color }: { color: string }) {
  return (
    <div
      className={`${styles.footer} ${
        color === 'dark' ? styles.darkerGreenBG : styles.lighterGreenBG
      }`}
    >
      <div className={styles.container}>
        <Link to='/'>
          <img
            className={styles.logo}
            src={color === 'dark' ? logoDark : logoLight}
            alt={color === 'dark' ? logoDark : logoLight}
          />
        </Link>

        <p
          className={
            color === 'dark' ? styles.lighterGreen : styles.darkerGreen
          }
        >
          Gromidin BV | 3052 Blanden
        </p>
        <p
          className={
            color === 'dark' ? styles.lighterGreen : styles.darkerGreen
          }
        >
          Tel:{' '}
          <a
            className={color === 'dark' ? styles.lightGreen : styles.darkGreen}
            href='tel:+32476452363'
          >
            +32(0) 476 45 23 63
          </a>{' '}
          |{' '}
          <a
            className={color === 'dark' ? styles.lightGreen : styles.darkGreen}
            href='mailto:michel.degroote@gmail.com'
          >
            michel.degroote@gmail.com
          </a>
        </p>

        <Link
          className={`${styles.contact} ${
            color === 'dark' ? styles.lighterGreenBG : styles.darkGreenBG
          } ${
            color === 'dark'
              ? `${styles.darkerGreen} ${styles.heavy}`
              : styles.basicColor
          }`}
          to='/contact'
        >
          Contact Gromidin
        </Link>
      </div>
    </div>
  );
}

export default Footer;
