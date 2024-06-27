import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png';
import styles from './Navigation.module.css';
import { useEffect } from 'react';
import Hamburger from 'hamburger-react';

type NavigationProps = {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

function Navigation({ mobileMenuOpen, setMobileMenuOpen }: NavigationProps) {
  function toggleMobileMenu() {
    document.body.classList.add('mobile-body');
    setMobileMenuOpen((prev) => !prev);
  }

  useEffect(() => {
    function resize() {
      if (700 < window.innerWidth) {
        document.body.classList.remove('mobile-body');
        setMobileMenuOpen(false);
      }
    }

    window.addEventListener('resize', resize);

    return () => window.removeEventListener('resize', resize);
  }, [setMobileMenuOpen]);

  return (
    <nav className={styles.navigation}>
      <Link className={styles.logo} to='/'>
        <img className={styles.logoImg} src={logo} alt={logo} />
      </Link>

      <div className={styles.menuToggle} onClick={toggleMobileMenu}>
        <Hamburger toggled={mobileMenuOpen} size={20} />
      </div>

      <ul
        className={`${styles.menuItems} ${mobileMenuOpen ? styles.open : ''}`}
      >
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/mission'>Mission</NavLink>
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
