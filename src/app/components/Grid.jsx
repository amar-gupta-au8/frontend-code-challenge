import React, { Component } from 'react';
import Product from './Product';

export class Grid extends Component {

    constructor() {
        super();
        this.state = { data: [] };
    }

    componentWillMount() {
        let proxyUrl = 'https://cors-anywhere.herokuapp.com/'; //since targetUrl throws CORS error
        let targetUrl = 'https://api.mcmakler.de/v1/advertisements';
        fetch(proxyUrl + targetUrl)
        .then(response => response.json())
        .then(data => this.setState({data: data}));
    }

    renderLoading() {
        return (
            <div className="loader">
                <div className="loader__animation"></div>
                <div className="loader__caption">Please wait while we fetch properties for you...</div>
            </div>
        );
    }

    renderLoaded() {
        let blob = JSON.stringify(this.state.data);
        let productList = [];
        for(let i=0; i<10; i++) {
            productList.push(<div className="grid__item" key={i}><Product data={this.state.data.data[i]} /></div>);
        }
        return productList;
    }

	render() {
		return (
			<div className="grid">
                { this.state.data.length == 0 ? this.renderLoading() : this.renderLoaded() }
			</div>
		);
	}
}

export default Grid;
