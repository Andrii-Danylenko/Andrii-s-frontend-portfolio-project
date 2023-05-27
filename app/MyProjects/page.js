import React from 'react'
import Image from 'next/image'
import styles from './page.module.css'
import { Typing } from '@/Components/Typing';
import chatbot from '../Images/Rectangle 17.png'
import Project from '@/Components/Projects';
import fileserver from '../Images/Group 1.png'
export default function AboutMe() {
  return (
    <>
      <div className={styles.text}><h4><Typing text={"Few of my projects"} speed={200}></Typing></h4></div>
      <div className={styles.projects}>
        <Project photo={fileserver} title={<Typing text={"File Client-Server"} speed={60}></Typing>} description={<Typing text={"Need to encrypt and send files to other devices? This file server will allow you to send your files to any computer! Also supports multithreading and multiple users"} speed={100}></Typing>} link={"https://github.com/Andrii-Danylenko/ISDRozkladBot"}></Project>
        <Project photo={chatbot} title={<Typing text={"ISD Rozklad"} speed={60}></Typing>} description={<Typing text={"Always wanted to be an excellent student? Then this bot is for you! It shows all upcoming classes for your group!"} speed={100}></Typing>} link={"https://github.com/Andrii-Danylenko/File-client-server"}></Project>
      </div>
    </>
  );
}
