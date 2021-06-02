import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  IncreaseQuantity,
  DecreaseQuantity,
  DeleteCart,
} from "../redux/cart/action";
import BreadCrumb from "./BreadCrumb";

// const data = JSON.parse(localStorage.getItem("items") || "[]")

function Cart({ items, IncreaseQuantity, DecreaseQuantity, DeleteCart }) {
  console.log("items", items);
  let ListCart = [];
  let TotalCart = 0;
  Object.keys(items.Carts).forEach(function (item) {
    TotalCart += items.Carts[item].quantity * items.Carts[item].price;
    ListCart.push(items.Carts[item]);
  });
  function TotalPrice(price, tonggia) {
    return Number(price * tonggia).toLocaleString("en-US");
  }

  // useEffect(() => {
  //     localStorage.setItem("items",JSON.stringify(items));
  // }, [items])

  return (
    <div>
      <BreadCrumb />
      <div
        className="row"
        style={{ paddingTop: 55, paddingLeft: 140, paddingRight: 140 }}
      >
        <div className="col-md-12">
          <table className="table">
            <thead>
              <tr>
                <th></th>
                <th className="shoping__product">
                  <h5 style={{ fontWeight: "bold" }}>Products</h5>
                </th>
                <th></th>
                <th>
                  <h5 style={{ fontWeight: "bold" }}>Price</h5>
                </th>
                <th>
                  <h5 style={{ fontWeight: "bold" }}>Quantity</h5>
                </th>
                <th>
                  <h5 style={{ fontWeight: "bold" }}>Total</h5>
                </th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {ListCart.map((item, key) => {
                return (
                  <tr key={key}>
                    <td></td>
                    <td style={{ display: "flex", alignItems: "center" }}>
                      <img
                        src={item.image}
                        style={{ width: "80px", height: "80px" }}
                      />
                      <h5 style={{ marginLeft: 50 }}>{item.name}</h5>
                    </td>
                    <td></td>
                    <td className="shoping__cart__price">
                      <h5 style={{ fontWeight: "bold", paddingTop: 20 }}>
                        ${item.price}
                      </h5>
                    </td>
                    <td
                      className="shoping__cart__quantity"
                      style={{ paddingTop: 30 }}
                    >
                      <button
                        style={{
                          border: "0px",
                          backgroundColor: "#f0f0f0",
                          borderColor: "#f0f0f0",
                          width: 40,
                          height: 35,
                        }}
                        onClick={() => DecreaseQuantity(key)}
                      >
                        -
                      </button>
                      <button
                        style={{
                          backgroundColor: "#f0f0f0",
                          borderColor: "#f0f0f0",
                          border: "0px",
                          height: 35,
                        }}
                      >
                        {item.quantity}
                      </button>
                      <button
                        style={{
                          border: "0px",
                          backgroundColor: "#f0f0f0",
                          borderColor: "#f0f0f0",
                          width: 40,
                          height: 35,
                        }}
                        onClick={() => IncreaseQuantity(key)}
                      >
                        +
                      </button>
                    </td>
                    <td>
                      <h5 style={{ fontWeight: "bold", paddingTop: 20 }}>
                        ${TotalPrice(item.price, item.quantity)}
                      </h5>
                    </td>
                    <td>
                      <h4
                        style={{ color: "grey", paddingTop: 20 }}
                        className="icon_close"
                        onClick={() => DeleteCart(key)}
                      ></h4>
                    </td>
                    <br />
                    <br />
                    <br />
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <div className="shoping__cart__btns">
              <Link to="/shop" className="primary-btn cart-btn">
                CONTINUE SHOPPING
              </Link>
              <a href="#" className="primary-btn cart-btn cart-btn-right">
                <span className="icon_loading"></span>
                Upadate Cart
              </a>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="shoping__continue">
              <div className="shoping__discount">
                <h5>Discount Codes</h5>
                <form action="#">
                  <input type="text" placeholder="Enter your coupon code" />
                  <button type="submit" className="site-btn">
                    APPLY COUPON
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="shoping__checkout">
              <h5>Cart Total</h5>
              <ul>
                <li>
                  Subtotal <span>$45.98</span>
                </li>
                <li>
                  Total{" "}
                  <span>${Number(TotalCart).toLocaleString("en-US")}</span>
                </li>
              </ul>
              <a href="#" className="primary-btn">
                PROCEED TO CHECKOUT
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  //  console.log(state)
  return {
    items: state._todoProduct,
  };
};

export default connect(mapStateToProps, {
  IncreaseQuantity,
  DecreaseQuantity,
  DeleteCart,
})(Cart);
