import React from 'react'
import './about.css'
import { firstImage, secondImage } from '../images'
import {
  DiCss3Full,
  DiHtml5,
  DiJavascript1,
  DiReact,
  DiGithubFull,
} from 'react-icons/di'
import { FaGitSquare } from 'react-icons/fa'

import { BsGit } from 'react-icons/bs'
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
            <div className='linebreak'></div>
            Fast-forward to
            today, I am still learning! I am curently in the middle of building
            projects and looking out for internship as well as organisations
            where My services are needed! see my contact
            <button className='checkmyproject one'>
              <a href='#contact'>Contact me!</a>
            </button>
          </p>

          <div className='image-container'>
            <img src={firstImage} alt='' srcset='' />
            {/* <img src={secondImage} alt="" srcset="" /> */}
          </div>
        </div>

        <p>Here are a few technologies Ive been working with recently:</p>
        <ul className='list'>
          <li>
            <DiHtml5 />
          </li>
          <li>
            <DiCss3Full />
          </li>
          <li>
            <DiJavascript1 />
          </li>
          <li>
            <DiReact />
          </li>
          {/* <p>version control like:</p> */}
          <li>
            <BsGit />
          </li>
          <li>
            <FaGitSquare />
          </li>
        </ul>
      </div>
    </div>
  )
}
export default about
