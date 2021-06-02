import React from "react";
import { connect } from "react-redux";
import { REMOVE, INCREASE, DECREASE } from "../redux/cart/action";

const CartItems = ({ image, price, name, remove, increase, decrease }) => {
  return (
    <tr>
      <td className="shoping__cart__item">
        <img src={image} alt={name} />
        <h5>{name}</h5>
      </td>
      <td className="shoping__cart__price">${price}</td>
      <td className="shoping__cart__quantity">
        <div className="quantity">
          <div className="pro-qty">
            <button style={{ marginRight: 10 }} onClick={() => decrease()}>
              -
            </button>
            {}
            <button style={{ marginLeft: 10 }} onClick={() => increase()}>
              +
            </button>
          </div>
        </div>
      </td>
      <td className="shoping__cart__total">${}</td>
      <td className="shoping__cart__item__close">
        <button className="icon_close" onClick={() => remove()}></button>
      </td>
    </tr>
  );
};
const mapDispatchToProps = (dispatch, ownProps) => {
  const { id } = ownProps;
  // console.log(ownProps);
  return {
    remove: () => dispatch({ type: REMOVE, payload: { id } }),
    increase: () => dispatch({ type: INCREASE, payload: { id } }),
    decrease: () => dispatch({ type: DECREASE, payload: { id } }),
  };
};
export default connect(null, mapDispatchToProps)(CartItems);
