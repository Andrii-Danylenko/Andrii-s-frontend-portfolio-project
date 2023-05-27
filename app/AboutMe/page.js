import React from 'react'
import Image from 'next/image'
import styles from './page.module.css'
import { Typing } from '@/Components/Typing';
export default function AboutMe() {
    return (
      <> 
      <div className={styles.moreAbout}><h4><Typing speed={400} text={"About me"}></Typing></h4><br></br><Typing speed={100} text={"I am a beginner java developer. I am fond of algorithms and data structures. I like to create small but useful applications. Also working on generative AI story-telling game. I am currently a student of SUICT."}></Typing>
</div>
      </>
    );
  }
  