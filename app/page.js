import Image from 'next/image'
import styles from './page.module.css'
import avatar from './Images/Ellipse 1.png'
import kubernates from './Images/Kubernetes_logo_without_workmark .png'
import postGres from './Images/postgresql-logo1.png'
import java from './Images/23086798.png'
import { Typing } from '@/Components/Typing';

export default function Home() {
  return (
    <>
    <Image className={styles.avatar} src={avatar}></Image>
    <div className={styles.shortSummary}><h5><Typing text={"Welcome!"} speed={500}></Typing></h5><br></br><p><Typing text={"Hey, I'm Andrii. I'm the junior java developer."} speed={30}></Typing></p></div>
    <div className={styles.aboutTechs}><h4><Typing speed={60} text={"Working with these technologies"}></Typing></h4></div>
    <div className={styles.techs}>
      <Image src={kubernates}></Image>
      <Image src={java}></Image>
      <Image src={postGres}></Image>
    </div>
    </>
  )
}
