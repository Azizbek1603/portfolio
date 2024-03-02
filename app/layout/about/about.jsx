import React from 'react'
import { FaChessKing } from 'react-icons/fa'
import Image from 'next/image'
import image from "../../assets/img/next.png"
import redux from "../../assets/img/redux.png"
import js from "../../assets/img/js.webp"
import react from "../../assets/img/react.webp"
const About = () => {
    return (
        <div className='about' id="about">
            <div className="me">
                <p>Hello, i am</p>
                <h2>Azizbek Qurbonov</h2>
                <h6>Frontend Developer</h6>
                <a href="https://drive.google.com/uc?export=download&id=1h6Sq0rHyO6vwVwb5VBPdcSAiw75womvv">Download CV</a>
            </div>
            <div className="mytools">
                <div className="tools">
                    <div className="tool">
                        <Image
                            src={image}
                            width={100}
                            height={100}
                            alt="Picture of the author"
                        />
                    </div>
                    <div className="tool">
                        <Image
                            src={redux}
                            width={70}
                            height={70}
                            alt="Picture of the author"
                        />
                    </div>
                    <div className="tool">
                        <Image
                            src={js}
                            width={50}
                            height={50}
                            alt="Picture of the author"
                        />
                    </div>
                    <div className="tool">
                        <Image
                            src={react}
                            width={80}
                            height={80}
                            alt="Picture of the author"
                        />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default About