import React, { Component } from 'react';
import './App.css';

import { Layout, Header, Navigation, Drawer, Content, Footer, FooterSection, FooterLinkList, Button, Card, CardText } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div style={{height: '100vh', position: 'relative'}}>
        {/* <Layout style={{background: 'url(http://www.getmdl.io/assets/demos/transparent.jpg) center / cover'}}> */}
        <Layout style={{background: 'url(' + require('./img/background-resize.jpg') +') center / cover'}}>
          <Header transparent title={<a className='links' href="/">Andrew Pittman</a>} style={{color: 'white'}}>
          {/* <Header className="header-color" title="Title" style={{color: 'white'}}> */}
              <Navigation>
                  <Link to="/aboutme">About Me</Link>
                  <Link to="/projects">Projects</Link>
                  <Link to="/resume">Resume</Link>
                  <Link to="/contact">Contact</Link>
              </Navigation>
          </Header>
          <Drawer title={<a className='side-links' href="/">Andrew Pittman</a>}>
              <Navigation>
                  <Link to="/aboutme">About Me</Link>
                  <Link to="/projects">Projects</Link>
                  <Link to="/resume">Resume</Link>
                  <Link to="/contact">Contact</Link>
              </Navigation>
          </Drawer>
          <Content>
              <div className="page-content" />
              <Main/>
          </Content>
          {/* <Footer size="mini" className="footer">
              <FooterSection type="top" logo="">
                  <FooterLinkList>
                      <a href="/">Help</a>
                      <a href="/">Privacy & Terms</a>
                  </FooterLinkList>
              </FooterSection>
          </Footer> */}
        </Layout>
    </div>
    );
  }
}

export default App;
