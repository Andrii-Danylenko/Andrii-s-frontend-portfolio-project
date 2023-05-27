import Image from 'next/image'; 
import Link from 'next/link'; 
import styles from './project.module.css';

const Project = ({ title, photo, description, link }) => {
  return (
    <Link href={link} className={styles.link}>
    <h1 className={styles.title}>{title}</h1>
    <div className={styles.project}>
      <Image src={photo} alt="photo" className={styles.photo} />
      <div>
        {description}
      </div>
    </div>
    </Link>
  );
};
export default Project;