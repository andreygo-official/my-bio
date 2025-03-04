import React, { useEffect, useState } from 'react'
import './header.style.css'
type HeaderProps = {
    marginBotton: string
}
const Header = ({ marginBotton }: HeaderProps) => {
    const [lastScroll, setLastScroll] = useState(0)
    const [scrollDirection, setScrollDirection] = useState('scroll-up')
    useEffect(() => {

        const handleScroll = () => {
            if (window.pageYOffset > lastScroll) {
                setScrollDirection('scroll-down')
            }
            else {
                setScrollDirection('scroll-up')
            }
            setLastScroll(window.pageYOffset)
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [lastScroll])
    const scrollToTop = () => {
        document.documentElement.scrollTop = 0
    }
    return (
        <React.Fragment>
            <nav style={{ marginBottom: marginBotton }} className={`navbar fixed-top navbar-expand-lg bg-body-white ${scrollDirection}`}>
                <div className="container-fluid pb-2">
                    <a className="navbar-brand" href='#home' onClick={e => {
                        e.preventDefault()
                        scrollToTop()
                    }}>AndriiZone</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="info-links collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href='#home'>Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#works">Projects</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#contacts">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </React.Fragment>
    )
}

export default Header
