import styles from './ScrollDown.module.css';
import downArrow from '../../assets/down-arrow.svg';

function ScrollDown({ scrollToObjective }: { scrollToObjective: () => void }) {
  return (
    <div className={styles.scrollDown} onClick={scrollToObjective}>
      <div className={styles.imgContainer}>
        <img className={styles.img} src={downArrow} alt='Scroll Down' />
      </div>
    </div>
  );
}

export default ScrollDown;
