import React from 'react';
import { connect } from 'react-redux';
import './collectionitem.scss';
import CustomButton from '../CustomButton';
import { addItem } from '../../redux/cart/cart.actions';

function CollectionItem({ item, addItem }) {
  const { name, price, imageUrl } = item;
  return (
    <div className="collection-item">
      <div
        style={{ backgroundImage: `url(${imageUrl})` }}
        className="background-image"
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton onClick={() => addItem(item)} inverted>
        Add To Cart
      </CustomButton>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);
