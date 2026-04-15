import React from 'react'
import './About.css';
import reactImg from '../../Assets/LanguagesAndTools/react.png'
import bootstrap from '../../Assets/LanguagesAndTools/Bootstrap.png'
import c from '../../Assets/LanguagesAndTools/c++.png'
import css from '../../Assets/LanguagesAndTools/css.png'
import git from '../../Assets/LanguagesAndTools/Git.png'
import html from '../../Assets/LanguagesAndTools/Html.png'
import javaScript from '../../Assets/LanguagesAndTools/JavaScript.png'
import mongoDB from '../../Assets/LanguagesAndTools/mongoDB.png'
import nodejs from '../../Assets/LanguagesAndTools/nodejs.png'
import postman from '../../Assets/LanguagesAndTools/postman.png' 

function About() {

    const image = [reactImg , bootstrap , c , css , git , html , javaScript ,
         mongoDB , nodejs , postman]
  return (
    <div id='about'>
        <h2 className='aboutTitle'>About me</h2>
        <p className='contant ' >
            I am a passionate MERN stack developer who loves building modern web
          applications using React, Node.js, and MongoDB.MERN Stack Developer with hands-on experience in building responsive and scalable web
applications using MongoDB, Express.js, React.js, and Node.js. Skilled in developing
RESTful APIs, modern UI interfaces, and full-stack solutions. Passionate about clean code,
performance optimization, and continuous learning.
        </p>
        <div id='languagesAndTools' className='languagesAndTools'>
            {
                image.map((img , index)=>(
                    <img alt='aboutImage' className='languagesImags' src={img} key={index} />
                    
                ))
            }
        </div>
    </div>
  )
}

export default About