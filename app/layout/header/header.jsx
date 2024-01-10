import React from 'react'
import Link from 'next/link'
import resume from "../../assets/Azizbek Qurbonov.jpg"
import { FaLinkedin, FaGithub, FaRegEnvelope, FaChessKing } from "react-icons/fa";

const Header = () => {
  return (
    <header>
        <div className="header_name">
            <p>Azizbek Qurbonov</p>
        </div>
        <ul>
            <Link href="#about" className='link'><li>About</li></Link>
            <Link href="#skills" className='link'><li>Skills</li></Link>
            <Link href="#projects" className='link'><li>Projects</li></Link>
        </ul>
        <div className="contact">
            <Link className="github" href="https://www.linkedin.com/in/azizbek-qurbonov-b79b142a1/?originalSubdomain=uz">
                <FaLinkedin />
                Linkedin
            </Link>
            <Link className="github" href="https://github.com/Azizbek1603" target="_top">
                <FaGithub />
                Github
            </Link>
            <Link className="github" href="#">
                <FaRegEnvelope />
                Contact me
            </Link>
        </div>
    </header>
  )
}

export default Header