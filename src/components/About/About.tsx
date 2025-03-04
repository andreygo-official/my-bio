import './about.style.css'
import workingImg from '../Images/working.png'
export const About = () => {
  return (
    <div className='mt-5 about-component'>
      <div className='image-block'>
        <img className='about-image ' src="https://mattfarley.ca/img/hero-devices.svg" alt="" />
      </div>
      <div id='about' className='container about-container'>
        <div className='about-me-block row'>
          <div className='col-md-12 col-lg-3 col-xl-4'>
            <h1>1. About Me</h1>
          </div>
          <div className='about-me-paragraph col-md-12 col-lg-5 col-xl-4'>
            <h3 className='mb-3'>Hi, I’m Andrii. Nice to meet you.</h3>
            <p>As a Junior Front-End Developer, I possess an impressive arsenal of skills in HTML, CSS, JavaScript,
              React, Angular, and SCSS. I excel in designing and maintaining responsive websites that offer a smooth user experience.
              My expertise lies in crafting dynamic, engaging interfaces through writing clean and optimized
              code and utilizing cutting-edge development tools and techniques.</p>
          </div>
          <div className='front-end-emoji col-md-6 col-lg-4 col-xl-4'>
            <p>
              <img width={100} height={100} src={workingImg} alt="" />
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
