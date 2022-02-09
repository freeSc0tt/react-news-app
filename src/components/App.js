import React, { Component } from 'react';
import './App.css';
import News from './News/News';
import SideFeed from './News/SideFeed';
import {
  AdvertisingProvider,
  AdvertisingSlot,
} from 'react-advertising';
import config from './News/config'



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news1: {
        type: 'top-headlines',
        query: 'sources=bbc-news'
      },
      news2: {
        type: 'everything',
        query: 'domains=techcrunch.com&language=en'
      },
      news3: {
        type: 'everything',
        query: 'domains=comicbookmovie.com&language=en'
      }
    };
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="navbar-fixed">
          <nav>
            <div className="nav-wrapper indigo lighten-4">
              <a href="/" className="brand-logo center">RF News Feed as of 6 DEC 2021</a>
            </div>
          </nav>
        </div>
        <div className="row">
          <div className="col s8">
            <News news={this.state.news1} />
            <News news={this.state.news2} />
            <div id="banner-ad"
              style= { {
                width: 300,
                height: 250
              }}> 
              <AdvertisingProvider config={config} />
              <AdvertisingSlot config={config} />
            </div> 
          </div>
          <div className="col s4">
            <SideFeed news={this.state.news3}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
