import React from 'react';
import ReactDOM from 'react-dom';
import './Resources/index.css';
import App from './Routes/App';
import Projects from './Routes/Projects';
import Contact from './Routes/Contact';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb } from 'antd';

const { Header, Content, Footer } = Layout;

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <Menu style={{backgroundColor:"None"}} theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          <Menu.Item>
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/projects">Projects</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/contact">Contact</Link>
          </Menu.Item>
        </Menu>
      </Header>
      <Switch>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/">
         <App />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
