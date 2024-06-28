import duckyLogo from '../../assets/imgs/ducky_logo_text.svg';
import styles from './stylesheet.module.css';

const NavBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.menuHeader}>
        <img src={duckyLogo} alt='ducky_logo_text.svg' />
      </div>
    </div>
  );
};

export default NavBar;
