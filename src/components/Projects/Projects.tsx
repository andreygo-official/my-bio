import './projects.style.css'
import weatherLogo from '../Images/weather-logo.png'
import fitnessLogo from '../Images/fitness-logo.png'
import autoServiceLogo from '../Images/auto-service.png'
import Project from '../Project/Project'
export const Projects = () => {
    return (
        <div className='projects'>
            <div className='container mt-5'>
                <div id='works' className='portfolio'>
                    <h1 className='portfolio-heading'>My Portfolio</h1>
                    <p>Here are a few past design projects I've worked on. Want to see more? <a href='mailto:strafelord24@gmail.com'>Email me.</a></p>
                </div>
                <div className='row'>
                    <Project 
                    colWidth='col-md-6'
                    src={weatherLogo}
                    clickBait='Accurate forecasts at your fingertips'
                    backdrop='https://img.freepik.com/free-vector/sky-background-video-conferencing_23-2148639325.jpg'
                    className='weatherLogo'
                    backgroundColor='linear-gradient(125deg, rgba(2,0,36,0.8) 0%, rgba(9,116,121,0.8) 41%, rgba(94,42,128,0.8) 87%)'
                    link='https://github.com/andreygo-official/weather-app'
                    liveLink= 'https://weather-app-beta-drab-13.vercel.app/'
                    />
                    <Project 
                    colWidth='col-md-6'
                    src={fitnessLogo}
                    className='fitnessLogo'
                    backdrop='https://t3.ftcdn.net/jpg/04/29/35/62/360_F_429356296_CVQ5LkC6Pl55kUNLqLisVKgTw9vjyif1.jpg'
                    backgroundColor='radial-gradient(circle, rgba(238,174,202,0.8) 0%, rgba(148,187,233,0.8) 100%)'
                    clickBait='Unlock your ultimate body in just 30 days!'
                    link='https://github.com/andreygo-official/fitness-app'
                    liveLink= 'https://fitness-app-six-bay.vercel.app/'
                    />
                     <Project 
                     colWidth='col-md-12'
                    src={autoServiceLogo}
                    className='autoServiceLogo'
                    backdrop='https://hips.hearstapps.com/hmg-prod/images/2024-audi-rs7-performance-motion-front-2-1669663936.jpg?crop=0.673xw:0.757xh;0.287xw,0.226xh&resize=768:*'
                    backgroundColor='linear-gradient(125deg, rgba(34,193,195,0.8) 0%, rgba(253,187,45,0.8) 100%)'
                    clickBait='Discover the secret to a longer-lasting car!'
                    link='https://github.com/andreygo-official/car-service'
                    liveLink= 'https://car-service-tau.vercel.app/'
            />
                </div>
            </div>
        </div>
    )
}
