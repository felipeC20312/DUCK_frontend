import NavBar from '../navBar';
import SideBar from '../sideBar';
import styles from './stylesheet.module.css';

const LayoutAuth = ({ children }) => {
  return (
    <div className={styles.container}>
      <NavBar />
      <div className={styles.content}>
        <SideBar />
        <div className={styles.children}>{children}</div>
      </div>
    </div>
  );
};

export default LayoutAuth;
