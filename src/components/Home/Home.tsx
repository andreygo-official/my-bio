import { useEffect, useRef } from 'react'
import profileImage from '../Images/profile.jpeg'
import './home.style.css'

export const Home = () => {
    const marginTop = useRef<HTMLImageElement>(null!)
    useEffect(() => {
        const updateMarginTop = () => {
            if (window.innerWidth < 576) {
                marginTop.current.style.marginBottom = '30px'
            }
            else {
                marginTop.current.style.marginBottom = '0px'
            }
        }
        updateMarginTop()

        window.addEventListener('resize', updateMarginTop)
        return () => {
            window.removeEventListener('resize', updateMarginTop)
        }
    }, [])
    const handleGitNavigate = () => {
        window.open('https://github.com/andreygo-official', '_blank')
    }
    const handleLinkedInNavigate = () => {
        window.open('https://www.linkedin.com/in/andrii-horobets-36084a1b1/', '_blank')
    }
    return (
        <div id='home' className='my-info row'>
            <div className='about-me col col-md-6 order-md-1 order-1'>
                    <h1>Front-End React/Angular Developer 👋</h1>
                    <p className='fs-5'>Hi, My name is Andrii Horobets. I am an enthusiastic front-end React developer residing in Odessa, Ukraine.📍</p>
                    <div className='social-media-icons'>
                        <i className="bi bi-linkedin linkedIn-1" onClick={handleLinkedInNavigate}></i>
                        <i className="bi bi-github github-1" onClick={handleGitNavigate}></i>
                    </div>
            </div>
            <div className='col col-md-6 order-md-2 order-0 d-flex justify-content-center'>
                <img className='profile-image' src={profileImage} alt="profile" ref={marginTop} />
            </div>
        </div>
    )
}


