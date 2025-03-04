
import './footer.style.css'
export const Footer = () => {
  const date = new Date().getFullYear()
  const handleLinkedInNavigate = () => {
    window.open('https://www.linkedin.com/in/andrii-horobets-36084a1b1/', '_blank')
  }
  const handleGitHubNavigate = () => {
    window.open('https://github.com/andreygo-official', '_blank')
  }
  return (
    <div className='footer-component'>
      <div className="container">
        <footer>
          <div className='footer'>
            <p>Copyright © {date}. All rights are reserved</p>
            <p>
              <i className="bi bi-linkedin me-4 fs-3" onClick={handleLinkedInNavigate}></i>
              <i className="bi bi-github fs-3" onClick={handleGitHubNavigate}></i>
            </p>
          </div>
        </footer>
      </div>
    </div>
  )
}


