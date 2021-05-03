import "./Main.css";
import image from '../assets/images/my-image.jpeg'
import { FaCheckCircle, FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Main = () => {
  return (
    <div className="container">
      <div className="logo">MY PORTFOLIO</div>
      <div className="top-wrapper">
        <div className="box">
          <div className="img">
            <img src={image} alt="this is my thumbnail" />
          </div>
          <div className="box-info">
            <div className="descrip">
              <h3>LUCY OFEM</h3>
              <div>
                <p>Freelance Web Developer from Nigeria.</p>
              </div>
            </div>
            <div className="icon-wrap">
              <a href="https://twitter.com/_dada_dev" className="icons icon1"><FaTwitter /></a>
              <a href="https://github.com/Lucy922" className="icons icon2"><FaGithub /></a>
              <a href="https://www.linkedin.com/in/lucy-ofem-740a9a196/" className="icons icon3"><FaLinkedin /></a>
            </div>
            <div className="email">
              <label>Email Address:</label> <br />
              ofemlucy@gmail.com
            </div>
          </div>
        </div>
      </div>
      <div className="about">
        <h3>ABOUT ME</h3>
        <p>I'm a highly focused and motivated web developer who loves building accessible and responsive websites. I've gathered knowlegde as a developer for over 2 years and also worked on a few personal projects which can be found on my github account. </p>
      </div>
      <div className="bottom-wrapper">
        <div className="wrap">
          <div className="icon">
            <FaCheckCircle />
          </div>
          <div className="info">
            <div className="text-wrap">
              <h3>Languages</h3>
              <p>JavaScript, HTML, CSS.</p>
            </div>
          </div>
        </div>
        <div className="wrap">
          <div className="icon">
            <FaCheckCircle />
          </div>
          <div className="info">
            <div className="text-wrap">
              <h3>Frameworks</h3>
              <p>React, NodeJs, ExpressJs, Bootstrap.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main