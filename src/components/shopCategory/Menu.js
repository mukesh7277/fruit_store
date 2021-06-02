import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/shop/productActions";
import { connect } from "react-redux";
import { AddCart } from "../../redux/cart/action";
import BreadCrumb from "../BreadCrumb";

function Menu({ match, AddCart }) {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);

  console.log(products[match.params.id - 1].items[0].name);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  return (
    <section className="product-details spad" style={{ marginTop: -80 }}>
      <BreadCrumb />
      <div className="container" style={{ marginTop: 55 }}>
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div className="product__details__pic">
              <div className="product__details__pic__item">
                <img
                  className="product__details__pic__item--large"
                  style={{ height: 500 }}
                  src={products[match.params.id - 1].items[0].image}
                  alt=""
                />
              </div>
              <div className="product__details__pic__slider owl-carousel">
                <img
                  data-imgbigurl="img/product/details/product-details-2.jpg"
                  src="img/product/details/thumb-1.jpg"
                  alt=""
                />
                <img
                  data-imgbigurl="img/product/details/product-details-3.jpg"
                  src="img/product/details/thumb-2.jpg"
                  alt=""
                />
                <img
                  data-imgbigurl="img/product/details/product-details-5.jpg"
                  src="img/product/details/thumb-3.jpg"
                  alt=""
                />
                <img
                  data-imgbigurl="img/product/details/product-details-4.jpg"
                  src="img/product/details/thumb-4.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="product__details__text">
              <h3>{products[match.params.id - 1].items[0].name}</h3>
              <div className="product__details__rating">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star-half-o"></i>
                <span>(18 reviews)</span>
              </div>
              <div className="product__details__price">
                ${products[match.params.id - 1].items[0].price}
              </div>
              <p>
                Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
                Vestibulum ac diam sit amet quam vehicula elementum sed sit amet
                dui. Sed porttitor lectus nibh. Vestibulum ac diam sit amet quam
                vehicula elementum sed sit amet dui. Proin eget tortor risus.
              </p>
              <div className="product__details__quantity">
                <div className="quantity">
                  <div className="pro-qty">
                    <input type="text" value="1" />
                  </div>
                </div>
              </div>
              {/* add */}
              <span
                onClick={() => AddCart(products[match.params.id - 1])}
                className="primary-btn"
              >
                ADD TO CARD
              </span>
              <a href="#" className="heart-icon">
                <span className="icon_heart_alt"></span>
              </a>
              <ul>
                <li>
                  <b>Availability</b> <span>In Stock</span>
                </li>
                <li>
                  <b>Shipping</b>{" "}
                  <span>
                    01 day shipping. <samp>Free pickup today</samp>
                  </span>
                </li>
                <li>
                  <b>Weight</b> <span>0.5 kg</span>
                </li>
                <li>
                  <b>Share on</b>
                  <div className="share">
                    <a href="#">
                      <i className="fa fa-facebook"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-twitter"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-instagram"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-pinterest"></i>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="product__details__tab">
              <ul className="nav nav-tabs" role="tablist">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    data-toggle="tab"
                    href="#tabs-1"
                    role="tab"
                    aria-selected="true"
                  >
                    Description
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-toggle="tab"
                    href="#tabs-2"
                    role="tab"
                    aria-selected="false"
                  >
                    Information
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-toggle="tab"
                    href="#tabs-3"
                    role="tab"
                    aria-selected="false"
                  >
                    Reviews <span>(1)</span>
                  </a>
                </li>
              </ul>
              <div className="tab-content">
                <div className="tab-pane active" id="tabs-1" role="tabpanel">
                  <div className="product__details__tab__desc">
                    <h6>Products Infomation</h6>
                    <p>
                      Vestibulum ac diam sit amet quam vehicula elementum sed
                      sit amet dui. Pellentesque in ipsum id orci porta dapibus.
                      Proin eget tortor risus. Vivamus suscipit tortor eget
                      felis porttitor volutpat. Vestibulum ac diam sit amet quam
                      vehicula elementum sed sit amet dui. Donec rutrum congue
                      leo eget malesuada. Vivamus suscipit tortor eget felis
                      porttitor volutpat. Curabitur arcu erat, accumsan id
                      imperdiet et, porttitor at sem. Praesent sapien massa,
                      convallis a pellentesque nec, egestas non nisi. Vestibulum
                      ac diam sit amet quam vehicula elementum sed sit amet dui.
                      Vestibulum ante ipsum primis in faucibus orci luctus et
                      ultrices posuere cubilia Curae; Donec velit neque, auctor
                      sit amet aliquam vel, ullamcorper sit amet ligula. Proin
                      eget tortor risus.
                    </p>
                    <p>
                      Praesent sapien massa, convallis a pellentesque nec,
                      egestas non nisi. Lorem ipsum dolor sit amet, consectetur
                      adipiscing elit. Mauris blandit aliquet elit, eget
                      tincidunt nibh pulvinar a. Cras ultricies ligula sed magna
                      dictum porta. Cras ultricies ligula sed magna dictum
                      porta. Sed porttitor lectus nibh. Mauris blandit aliquet
                      elit, eget tincidunt nibh pulvinar a. Vestibulum ac diam
                      sit amet quam vehicula elementum sed sit amet dui. Sed
                      porttitor lectus nibh. Vestibulum ac diam sit amet quam
                      vehicula elementum sed sit amet dui. Proin eget tortor
                      risus.
                    </p>
                  </div>
                </div>
                <div className="tab-pane" id="tabs-2" role="tabpanel">
                  <div className="product__details__tab__desc">
                    <h6>Products Infomation</h6>
                    <p>
                      Vestibulum ac diam sit amet quam vehicula elementum sed
                      sit amet dui. Pellentesque in ipsum id orci porta dapibus.
                      Proin eget tortor risus. Vivamus suscipit tortor eget
                      felis porttitor volutpat. Vestibulum ac diam sit amet quam
                      vehicula elementum sed sit amet dui. Donec rutrum congue
                      leo eget malesuada. Vivamus suscipit tortor eget felis
                      porttitor volutpat. Curabitur arcu erat, accumsan id
                      imperdiet et, porttitor at sem. Praesent sapien massa,
                      convallis a pellentesque nec, egestas non nisi. Vestibulum
                      ac diam sit amet quam vehicula elementum sed sit amet dui.
                      Vestibulum ante ipsum primis in faucibus orci luctus et
                      ultrices posuere cubilia Curae; Donec velit neque, auctor
                      sit amet aliquam vel, ullamcorper sit amet ligula. Proin
                      eget tortor risus.
                    </p>
                    <p>
                      Praesent sapien massa, convallis a pellentesque nec,
                      egestas non nisi. Lorem ipsum dolor sit amet, consectetur
                      adipiscing elit. Mauris blandit aliquet elit, eget
                      tincidunt nibh pulvinar a. Cras ultricies ligula sed magna
                      dictum porta. Cras ultricies ligula sed magna dictum
                      porta. Sed porttitor lectus nibh. Mauris blandit aliquet
                      elit, eget tincidunt nibh pulvinar a.
                    </p>
                  </div>
                </div>
                <div className="tab-pane" id="tabs-3" role="tabpanel">
                  <div className="product__details__tab__desc">
                    <h6>Products Infomation</h6>
                    <p>
                      Vestibulum ac diam sit amet quam vehicula elementum sed
                      sit amet dui. Pellentesque in ipsum id orci porta dapibus.
                      Proin eget tortor risus. Vivamus suscipit tortor eget
                      felis porttitor volutpat. Vestibulum ac diam sit amet quam
                      vehicula elementum sed sit amet dui. Donec rutrum congue
                      leo eget malesuada. Vivamus suscipit tortor eget felis
                      porttitor volutpat. Curabitur arcu erat, accumsan id
                      imperdiet et, porttitor at sem. Praesent sapien massa,
                      convallis a pellentesque nec, egestas non nisi. Vestibulum
                      ac diam sit amet quam vehicula elementum sed sit amet dui.
                      Vestibulum ante ipsum primis in faucibus orci luctus et
                      ultrices posuere cubilia Curae; Donec velit neque, auctor
                      sit amet aliquam vel, ullamcorper sit amet ligula. Proin
                      eget tortor risus.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const mapDispatchToProps = (dispatch) => ({
  AddCart: (item) => dispatch(AddCart(item)),
});
export default connect(null, mapDispatchToProps)(Menu);
