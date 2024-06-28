import { menuItens } from '../menuItens/menuItens';
import styles from './stylesheet.module.css';

const SideBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.menuContent}>
        {menuItens.map((item) => {
          return (
            <div key={item.title}>
              <h1>{item.title}</h1>
              <div>
                {item.itens.map((innerItem) => {
                  return <h2 key={innerItem.title}>{innerItem.title}</h2>;
                })}
              </div>
              <br />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SideBar;
