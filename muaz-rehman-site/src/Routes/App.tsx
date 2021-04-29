import logo from '../Resources/logo.svg';
import '../Resources/App.css';
import { Typography } from "antd";

const { Title, Paragraph, Text, Link } = Typography;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Work In Progress!
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
      <section className="Section" style={{backgroundColor: "#E8A87C"}}>
        <div className="Content">
          <Title>HI</Title>
          <Paragraph>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident quod quidem omnis exercitationem saepe culpa? Aliquid, nisi obcaecati maxime iste natus nam id quis mollitia veniam ut accusantium aspernatur harum?</Paragraph>
        </div>
       
      </section>
    </div>
  );
}

export default App;
