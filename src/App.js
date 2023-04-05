import React, { useState, useEffect, useRef } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import SectionOne from './section/Section'
import { Links, Social } from './data'
import './App.css'

function App() {
  const [navData, setNavData] = useState(Links)
  const [navToggle, setNavToggle] = useState(true)
  const navRef = useRef(null)
  const sectionRef = useRef(null)
  let nav = 'nav'

  const navfunction = () => {
    setNavToggle(!navToggle)
  }

  return (
    <main>
      <nav className='navcontainer navcolorchanged'>
        <div ref={navRef} className='header'>
          <div className='logo'>
            ZEI <span> BRA</span>
          </div>
          <button className='menu' onClick={() => navfunction()}>
            <AiOutlineMenu />
          </button>

          {navToggle && (
            <div className={nav}>
              {navData.map((item) => {
                const { id, title } = item
                return (
                  <ul key={id}>
                    <li>
                      <a href='/'>{title}</a>
                    </li>
                  </ul>
                )
              })}
            </div>
          )}
        </div>
      </nav>
      <SectionOne ref={sectionRef} social={Social} />
      {/* <About /> */}
    </main>
  )
}

export default App
