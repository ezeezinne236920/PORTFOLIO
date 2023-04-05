import React, { useState } from 'react'
import './section.css'
import About from '../about/About'

const Section = ({ social }) => {
  const [navToggle, setNavToggle] = useState(true)
  const [sectionData, setSectionData] = useState(social)
  return (
    <section
      className={`${navToggle ? 'sectionOne  blurontoggle' : 'blurontoggle'}`}
    >
      <div className=' fixedPosition fixedPosition1'>
        <ul className='   positioncontent'>
          {sectionData.map((links) => {
            const { id, social, url } = links
            return (
              <li key={id}>
                <a href={url}>{social}</a>
              </li>
            )
          })}
        </ul>
        <hr className='longLine' />
      </div>
      <div className='sectionInfo'>
        <h3>Hello, my name is </h3>
        <h1 className='boldfont'>Eze Ezinne Leticia</h1>
        <h1>I am a web developer</h1>
        <p>
          I am a software engineer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I am available
          for any job involving building things for the web.
          <a href='/cv'>click </a>to see my cv
        </p>
        <div  >
          <button className='checkmyproject'>
            <a href='#'>See my projects!</a>
          </button>
        </div>
      </div>
      <div className=' fixedPosition fixedPosition2'>
        <div>
          <a href='mailto:ezeezinne42@gmail.com'>ezeezinne42@gmail.com</a>
        </div>
      </div>
      <About />
    </section>
  )
}

export default Section
