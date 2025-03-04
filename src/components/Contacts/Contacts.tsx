
import './contacts.style.css'
export const Contacts = () => {
  const mapHandler = () => {
    window.open('https://www.google.com/maps/place/Odesa,+Odesa+Oblast,+65000/@46.4600902,30.5469812,11z/data=!3m1!4b1!4m6!3m5!1s0x40c6318a0b864c43:0x129f8fe28cf2176c!8m2!3d46.482526!4d30.7233095!16zL20vMGZmbXA?entry=ttu', '_blank')
  }
  return (
    <div id='contacts' className="contacts">
      <div className="container pt-5">
        <h2>CONTACT</h2>
        <h5>Interested in collaborating with me? I’m always open to discussing product design work or partnership opportunities.👇</h5>
        <div className='contact-info'>
          <div className='location me-5'>
            <div>
              <i className="bi bi-pin-map"></i>
            </div>
            <p className='ms-3 col-12'><span>Location</span><br /><span onClick={mapHandler}>Odesa, Ukraine</span></p>
          </div>
          <div className='mail'>
            <div>
              <i className="bi bi-envelope"></i>
            </div>
            <p className='ms-3'><span>Mail</span><br /><span><a className='email-link' href="mailto:strafelord24@gmail.com">strafelord24@gmail.com</a></span></p>
          </div>
        </div>


      </div>
    </div>
  )
}


