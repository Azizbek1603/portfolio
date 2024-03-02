import React from 'react'
import { IoLogoJavascript, IoLogoReact, IoLogoHtml5, IoLogoCss3, IoLogoSass } from "react-icons/io5";
import { SiRedux, SiNextdotjs, SiBootstrap, SiTailwindcss, SiGithub, SiTypescript } from "react-icons/si";

const Skills = () => {
  return (
    <div className='skills' id='skills'>
        <p>my skills()</p>
        <div className="my">
            <IoLogoHtml5 className='html' />
            <IoLogoCss3 className='css' />
            <IoLogoSass className='sass' />
            <IoLogoJavascript className='js' />
            <IoLogoReact className='react' />
            <SiRedux className='redux' />
            <SiNextdotjs className='next' />
            <SiBootstrap className='bootstrap' />
            <SiTailwindcss className='tailwind' />
            <SiGithub className='github' />
            <SiTypescript className='typescript' />
        </div>
    </div>
  )
}

export default Skills