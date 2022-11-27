import styles from './Projects.module.scss';
import SingleProject from '../../atoms/SingleProject/SingleProject';
import ventus from '../../../assets/imgs/ventus.png';
import myPage from '../../../assets/imgs/myPage.png';

function Projects(props) {
  const allProjects = [
    {
      name: 'Ventus page',
      url: 'https://ventusb.pl',
      photo: ventus,
      description: 'My first full crud page using HTML, CSS, JS, Express, Mongo and Node',
    },
    { name: 'My personal page', url: '/', photo: myPage, description: 'As You can see, page to show my humble person' },
  ];
  const projects = allProjects.map((p) => {
    return <SingleProject name={p.name} url={p.url} photo={p.photo} description={p.description} key={p.url} />;
  });
  return (
    <div id="projects" className={`${styles.projects}`}>
      <h2>So, You want to see, what I have already done?</h2>
      {projects}
      <p className={`${styles.nextProjects}`}>And more to come...</p>
    </div>
  );
}

export default Projects;
