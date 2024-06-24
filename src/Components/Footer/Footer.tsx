import styles from './Footer.module.css';
import logo from '../../assets/logo-lighter-green.png';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <Link to='/'>
          <img className={styles.logo} src={logo} alt={logo} />
        </Link>

        <p>Gromidin BV | 3052 Blanden</p>
        <p>
          Tel:
          <a href='tel:+32476452363'>+32(0) 476 45 23 63</a> |{' '}
          <a href='mailto:info@gromidin.com'>info@gromidin.com</a>
        </p>

        <Link className={styles.contact} to='contact'>
          Contact Gromidin
        </Link>
      </div>
    </div>
  );
}

export default Footer;
