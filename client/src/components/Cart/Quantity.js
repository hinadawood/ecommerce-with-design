import React, { useState, useEffect } from "react";
import "./quantity.scss";
import {
  showAddToCartBtn,
  updateCurrentSelectedItem
} from "../../actions/cartActions";
import {useDispatch} from 'react-redux';

const Quantity = (props) => {

  const [qnty, setQnty] = useState(props.item.qnty);

  useEffect(() => {
    setQnty(props.item.qnty);
  }, [props.item.qnty]);

  const dispatch = useDispatch();

  const incCartItem = () => { 
    if (qnty) {
        dispatch(updateCurrentSelectedItem(qnty + 1));
    } else {
        dispatch(updateCurrentSelectedItem(1));
    }
    dispatch(showAddToCartBtn(true));
  }

  const decCartItem = () => {
    if (qnty > 1) {
        dispatch(updateCurrentSelectedItem(qnty - 1));
    }
    dispatch(showAddToCartBtn(true));
  }

  const handleChange = (event) => {
    let newQntyValue = event.target.value;
    newQntyValue = newQntyValue ? parseInt(newQntyValue) : "";
    if (isValid(newQntyValue)) {
        setQnty(newQntyValue)
    }
  }

  const isValid = (newQntyValue) => {
    return /^[\d ]*$/.test(newQntyValue);
  };


  return (
      <div className="c-onlineshop-quantity-editor-modal">
        <button
          className="c-onlineshop-quantity-editor-modal__decr-btn btn"
          onClick={decCartItem}
        >
          <i className="fa fa-minus icon"></i>
        </button>
        <input
          className="c-onlineshop-quantity-editor-modal__input"
          onChange={handleChange}
          value={qnty}
        />
        <button
          className="c-onlineshop-quantity-editor-modal__incr-btn btn"
          onClick={incCartItem}
        >
          <i className="fa fa-plus icon"></i>
        </button>
      </div>
  );
};

export default Quantity;
