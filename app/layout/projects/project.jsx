import React from 'react'
import Link from 'next/link'
const Projects = () => {
  return (
    <div className='projects'>
        <p>my projects()</p>
        <div className="project">
            <Link className='link' href="https://todolistprogram.netlify.app"><h6>Project 1</h6></Link>
            <Link className='link' href="https://fifth-exam.netlify.app"><h6>Project 2</h6></Link>
            <Link className='link' href="https://ephemeral-kulfi-ef7c85.netlify.app"><h6>Project 3</h6></Link>
        </div>
    </div>
  )
}

export default Projects