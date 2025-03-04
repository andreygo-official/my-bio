import './project.style.css'

type WeatherProps = {
    src: string
    className: string
    backdrop: string
    backgroundColor: string
    clickBait: string
    colWidth: string
    link: string,
    liveLink: string
}

const Project = (props: WeatherProps) => {
    const{src, className, backdrop, backgroundColor, clickBait, colWidth, link, liveLink} = props
    const clickHandler = () => {
        window.open(link)
    }
    const linkHandler = () => {
        window.open(liveLink)
    }
    return (
        
        <div className={`col-12 ${colWidth} col-lg-4 mt-3`}>
            <div className='portfolio-photo'>
                <img src={backdrop} alt="" />
                <div style={{background: backgroundColor}} className='empty-element'>
                    <img
                        src={src}
                        className={className}
                        alt={className}
                    />
                    <div className='website-clickbait'>
                        <p style={{textAlign: 'center'}}>{clickBait}</p>
                        <div className='website-actions'>
                            <p onClick={clickHandler}>Code<i className="ms-2 bi bi-github"></i></p>
                            <p onClick={linkHandler}>Live<i className="ms-2 bi bi-globe"></i></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project
