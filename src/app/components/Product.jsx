import React, { Component } from 'react';

export class Product extends Component {
	render() {

		let src;
		src = this.props.data.advertisementAssets.hasOwnProperty('0')
		? this.props.data.advertisementAssets['0'].advertisementThumbnails.inventory_m.url
		: this.props.data.advertisementAssets.advertisementThumbnails.inventory_m.url;

		return (
			<div className="product">
				<div className="product__head">
					<div className="product__head__purpose">{this.props.data.purpose == 0 ? 'Mieten' : 'Kaufen'}</div>
					<div className="image-wrapper">
						<img src={src} />
					</div>
				</div>
				<div className="product__body">
					<div className="product__body__title">{this.props.data.title}</div>
					<div className="product__body__address">
						{this.props.data.realestateSummary.address.postalCode + ' '
						+ this.props.data.realestateSummary.address.city
						+ ' / ' + this.props.data.realestateSummary.address.street}
					</div>
					<div className="product__body__price">
						{this.props.data.purpose == 0
							? this.props.data.advertisementPrice.baseRent
							: this.props.data.advertisementPrice.sellPrice} €
					</div>
					<div className="product__body__size">
						<span className="product__body__size__rooms">
							{this.props.data.realestateSummary.numberOfRooms} Zimmer
						</span>
						<span className="product__body__size__space">
							ab {Math.round(this.props.data.realestateSummary.space)} m<sup>2</sup>
						</span>
					</div>
				</div>
			</div>
		);
	}
}

export default Product;
