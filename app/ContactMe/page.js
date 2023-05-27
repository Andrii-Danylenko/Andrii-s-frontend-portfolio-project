import React from 'react'
import Image from 'next/image'
import styles from './page.module.css'
import linkedLogo from '../Images/image 1.png'
import { Typing } from '@/Components/Typing';
import Link from 'next/link';
import telegramLogo from '../Images/image 2.png'
import instLogo from '../Images/image 3.png'
export default function AboutMe() {
    return (
      <> 
      <div className={styles.contactMe}><h4><Typing text={"Contact Me"} speed={50}></Typing></h4></div>
      <div className={styles.linkedIn}><Image src={linkedLogo}></Image><Link href={"https://www.linkedin.com/in/andry-danilenko-924186267/"}><p><Typing text={"Andrii Danylenko"} speed={40}></Typing></p></Link></div>
      <div className={styles.telegram}><Image src={telegramLogo}></Image><p><Typing speed={40} text={"@TotalenRetarden"}></Typing></p></div>
      <div className={styles.instagram}><Image src={instLogo}></Image><p><Typing speed={40} text={"@HegelBan"}></Typing></p></div>
      </>
    );
  }
  