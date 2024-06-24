import ProjectCardItem from '../../components/ProjectCardItem';
import styles from './stylesheet.module.css';

const ProjectsLibrary = () => {
  const projects = [
    {
      projectName: 'Project 1',
      projectDescription: 'This is a project description',
      projectLink: 'project-01',
    },
    {
      projectName: 'Project 2',
      projectDescription: 'This is a project description',
      projectLink: 'project-02',
    },
    {
      projectName: 'Project 2',
      projectDescription: 'This is a project description',
      projectLink: 'project-02',
    },
  ];

  return (
    <div className={styles.container}>
      <h1>Projects Library</h1>
      <div className={styles.banner}> </div>
      <div className={styles.list}>
        {projects.map((project, index) => (
          <ProjectCardItem
            key={index}
            projectName={project.projectName}
            projectDescription={project.projectDescription}
            projectLink={project.projectLink}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsLibrary;
