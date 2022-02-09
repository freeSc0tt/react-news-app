import React, { Component } from 'react';
import axios from 'axios';
import FeedTwo from './FeedTwo';
import Error from './Error';

class SideFeed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      SideFeed: [],
      error: false,
    };
  }

  componentDidMount() {
    const url = `https://newsapi.org/v2/${this.props.news.type}?${this.props.news.query}&apiKey=d67c8b28380d4ec4aa644673c4209c73`;

    axios.get(url)
      .then((response) => {
        this.setState({
          SideFeed: response.data.articles
        })
      })
      .catch((error) => {
        this.setState({
          error: true
        })
      });
  }

  renderItems() {
    if (!this.state.error) {
      return this.state.SideFeed.map((item) => (
        <FeedTwo key={item.url} item={item} />
      ));
    } else {
      return <Error />
    }
  }

  render() {
    return (
      <div>
        {this.renderItems()}
      </div>
    );
  }
}

export default SideFeed;
