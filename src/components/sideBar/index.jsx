import { menuItens } from '../menuItens/menuItens';
import styles from './stylesheet.module.css';

const SideBar = () => {
  return (
    <div className={styles.container}>
      <div>
        <img src='' alt='' />
      </div>
      <div>
        {menuItens.map((item) => {
          return (
            <div key={item.title}>
              {item.title}
              <div>
                {item.itens.map((innerItem) => {
                  return <div key={innerItem.title}>{innerItem.title}</div>;
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SideBar;
