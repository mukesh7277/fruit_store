import React, { useState, useEffect } from "react";
import { useSelector, useDispatch, connect } from "react-redux";
import { Link } from "react-router-dom";
import { getProducts } from "../redux/shop/productActions";
import Category2 from "./home/Category2";
import "./ShopCategory.css";
import { AddCart } from "../redux/cart/action";
import BreadCrumb from "./BreadCrumb";
import LatestProducts from "./home/LatestProducts";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

function ShopCategory({ AddCart }) {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const allCategories = [
    "all",
    ...new Set(products.map((product) => product.color)),
  ];
  const allSizes = ["all", ...new Set(products.map((product) => product.size))];
  const allDepartment = [
    "all",
    ...new Set(products.map((product) => product.department)),
  ];

  const [menuItems, setMenuItems] = useState(products);
  const [categories, setCategories] = useState(allCategories);
  const [sizes, setSizes] = useState(allSizes);
  const [department, setDepartment] = useState(allDepartment);
  const [value, setValue] = React.useState([10, 50]);

  // filter color
  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(products);
      return;
    }
    const newItems = products.filter((item) => item.color === category);
    setMenuItems(newItems);
  };

  // filter size
  const filterSizes = (category) => {
    if (category === "all") {
      setMenuItems(products);
      // setCategories(allCategories);
      // setSizes(allSizes);
      // setDepartment(allDepartment);
      return;
    }
    const newSizes = products.filter((item) => item.size === category);
    setMenuItems(newSizes);
  };

  // filter department
  const filterDepartment = (category) => {
    if (category === "all") {
      setMenuItems(products);
      // setCategories(allCategories);
      // setSizes(allSizes);
      // setDepartment(allDepartment);
      return;
    }
    const newDepartment = products.filter(
      (item) => item.department === category
    );
    setMenuItems(newDepartment);
  };
  const rangeSelector = (event, newValue) => {
    setValue(newValue);
    console.log(newValue);
  };

  return (
    <div>
      <BreadCrumb />
      <section className="product spad">
        <div
          className="section-title product__discount__title"
          style={{ marginLeft: 450 }}
        >
          <h2>Sale Off</h2>
        </div>
        <Category2 />

        <div className="shopgrid" style={{ marginLeft: 50 }}>
          <div className="filter" style={{ position: "absolute", top: 200 }}>
            <div>
              <h4 style={{ fontWeight: "bold", marginBottom: 20 }}>
                Department
              </h4>
              <ul>
                {department.map((category, index) => {
                  return (
                    <li>
                      <p
                        style={{ borderRadius: 5, marginBottom: 5 }}
                        key={index}
                        onClick={() => filterDepartment(category)}
                      >
                        {category}
                      </p>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div style={{ marginTop: 20 }}>
              <h4 style={{ fontWeight: "bold" }}>Price</h4>
              {/* <div className="price-range-wrap" style={{width:200}}>
                                <div className="price-range ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content"
                                    data-min="10" data-max="540">
                                    <div className="ui-slider-range ui-corner-all ui-widget-header"></div>
                                    <span tabindex="0" className="ui-slider-handle ui-corner-all ui-state-default"></span>
                                    <span tabindex="0" className="ui-slider-handle ui-corner-all ui-state-default"></span>
                                </div>
                                <div className="range-slider">
                                    <div className="price-input">
                                        <input type="text" id="minamount"/>
                                        <input type="text" id="maxamount"/>
                                    </div>
                                </div>
                            </div> */}
              <div
                style={{
                  marginLeft: -10,
                  display: "block",
                  width: 220,
                  color: "red",
                }}
              >
                <Slider
                  value={value}
                  onChange={rangeSelector}
                  valueLabelDisplay="auto"
                  color="secondary"
                />
                <div style={{ fontWeight: "1000", marginLeft: 20 }}>
                  ${value[0]} - ${value[1]}
                </div>
              </div>
            </div>
            <div>
              <h4
                style={{ fontWeight: "bold", marginBottom: 20, marginTop: 20 }}
              >
                Colors
              </h4>
              <div className="color">
                {categories.map((category, index) => {
                  return (
                    <button
                      style={{
                        borderColor: "#fff",
                        marginLeft: -220,
                        border: "0px",
                        backgroundColor: "#fff",
                      }}
                      key={index}
                      onClick={() => filterItems(category)}
                    >
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <div
                          style={{
                            border: "7px solid ",
                            color: category,
                            borderRadius: "50%",
                            marginRight: 5,
                          }}
                        ></div>
                        {category}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
            <div className="sidebar__item" style={{ marginTop: 20 }}>
              <h4>Popular Size</h4>
              <div className="sidebar__item__size">
                {sizes.map((category, index) => {
                  return (
                    <button
                      style={{ marginLeft: 5, color: "grey", border: "0px" }}
                      key={index}
                      onClick={() => filterSizes(category)}
                    >
                      {category}
                    </button>
                  );
                })}
              </div>
            </div>
            <div>
              <h4 style={{ marginBottom: -60, fontWeight: "bold" }}>
                Latest Products
              </h4>
            </div>
            <div style={{ marginLeft: -450 }}>
              <LatestProducts />
            </div>
          </div>

          <div className="products" style={{ marginLeft: 350 }}>
            <div className="filter__sort">
              <div
                style={{ border: "1px solid #f0f0f0", marginBottom: 50 }}
              ></div>
              <span>Sort By</span>
              <select>
                <option value="0">Default</option>
                <option value="0">Default</option>
              </select>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="filter__found">
                <h6>
                  <span>{menuItems.length}</span> Products found
                </h6>
              </div>
            </div>
            <div className="categories">
              {menuItems.map((product) => {
                const { id, image, name, price, color } = product;
                return (
                  <div key={id}>
                    <div className="product__item">
                      <div className="product__item__pic set-bg">
                        <Link to={"/shop/" + id}>
                          <div
                            className="product__item__pic set-bg"
                            style={{ backgroundImage: `url(${image})` }}
                          />
                        </Link>
                        <ul className="product__item__pic__hover">
                          <li>
                            <a>
                              <i className="fa fa-heart"></i>
                            </a>
                          </li>
                          <li>
                            <a>
                              <i className="fa fa-retweet"></i>
                            </a>
                          </li>
                          <li>
                            <a>
                              <i
                                className="fa fa-shopping-cart"
                                onClick={() => AddCart(products[id - 1])}
                              ></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="product__item__text">
                        <h6>
                          <a href="#">{name}</a>
                        </h6>
                        <h5>${price}</h5>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="product__pagination">
              <a href="#">1</a>
              <a href="#">2</a>
              <a href="#">3</a>
              <a href="#">
                <i className="fa fa-long-arrow-right"></i>
              </a>
            </div>
            <div />
          </div>
        </div>
      </section>
    </div>
  );
}
const mapDispatchToProps = (dispatch) => ({
  AddCart: (item) => dispatch(AddCart(item)),
});

export default connect(null, mapDispatchToProps)(ShopCategory);
