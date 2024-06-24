import HeaderImage from '../HeaderImage/HeaderImage';
import ScrollDown from '../ScrollDown/ScrollDown';
import styles from './Header.module.css';

function Header({ scrollToObjective }: { scrollToObjective: () => void }) {
  return (
    <header className={styles.header}>
      <HeaderImage />

      <div className={styles.content}>
        <div className={styles.textContent}>
          <h1>
            <strong>GROMIDIN BV</strong> as a company
          </h1>
          <p>
            Because of the changing situation in European / Regional legislaton
            for farming, growers will evolve to more{' '}
            <strong>digital support</strong> in their daily business.
          </p>
          <p>
            <strong>GROMIDIN</strong> wants to be a consulting, advising and
            training <strong>partner</strong> in this evolution for companies,
            distributors and farmers.
          </p>
          <p>
            <strong>Collaboration on distribution</strong> level in Belgium / NL
            / France / Germany / UK
          </p>
          <p>
            Contact us on +32 476 45 23 63 or via mail{' '}
            <a href='mailto:info@gromidin.com'>
              <strong>info@gromidin.com</strong>
            </a>
          </p>
        </div>
      </div>

      <ScrollDown scrollToObjective={scrollToObjective} />
    </header>
  );
}

export default Header;
