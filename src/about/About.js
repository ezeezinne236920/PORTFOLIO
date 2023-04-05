import React from 'react'
import './about.css'
import { firstImage, secondImage } from '../images'
const about = () => {
  return (
    <div>
      <div className='aboutme'>
        <h3>
          i. <span>About Me</span> <hr className='horizontalrule' />
        </h3>
        <div className='grid'>
          <p>
            Hello there! My name is Ezinne and I enjoy creating things for the
            web . My interest in web development started back in 2022 when I
            heard a group of people discussing about the Tech world and I got
            quite smitten and jumped right in to HTML & CSS!
            <p>
              Fast-forward to today, I am still learning! I am curently in the
              middle of building projects and looking out for internship as well
              as organisations where My services are needed! see my contact
              <button className='checkmyproject one'>
                <a href='#contact'>Contact me!</a>
              </button>
            </p>
          </p>
          <div className='image-container'>
            <img src={firstImage} alt='' srcset='' />
            {/* <img src={secondImage} alt="" srcset="" /> */}
          </div>
        </div>

        <p>Here are a few technologies Ive been working with recently:</p>
        <ul className='list'>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript (ES6+)</li>
          <li>ReactJS</li>
          <p>version control like:</p>
          <li>Git</li>
          <li>GitHub</li>
        </ul>
      </div>
    </div>
  )
}
export default about
