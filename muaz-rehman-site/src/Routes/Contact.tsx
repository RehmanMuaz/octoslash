import logo from '../Resources/logo.svg'
import '../Resources/App.css'

function Contact() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Contact Page
        </p>
        <a
          className="App-link"
          href="https://muaz.ca"
          target="_blank"
          rel="noopener noreferrer"
        >
          Muaz Rehman
        </a>
      </header>
    </div>
  )
}

export default Contact
