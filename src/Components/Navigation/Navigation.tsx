import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png';
import styles from './Navigation.module.css';

function Navigation() {
  return (
    <nav className={styles.navigation}>
      <Link className={styles.logo} to='/'>
        <img className={styles.logoImg} src={logo} alt={logo} />
      </Link>
      <ul>
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/about'>About</NavLink>
        </li>
        <li>
          <NavLink to='/contact'>Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
