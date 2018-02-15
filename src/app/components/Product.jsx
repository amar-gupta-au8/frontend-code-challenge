import React from 'react';
import PropTypes from 'prop-types';

const Product = ({ data }) => {
  const src = ('0' in data.advertisementAssets) ?
    data.advertisementAssets['0'].advertisementThumbnails.inventory_m.url :
    data.advertisementAssets.advertisementThumbnails.inventory_m.url;

  return (
    <div className="product">
      <div className="product__head">
        <div className="product__head__purpose">{data.purpose === 0 ? 'Mieten' : 'Kaufen'}</div>
        <div className="image-wrapper">
          <img src={src} alt="property thumbnail" />
        </div>
      </div>
      <div className="product__body">
        <div className="product__body__title">{data.title}</div>
        <div className="product__body__address">
          {(`${data.realestateSummary.address
            .postalCode} ${data.realestateSummary.address
            .city} /  ${data.realestateSummary.address.street}`)}
        </div>
        <div className="product__body__price">
          {data.purpose === 0
            ? data.advertisementPrice.baseRent
            : data.advertisementPrice.sellPrice} €
        </div>
        <div className="product__body__size">
          <span className="product__body__size__rooms">
            {data.realestateSummary.numberOfRooms} Zimmer
          </span>
          <span className="product__body__size__space">
            ab {Math.round(data.realestateSummary.space)} m<sup>2</sup>
          </span>
        </div>
      </div>
    </div>
  );
};

Product.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    purpose: PropTypes.number,
  }),
};

Product.defaultProps = { data: {} };

export default Product;
