import { quantum } from 'ldrs';
import styles from './stylesheet.module.css';

quantum.register();

const Error = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>404</h1>
        <p>Page not Found...</p>
      </div>
      <br />
      <l-quantum size='120' speed='3' color='white'></l-quantum>
    </div>
  );
};

export default Error;
