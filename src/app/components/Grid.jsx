import React, {
  Component,
} from 'react';
import Product from './Product';

export default class Grid extends Component {
  static renderLoading() {
    return (
      <div className="loader">
        <div className="loader__animation" />
        <div className="loader__caption">Please wait while we fetch properties for you...</div>
      </div>
    );
  }

  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  componentWillMount() {
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/'; // since targetUrl throws CORS error
    const targetUrl = 'https://api.mcmakler.de/v1/advertisements';
    fetch(proxyUrl + targetUrl)
      .then(response => response.json())
      .then(data => this.setState({
        data,
      }));
  }

  renderLoaded() {
    const productList = [];
    for (let i = 0; i < 10; i += 1) {
      productList.push((
        <div className="grid__item" key={i}>
          <Product data={this.state.data.data[i]} />
        </div>
      ));
    }
    return productList;
  }

  render() {
    return (
      <div className="grid">
        { this.state.data.length === 0 ? Grid.renderLoading() : this.renderLoaded() }
      </div>
    );
  }
}
