import { useLocation } from 'react-router-dom';

import styles from './stylesheet.module.css';

export default function ProjectCardItem({
  projectName,
  projectDescription,
  projectImage,
  projectLink,
}) {
  const location = useLocation();
  const handleClick = () => {
    window.location.href = `${location.pathname}${projectLink}`;
  };

  return (
    <div className={styles.container}>
      <h2>{projectName}</h2>
      <p>{projectDescription}</p>
      <button
        className={styles.button}
        onClick={() =>
          handleClick()
        }>{`${location.pathname}${projectLink}`}</button>
    </div>
  );
}
