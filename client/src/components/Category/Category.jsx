import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Category.css";
import pro from '../../asset/images/product-7.jpg'
const Category = () => {
  return (
    <div>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title />
      <link rel="shortcut icon" href="./assets/favicon/favicon.ico" />
      <link rel="stylesheet" href="styles.css" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Jost:wght@100;200;300;400;500;600;700;800;900&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx"
        crossOrigin="anonymous"
      />
      <div className="py-11">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-4 col-lg-3">
              <form className="mb-10 mb-md-0">
                <ul className="nav nav-vertical" id="filterNav">
                  <li className="nav-item">
                    <a
                      className="nav-link dropdown-toggle fs-lg text-reset border-bottom mb-6 collapsed"
                      data-bs-toggle="collapse"
                      href="#categoryCollapse"
                      aria-expanded="false"
                    >
                      Category
                    </a>
                    <div className="collapse" id="categoryCollapse" style={{}}>
                      <div className="form-group">
                        <ul className="list-styled mb-0" id="productsNav">
                          <li className="list-styled-item">
                            <a className="list-styled-link" href="#">
                              All Products
                            </a>
                          </li>
                          <li className="list-styled-item">
                            <a
                              className="list-styled-link collapsed"
                              data-bs-toggle="collapse"
                              href="#blousesCollapse"
                              aria-expanded="false"
                            >
                              {" "}
                              Blouses and Shirts{" "}
                            </a>
                            <div
                              className="collapse show"
                              id="blousesCollapse"
                              data-bs-parent="#productsNav"
                              style={{}}
                            >
                              <div className="py-4 ps-5">
                                <div className="form-check mb-3">
                                  <input
                                    className="form-check-input"
                                    id="blousesOne"
                                    type="checkbox"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="blousesOne"
                                  >
                                    {" "}
                                    Women Tops, Tees, Blouses{" "}
                                  </label>
                                </div>
                                <div className="form-check mb-3">
                                  <input
                                    className="form-check-input"
                                    id="blousesTwo"
                                    type="checkbox"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="blousesTwo"
                                  >
                                    {" "}
                                    Petite{" "}
                                  </label>
                                </div>
                                <div className="form-check mb-3">
                                  <input
                                    className="form-check-input"
                                    id="blousesThree"
                                    type="checkbox"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="blousesThree"
                                  >
                                    {" "}
                                    Petite-Size Blouses &amp; Button-Down Shirts
                                  </label>
                                </div>
                                <div className="form-check">
                                  <input
                                    className="form-check-input"
                                    id="blousesFour"
                                    type="checkbox"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="blousesFour"
                                  >
                                    {" "}
                                    Women Plus Tops &amp; Tees{" "}
                                  </label>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li className="list-styled-item">
                            <a
                              className="list-styled-link collapsed"
                              data-bs-toggle="collapse"
                              href="#coatsCollapse"
                              aria-expanded="false"
                            >
                              {" "}
                              Coats and Jackets{" "}
                            </a>
                            <div
                              className="collapse"
                              id="coatsCollapse"
                              data-bs-parent="#productsNav"
                              style={{}}
                            >
                              <div className="py-4 ps-5">
                                <div className="form-check mb-3">
                                  <input
                                    className="form-check-input"
                                    id="coatsOne"
                                    type="checkbox"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="coatsOne"
                                  >
                                    {" "}
                                    Coats, Jackets &amp; Vests{" "}
                                  </label>
                                </div>
                                <div className="form-check mb-3">
                                  <input
                                    className="form-check-input"
                                    id="coatsTwo"
                                    type="checkbox"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="coatsTwo"
                                  >
                                    {" "}
                                    Down Jackets &amp; Parkas{" "}
                                  </label>
                                </div>
                                <div className="form-check">
                                  <input
                                    className="form-check-input"
                                    id="coatsThree"
                                    type="checkbox"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="coatsThree"
                                  >
                                    {" "}
                                    Wool &amp; Pea Coats Plus-Size{" "}
                                  </label>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li className="list-styled-item">
                            <a
                              className="list-styled-link collapsed"
                              data-bs-toggle="collapse"
                              href="#dressesCollapse"
                              aria-expanded="false"
                            >
                              {" "}
                              Dresses{" "}
                            </a>
                            <div
                              className="collapse"
                              id="dressesCollapse"
                              data-bs-parent="#productsNav"
                              style={{}}
                            >
                              <div className="py-4 ps-5">
                                <div className="form-check mb-3">
                                  <input
                                    className="form-check-input"
                                    id="dressesOne"
                                    type="checkbox"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="dressesOne"
                                  >
                                    {" "}
                                    A-line Dresses{" "}
                                  </label>
                                </div>
                                <div className="form-check mb-3">
                                  <input
                                    className="form-check-input"
                                    id="dressesTwo"
                                    type="checkbox"
                                    defaultChecked
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="dressesTwo"
                                  >
                                    {" "}
                                    Shift Dresses{" "}
                                  </label>
                                </div>
                                <div className="form-check mb-3">
                                  <input
                                    className="form-check-input"
                                    id="dressesThree"
                                    type="checkbox"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="dressesThree"
                                  >
                                    {" "}
                                    Wrap Dresses{" "}
                                  </label>
                                </div>
                                <div className="form-check">
                                  <input
                                    className="form-check-input"
                                    id="dressesFour"
                                    type="checkbox"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="dressesFour"
                                  >
                                    {" "}
                                    Maxi Dresses{" "}
                                  </label>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li className="list-styled-item">
                            <a
                              className="list-styled-link collapsed"
                              data-bs-toggle="collapse"
                              href="#hoodiesCollapse"
                              aria-expanded="false"
                            >
                              {" "}
                              Hoodies and Sweats{" "}
                            </a>
                            <div
                              className="collapse"
                              id="hoodiesCollapse"
                              data-bs-parent="#productsNav"
                              style={{}}
                            >
                              <div className="py-4 ps-5">
                                <div className="form-check mb-3">
                                  <input
                                    className="form-check-input"
                                    id="hoodiesOne"
                                    type="checkbox"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="hoodiesOne"
                                  >
                                    {" "}
                                    Activewear{" "}
                                  </label>
                                </div>
                                <div className="form-check mb-3">
                                  <input
                                    className="form-check-input"
                                    id="hoodiesTwo"
                                    type="checkbox"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="hoodiesTwo"
                                  >
                                    {" "}
                                    Fashion Hoodies &amp; Sweatshirts{" "}
                                  </label>
                                </div>
                                <div className="form-check mb-3">
                                  <input
                                    className="form-check-input"
                                    id="hoodiesThree"
                                    type="checkbox"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="hoodiesThree"
                                  >
                                    {" "}
                                    Big &amp; Tall Sweatshirts{" "}
                                  </label>
                                </div>
                                <div className="form-check">
                                  <input
                                    className="form-check-input"
                                    id="hoodiesFour"
                                    type="checkbox"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="hoodiesFour"
                                  >
                                    {" "}
                                    Big &amp; Tall Fashion Hoodies{" "}
                                  </label>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li className="list-styled-item">
                            <a
                              className="list-styled-link collapsed"
                              data-bs-toggle="collapse"
                              href="#denimCollapse"
                              aria-expanded="false"
                            >
                              {" "}
                              Denim{" "}
                            </a>
                            <div
                              className="collapse"
                              id="denimCollapse"
                              data-bs-parent="#productsNav"
                            >
                              <div className="py-4 ps-5">
                                <div className="form-check mb-3">
                                  <input
                                    className="form-check-input"
                                    id="denimOne"
                                    type="checkbox"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="denimOne"
                                  >
                                    {" "}
                                    Women Shorts{" "}
                                  </label>
                                </div>
                                <div className="form-check mb-3">
                                  <input
                                    className="form-check-input"
                                    id="denimTwo"
                                    type="checkbox"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="denimTwo"
                                  >
                                    {" "}
                                    Juniors' Shorts{" "}
                                  </label>
                                </div>
                                <div className="form-check mb-3">
                                  <input
                                    className="form-check-input"
                                    id="denimThree"
                                    type="checkbox"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="denimThree"
                                  >
                                    {" "}
                                    Petite{" "}
                                  </label>
                                </div>
                                <div className="form-check">
                                  <input
                                    className="form-check-input"
                                    id="denimFour"
                                    type="checkbox"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="denimFour"
                                  >
                                    {" "}
                                    Women Plus Shorts{" "}
                                  </label>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li className="list-styled-item">
                            <a
                              className="list-styled-link collapsed"
                              data-bs-toggle="collapse"
                              href="#jeansCollapse"
                              aria-expanded="false"
                            >
                              {" "}
                              Jeans{" "}
                            </a>
                            <div
                              className="collapse"
                              id="jeansCollapse"
                              data-bs-parent="#productsNav"
                              style={{}}
                            >
                              <div className="py-4 ps-5">
                                <div className="form-check mb-3">
                                  <input
                                    className="form-check-input"
                                    id="jeansOne"
                                    type="checkbox"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="jeansOne"
                                  >
                                    {" "}
                                    Men Jeans{" "}
                                  </label>
                                </div>
                                <div className="form-check mb-3">
                                  <input
                                    className="form-check-input"
                                    id="jeansTwo"
                                    type="checkbox"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="jeansTwo"
                                  >
                                    {" "}
                                    Men Big &amp; Tall Jeans{" "}
                                  </label>
                                </div>
                                <div className="form-check mb-3">
                                  <input
                                    className="form-check-input"
                                    id="jeansThree"
                                    type="checkbox"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="jeansThree"
                                  >
                                    {" "}
                                    Surf, Skate &amp; Street Clothing{" "}
                                  </label>
                                </div>
                                <div className="form-check">
                                  <input
                                    className="form-check-input"
                                    id="jeansFour"
                                    type="checkbox"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="jeansFour"
                                  >
                                    {" "}
                                    Men Big &amp; Tall Pants{" "}
                                  </label>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li className="list-styled-item">
                            <a
                              className="list-styled-link collapsed"
                              data-bs-toggle="collapse"
                              href="#jumpersCollapse"
                              aria-expanded="false"
                            >
                              {" "}
                              Jumpers and Cardigans{" "}
                            </a>
                            <div
                              className="collapse"
                              id="jumpersCollapse"
                              data-bs-parent="#productsNav"
                            >
                              <div className="py-4 ps-5">
                                <div className="form-check mb-3">
                                  <input
                                    className="form-check-input"
                                    id="jumpersOne"
                                    type="checkbox"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="jumpersOne"
                                  >
                                    {" "}
                                    Sweaters Plus-Size{" "}
                                  </label>
                                </div>
                                <div className="form-check mb-3">
                                  <input
                                    className="form-check-input"
                                    id="jumpersTwo"
                                    type="checkbox"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="jumpersTwo"
                                  >
                                    {" "}
                                    Plus Sweaters{" "}
                                  </label>
                                </div>
                                <div className="form-check mb-3">
                                  <input
                                    className="form-check-input"
                                    id="jumpersThree"
                                    type="checkbox"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="jumpersThree"
                                  >
                                    {" "}
                                    Petite Cardigans{" "}
                                  </label>
                                </div>
                                <div className="form-check">
                                  <input
                                    className="form-check-input"
                                    id="jumpersFour"
                                    type="checkbox"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="jumpersFour"
                                  >
                                    {" "}
                                    Tops, Tees &amp; Blouses{" "}
                                  </label>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li className="list-styled-item">
                            <a
                              className="list-styled-link collapsed"
                              data-bs-toggle="collapse"
                              href="#legginsCollapse"
                              aria-expanded="false"
                            >
                              {" "}
                              Leggings{" "}
                            </a>
                            <div
                              className="collapse"
                              id="legginsCollapse"
                              data-bs-parent="#productsNav"
                            >
                              <div className="py-4 ps-5">
                                <div className="form-check mb-3">
                                  <input
                                    className="form-check-input"
                                    id="legginsOne"
                                    type="checkbox"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="legginsOne"
                                  >
                                    {" "}
                                    Novelty Leggings{" "}
                                  </label>
                                </div>
                                <div className="form-check mb-3">
                                  <input
                                    className="form-check-input"
                                    id="legginsTwo"
                                    type="checkbox"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="legginsTwo"
                                  >
                                    {" "}
                                    Novelty Pants &amp; Capris{" "}
                                  </label>
                                </div>
                                <div className="form-check mb-3">
                                  <input
                                    className="form-check-input"
                                    id="legginsThree"
                                    type="checkbox"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="legginsThree"
                                  >
                                    {" "}
                                    Women Yoga Leggings{" "}
                                  </label>
                                </div>
                                <div className="form-check">
                                  <input
                                    className="form-check-input"
                                    id="legginsFour"
                                    type="checkbox"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="legginsFour"
                                  >
                                    {" "}
                                    Workout &amp; Training Leggings{" "}
                                  </label>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link dropdown-toggle fs-lg text-reset border-bottom mb-6"
                      data-bs-toggle="collapse"
                      href="#sizeCollapse"
                    >
                      Size
                    </a>
                    <div
                      className="collapse"
                      id="sizeCollapse"
                      data-simplebar-collapse="#sizeGroup"
                    >
                      <div
                        className="form-group form-group-overlow mb-6"
                        id="sizeGroup"
                        data-simplebar="init"
                      >
                        <div
                          className="simplebar-wrapper"
                          style={{ margin: "0px" }}
                        >
                          <div className="simplebar-height-auto-observer-wrapper">
                            <div className="simplebar-height-auto-observer" />
                          </div>
                          <div className="simplebar-mask">
                            <div
                              className="simplebar-offset"
                              style={{ right: "0px", bottom: "0px" }}
                            >
                              <div
                                className="simplebar-content-wrapper"
                                tabIndex={0}
                                role="region"
                                aria-label="scrollable content"
                                style={{ height: "auto", overflow: "hidden" }}
                              >
                                <div
                                  className="simplebar-content"
                                  style={{ padding: "0px" }}
                                >
                                  <div className="form-check form-check-inline form-check-size mb-2">
                                    <input
                                      className="form-check-input"
                                      id="sizeOne"
                                      type="checkbox"
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="sizeOne"
                                    >
                                      {" "}
                                      3XS{" "}
                                    </label>
                                  </div>
                                  <div className="form-check form-check-inline form-check-size mb-2">
                                    <input
                                      className="form-check-input"
                                      id="sizeTwo"
                                      type="checkbox"
                                      disabled
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="sizeTwo"
                                    >
                                      {" "}
                                      2XS{" "}
                                    </label>
                                  </div>
                                  <div className="form-check form-check-inline form-check-size mb-2">
                                    <input
                                      className="form-check-input"
                                      id="sizeThree"
                                      type="checkbox"
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="sizeThree"
                                    >
                                      {" "}
                                      XS{" "}
                                    </label>
                                  </div>
                                  <div className="form-check form-check-inline form-check-size mb-2">
                                    <input
                                      className="form-check-input"
                                      id="sizeFour"
                                      type="checkbox"
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="sizeFour"
                                    >
                                      {" "}
                                      S{" "}
                                    </label>
                                  </div>
                                  <div className="form-check form-check-inline form-check-size mb-2">
                                    <input
                                      className="form-check-input"
                                      id="sizeFive"
                                      type="checkbox"
                                      defaultChecked
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="sizeFive"
                                    >
                                      {" "}
                                      M{" "}
                                    </label>
                                  </div>
                                  <div className="form-check form-check-inline form-check-size mb-2">
                                    <input
                                      className="form-check-input"
                                      id="sizeSix"
                                      type="checkbox"
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="sizeSix"
                                    >
                                      {" "}
                                      L{" "}
                                    </label>
                                  </div>
                                  <div className="form-check form-check-inline form-check-size mb-2">
                                    <input
                                      className="form-check-input"
                                      id="sizeSeven"
                                      type="checkbox"
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="sizeSeven"
                                    >
                                      {" "}
                                      XL{" "}
                                    </label>
                                  </div>
                                  <div className="form-check form-check-inline form-check-size mb-2">
                                    <input
                                      className="form-check-input"
                                      id="sizeEight"
                                      type="checkbox"
                                      disabled
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="sizeEight"
                                    >
                                      {" "}
                                      2XL{" "}
                                    </label>
                                  </div>
                                  <div className="form-check form-check-inline form-check-size mb-2">
                                    <input
                                      className="form-check-input"
                                      id="sizeNine"
                                      type="checkbox"
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="sizeNine"
                                    >
                                      {" "}
                                      3XL{" "}
                                    </label>
                                  </div>
                                  <div className="form-check form-check-inline form-check-size mb-2">
                                    <input
                                      className="form-check-input"
                                      id="sizeTen"
                                      type="checkbox"
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="sizeTen"
                                    >
                                      {" "}
                                      4XL{" "}
                                    </label>
                                  </div>
                                  <div className="form-check form-check-inline form-check-size mb-2">
                                    <input
                                      className="form-check-input"
                                      id="sizeEleven"
                                      type="checkbox"
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="sizeEleven"
                                    >
                                      {" "}
                                      One Size{" "}
                                    </label>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="simplebar-placeholder"
                            style={{ width: "auto", height: "200px" }}
                          />
                        </div>
                        <div
                          className="simplebar-track simplebar-horizontal"
                          style={{ visibility: "hidden" }}
                        >
                          <div
                            className="simplebar-scrollbar"
                            style={{ width: "0px", display: "none" }}
                          />
                        </div>
                        <div
                          className="simplebar-track simplebar-vertical"
                          style={{ visibility: "hidden" }}
                        >
                          <div
                            className="simplebar-scrollbar"
                            style={{ height: "0px", display: "none" }}
                          />
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link dropdown-toggle fs-lg text-reset border-bottom mb-6 collapsed"
                      data-bs-toggle="collapse"
                      href="#colorCollapse"
                      aria-expanded="false"
                    >
                      {" "}
                      Color{" "}
                    </a>
                    <div
                      className="collapse"
                      id="colorCollapse"
                      data-simplebar-collapse="#colorGroup"
                      style={{}}
                    >
                      <div
                        className="form-group form-group-overflow mb-6"
                        id="colorGroup"
                        data-simplebar="init"
                      >
                        <div
                          className="simplebar-wrapper"
                          style={{ margin: "0px" }}
                        >
                          <div className="simplebar-height-auto-observer-wrapper">
                            <div className="simplebar-height-auto-observer" />
                          </div>
                          <div className="simplebar-mask">
                            <div
                              className="simplebar-offset"
                              style={{ right: "0px", bottom: "0px" }}
                            >
                              <div
                                className="simplebar-content-wrapper"
                                tabIndex={0}
                                role="region"
                                aria-label="scrollable content"
                                style={{
                                  height: "auto",
                                  overflow: "hidden scroll",
                                }}
                              >
                                <div
                                  className="simplebar-content"
                                  style={{ padding: "0px" }}
                                >
                                  <div className="form-check form-check-color mb-3">
                                    <input
                                      className="form-check-input"
                                      id="colorOne"
                                      type="checkbox"
                                      style={{ backgroundColor: "black" }}
                                    />
                                    <label
                                      className="form-check-label text-body"
                                      htmlFor="colorOne"
                                    >
                                      {" "}
                                      Black{" "}
                                    </label>
                                  </div>
                                  <div className="form-check form-check-color mb-3">
                                    <input
                                      className="form-check-input"
                                      id="colorTwo"
                                      type="checkbox"
                                      style={{ backgroundColor: "#f9f9f9" }}
                                      defaultChecked
                                    />
                                    <label
                                      className="form-check-label text-body"
                                      htmlFor="colorTwo"
                                    >
                                      {" "}
                                      White{" "}
                                    </label>
                                  </div>
                                  <div className="form-check form-check-color mb-3">
                                    <input
                                      className="form-check-input"
                                      id="colorThree"
                                      type="checkbox"
                                      style={{ backgroundColor: "#3b86ff" }}
                                    />
                                    <label
                                      className="form-check-label text-body"
                                      htmlFor="colorThree"
                                    >
                                      {" "}
                                      Blue{" "}
                                    </label>
                                  </div>
                                  <div className="form-check form-check-color mb-3">
                                    <input
                                      className="form-check-input"
                                      id="colorFour"
                                      type="checkbox"
                                      style={{ backgroundColor: "#ff6f61" }}
                                    />
                                    <label
                                      className="form-check-label text-body"
                                      htmlFor="colorFour"
                                    >
                                      {" "}
                                      Red{" "}
                                    </label>
                                  </div>
                                  <div className="form-check form-check-color mb-3">
                                    <input
                                      className="form-check-input"
                                      id="colorFive"
                                      type="checkbox"
                                      style={{ backgroundColor: "#614124" }}
                                      disabled
                                    />
                                    <label
                                      className="form-check-label text-body"
                                      htmlFor="colorFive"
                                    >
                                      {" "}
                                      Brown{" "}
                                    </label>
                                  </div>
                                  <div className="form-check form-check-color mb-3">
                                    <input
                                      className="form-check-input"
                                      id="colorSix"
                                      type="checkbox"
                                      style={{ backgroundColor: "#bababa" }}
                                    />
                                    <label
                                      className="form-check-label text-body"
                                      htmlFor="colorSix"
                                    >
                                      {" "}
                                      Gray{" "}
                                    </label>
                                  </div>
                                  <div className="form-check form-check-color mb-3">
                                    <input
                                      className="form-check-input"
                                      id="colorSeven"
                                      type="checkbox"
                                      style={{ backgroundColor: "#17a2b8" }}
                                    />
                                    <label
                                      className="form-check-label text-body"
                                      htmlFor="colorSeven"
                                    >
                                      {" "}
                                      Cyan{" "}
                                    </label>
                                  </div>
                                  <div className="form-check form-check-color mb-3">
                                    <input
                                      className="form-check-input"
                                      id="colorEight"
                                      type="checkbox"
                                      style={{ backgroundColor: "#e83e8c" }}
                                    />
                                    <label
                                      className="form-check-label text-body"
                                      htmlFor="colorEight"
                                    >
                                      {" "}
                                      Pink{" "}
                                    </label>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="simplebar-placeholder"
                            style={{ width: "auto", height: "276px" }}
                          />
                        </div>
                        <div
                          className="simplebar-track simplebar-horizontal"
                          style={{ visibility: "hidden" }}
                        >
                          <div
                            className="simplebar-scrollbar"
                            style={{ width: "0px", display: "none" }}
                          />
                        </div>
                        <div
                          className="simplerbar-track simplebar-vertical"
                          style={{ visibility: "visible" }}
                        >
                          <div
                            className="simplebar-scrollbar"
                            style={{
                              height: "226px",
                              transform: "translate3d(0px, 24px, 0px)",
                              display: "block",
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link dropdown-toggle fs-lg text-reset border-bottom mb-6 collapsed"
                      data-bs-toggle="collapse"
                      href="#brandCollapse"
                      aria-expanded="false"
                    >
                      {" "}
                      Brand{" "}
                    </a>
                    <div
                      className="collapse"
                      id="brandCollapse"
                      data-simplebar-collapse="#brandGroup"
                      style={{}}
                    >
                      <div>
                        <div className="input-group input-group-merge mb-6">
                          <input
                            className="form-control form-control-xs search"
                            type="search"
                            placeholder="Search Brand"
                          />
                          <div className="input-group-append">
                            <button className="btn btn-outline-border btn-xs">
                              <img src="images/search-icon.svg" alt="" />
                            </button>
                          </div>
                        </div>
                        <div
                          className="form-group form-group-overflow mb-6"
                          id="brandGroup"
                          data-simplebar="init"
                        >
                          <div
                            className="simplebar-wrapper"
                            style={{ margin: "0px" }}
                          >
                            <div className="simplebar-height-auto-observer-wrapper">
                              <div className="simplebar-height-auto-observer" />
                            </div>
                            <div className="simplebar-mask">
                              <div
                                className="simplebar-offset"
                                style={{ right: "0px", bottom: "0px" }}
                              >
                                <div
                                  className="simplebar-content-wrapper"
                                  tabIndex={0}
                                  role="region"
                                  aria-label="scrollable content"
                                  style={{
                                    height: "auto",
                                    overflow: "hidden scroll",
                                  }}
                                >
                                  <div
                                    className="simplebar-content"
                                    style={{ padding: "0px" }}
                                  >
                                    <div className="list">
                                      <div className="form-check mb-3">
                                        <input
                                          className="form-check-input"
                                          id="brandOne"
                                          type="checkbox"
                                        />
                                        <label
                                          className="form-check-label name"
                                          htmlFor="brandOne"
                                        >
                                          {" "}
                                          Dsquared2{" "}
                                        </label>
                                      </div>
                                      <div className="form-check mb-3">
                                        <input
                                          className="form-check-input"
                                          id="brandTwo"
                                          type="checkbox"
                                          disabled
                                        />
                                        <label
                                          className="form-check-label name"
                                          htmlFor="brandTwo"
                                        >
                                          {" "}
                                          Alexander McQueen{" "}
                                        </label>
                                      </div>
                                      <div className="form-check mb-3">
                                        <input
                                          className="form-check-input"
                                          id="brandThree"
                                          type="checkbox"
                                        />
                                        <label
                                          className="form-check-label name"
                                          htmlFor="brandThree"
                                        >
                                          {" "}
                                          Balenciaga{" "}
                                        </label>
                                      </div>
                                      <div className="form-check mb-3">
                                        <input
                                          className="form-check-input"
                                          id="brandFour"
                                          type="checkbox"
                                          defaultChecked
                                        />
                                        <label
                                          className="form-check-label name"
                                          htmlFor="brandFour"
                                        >
                                          {" "}
                                          Adidas{" "}
                                        </label>
                                      </div>
                                      <div className="form-check mb-3">
                                        <input
                                          className="form-check-input"
                                          id="brandFive"
                                          type="checkbox"
                                        />
                                        <label
                                          className="form-check-label name"
                                          htmlFor="brandFive"
                                        >
                                          {" "}
                                          Balmain{" "}
                                        </label>
                                      </div>
                                      <div className="form-check mb-3">
                                        <input
                                          className="form-check-input"
                                          id="brandSix"
                                          type="checkbox"
                                        />
                                        <label
                                          className="form-check-label name"
                                          htmlFor="brandSix"
                                        >
                                          {" "}
                                          Burberry{" "}
                                        </label>
                                      </div>
                                      <div className="form-check mb-3">
                                        <input
                                          className="form-check-input"
                                          id="brandSeven"
                                          type="checkbox"
                                        />
                                        <label
                                          className="form-check-label name"
                                          htmlFor="brandSeven"
                                        >
                                          {" "}
                                          Chloé{" "}
                                        </label>
                                      </div>
                                      <div className="form-check mb-3">
                                        <input
                                          className="form-check-input"
                                          id="brandEight"
                                          type="checkbox"
                                        />
                                        <label
                                          className="form-check-label name"
                                          htmlFor="brandEight"
                                        >
                                          {" "}
                                          Kenzo{" "}
                                        </label>
                                      </div>
                                      <div className="form-check mb-3">
                                        <input
                                          className="form-check-input"
                                          id="brandNine"
                                          type="checkbox"
                                        />
                                        <label
                                          className="form-check-label name"
                                          htmlFor="brandNine"
                                        >
                                          {" "}
                                          Givenchy{" "}
                                        </label>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="simplebar-placeholder"
                              style={{ width: "auto", height: "312px" }}
                            />
                          </div>
                          <div
                            className="simplebar-track simplebar-horizontal"
                            style={{ visibility: "hidden" }}
                          >
                            <div
                              className="simplebar-scrollbar"
                              style={{ width: "0px", display: "none" }}
                            />
                          </div>
                          {/* <div class="simplebar-track simplebar-vertical" style="visibility: visible;">
                                <div class="simplebar-scrollbar" style="height: 200px; transform: translate3d(0px, 50px, 0px); display: block;"></div>
                              </div> */}
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link dropdown-toggle fs-lg text-reset border-bottom mb-6 collapsed"
                      data-bs-toggle="collapse"
                      href="#priceCollapse"
                      aria-expanded="false"
                    >
                      {" "}
                      Price{" "}
                    </a>
                    <div
                      className="collapse"
                      id="priceCollapse"
                      data-simplebar-collapse="#priceGroup"
                      style={{}}
                    >
                      <div
                        className="form-group form-group-overflow mb-6"
                        id="priceGroup"
                        data-simplebar="init"
                      >
                        <div
                          className="simplebar-wrapper"
                          style={{ margin: "0px" }}
                        >
                          <div className="simplebar-height-auto-observer-wrapper">
                            <div className="simplebar-height-auto-observer" />
                          </div>
                          <div className="simplebar-mask">
                            <div
                              className="simplebar-offset"
                              style={{ right: "0px", bottom: "0px" }}
                            >
                              <div
                                className="simplebar-content-wrapper"
                                tabIndex={0}
                                role="region"
                                aria-label="scrollable content"
                                style={{ height: "auto", overflow: "hidden" }}
                              >
                                <div
                                  className="simplebar-content"
                                  style={{ padding: "0px" }}
                                >
                                  <div className="form-check mb-3">
                                    <input
                                      className="form-check-input"
                                      id="priceOne"
                                      type="checkbox"
                                      defaultChecked
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="priceOne"
                                    >
                                      {" "}
                                      $10.00 - $99.00{" "}
                                    </label>
                                  </div>
                                  <div className="form-check mb-3">
                                    <input
                                      className="form-check-input"
                                      id="priceThree"
                                      type="checkbox"
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="priceThree"
                                    >
                                      {" "}
                                      $100.00 - $199.00{" "}
                                    </label>
                                  </div>
                                  <div className="form-check">
                                    <input
                                      className="form-check-input"
                                      id="priceFour"
                                      type="checkbox"
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="priceFour"
                                    >
                                      {" "}
                                      $200.00 and Up{" "}
                                    </label>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="simplebar-placeholder"
                            style={{ width: "auto", height: "132px" }}
                          />
                        </div>
                        <div
                          className="simplebar-track simplebar-horizontal"
                          style={{ visibility: "hidden" }}
                        >
                          <div
                            className="simplebar-scrollbar"
                            style={{ width: "0px", display: "none" }}
                          />
                        </div>
                        <div
                          className="simplebar-track simplebar-vertical"
                          style={{ visibility: "hidden" }}
                        >
                          <div
                            className="simplebar-scrollbar"
                            style={{ height: "0px", display: "none" }}
                          />
                        </div>
                      </div>
                      <div className="d-flex align-items-center">
                        <input
                          type="number"
                          className="form-control form-control-xs"
                          placeholder="$10.00"
                          min={10}
                        />
                        <div className="text-gray-350 mx-2">-</div>
                        <input
                          type="number"
                          className="form-control form-control-xs"
                          placeholder="$350.00"
                          max={350}
                        />
                      </div>
                    </div>
                  </li>
                </ul>
              </form>
            </div>
            <div className="col-12 col-md-8 col-lg-9">
              <div
                className="flickity-page-dots-inner mb-9 flickity-enabled is-draggable"
                tabIndex={0}
              >
                <div className="flickity-viewport" style={{ height: "400px" }}>
                  <div
                    className="flickity-slider"
                    style={{ transform: "translateX(-300%)" }}
                  >
                    <Swiper
                      slidesPerView={1}
                      spaceBetween={5}
                      slidesPerGroup={1}
                      loop={true}
                      loopFillGroupWithBlank={true}
                      // pagination={{
                      //   clickable: true,
                      // }}
                      navigation={true}
                      // modules={[Pagination]}
                      className="yourswiper "
                      style={{ height: "480px" }}
                    >
                      <div
                        className="w-100 flickity-cell is-selected"
                        style={{ transform: "translateX(300%)" }}
                      >
                        <SwiperSlide>
                          <div
                            className="card bg-h-100 bg-start"
                            style={{
                              backgroundImage: `url(${pro})`,
                            }}
                          >
                            <div className="row" style={{ minHeight: "400px" }}>
                              <div className="col-12 col-md-10 col-lg-8 col-xl-6 align-self-center">
                                <div className="card-body px-md-10 py-11">
                                  <h4>2022 Summer Collection</h4>
                                  <a
                                    className="btn btn-link px-0 text-body"
                                    href="shop.html"
                                  >
                                    View Collection
                                    {/* <i class="fe fe-arrow-right ms-2"></i> */}
                                  </a>
                                </div>
                              </div>
                              <div
                                className="col-12 col-md-2 col-lg-4 col-xl-6 d-none d-md-block bg-cover"
                                style={{
                                  backgroundImage: 'url("images/cover-16.jpg")',
                                }}
                              />
                            </div>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div
                            className="card bg-h-100 bg-start"
                            style={{
                              backgroundImage: 'url("images/cover-24.jpg")',
                            }}
                          >
                            <div className="row" style={{ minHeight: "400px" }}>
                              <div className="col-12 col-md-10 col-lg-8 col-xl-6 align-self-center">
                                <div className="card-body px-md-10 py-11">
                                  <h4>2022 Summer Collection</h4>
                                  <a
                                    className="btn btn-link px-0 text-body"
                                    href="shop.html"
                                  >
                                    View Collection
                                    {/* <i class="fe fe-arrow-right ms-2"></i> */}
                                  </a>
                                </div>
                              </div>
                              <div
                                className="col-12 col-md-2 col-lg-4 col-xl-6 d-none d-md-block bg-cover"
                                style={{
                                  backgroundImage: 'url("images/cover-16.jpg")',
                                }}
                              />
                            </div>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div
                            className="card bg-h-100 bg-start"
                            style={{
                              backgroundImage: 'url("images/cover-24.jpg")',
                            }}
                          >
                            <div className="row" style={{ minHeight: "400px" }}>
                              <div className="col-12 col-md-10 col-lg-8 col-xl-6 align-self-center">
                                <div className="card-body px-md-10 py-11">
                                  <h4>2022 Summer Collection</h4>
                                  <a
                                    className="btn btn-link px-0 text-body"
                                    href="shop.html"
                                  >
                                    View Collection
                                    {/* <i class="fe fe-arrow-right ms-2"></i> */}
                                  </a>
                                </div>
                              </div>
                              <div
                                className="col-12 col-md-2 col-lg-4 col-xl-6 d-none d-md-block bg-cover"
                                style={{
                                  backgroundImage: 'url("images/cover-16.jpg")',
                                }}
                              />
                            </div>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div
                            className="card bg-h-100 bg-start"
                            style={{
                              backgroundImage: 'url("images/cover-24.jpg")',
                            }}
                          >
                            <div className="row" style={{ minHeight: "400px" }}>
                              <div className="col-12 col-md-10 col-lg-8 col-xl-6 align-self-center">
                                <div className="card-body px-md-10 py-11">
                                  <h4>2022 Summer Collection</h4>
                                  <a
                                    className="btn btn-link px-0 text-body"
                                    href="shop.html"
                                  >
                                    View Collection
                                    {/* <i class="fe fe-arrow-right ms-2"></i> */}
                                  </a>
                                </div>
                              </div>
                              <div
                                className="col-12 col-md-2 col-lg-4 col-xl-6 d-none d-md-block bg-cover"
                                style={{
                                  backgroundImage: 'url("images/cover-16.jpg")',
                                }}
                              />
                            </div>
                          </div>
                        </SwiperSlide>
                      </div>
                    </Swiper>
                    <div
                      className="w-100 flickity-cell"
                      style={{ transform: "translateX(100%)" }}
                      aria-hidden="true"
                    >
                      <div
                        className="card bg-cover"
                        style={{
                          backgroundImage: 'url("images/cover-29.jpg")',
                        }}
                      >
                        <div
                          className="row align-items-center"
                          style={{ minHeight: "400px" }}
                        >
                          <div className="col-12 col-md-10 col-lg-8 col-xl-6">
                            <div className="card-body px-md-10 py-11">
                              <h4 className="mb-5">
                                Get -50% from Summer Collection
                              </h4>
                              <p className="mb-7">
                                Appear, dry there darkness they're seas.
                                <br />
                                <strong className="text-primary">
                                  Use Code 4GF5SD{" "}
                                </strong>
                              </p>
                              <a
                                className="btn btn-outline-dark"
                                href="shop.html"
                              >
                                Shop Now
                                <i className="fe fe-arrow-right ms-2" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="w-100 flickity-cell"
                      style={{ transform: "translateX(200%)" }}
                      aria-hidden="true"
                    >
                      <div
                        className="card bg-cover"
                        style={{
                          backgroundImage: 'url("images/cover-30.jpg")',
                        }}
                      >
                        <div
                          className="row align-items-center"
                          style={{ minHeight: "400px" }}
                        >
                          <div className="col-12">
                            <div className="card-body px-md-10 py-11 text-center text-white">
                              <p className="text-uppercase">Enjoy an extra</p>
                              <h1 className="display-4 text-uppercase">
                                50% off
                              </h1>
                              <a className=" text-reset" href="shop.html">
                                Shop Collection
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flickity-page-dots">
                  <button
                    type="button"
                    className="flickity-page-dot is-selected"
                    aria-current="step"
                  >
                    View Slide 1
                  </button>
                  <button type="button" className="flickity-page-dot">
                    View Slide 2
                  </button>
                  <button type="button" className="flickity-page-dot">
                    View Slide 3
                  </button>
                </div>
              </div>
              <div className="row align-items-center mb-7">
                <div className="col-12 col-md">
                  <h3 className="mb-1">Women's Clothing</h3>
                  <ol className="breadcrumb mb-md-0 fs-xs text-gray-400">
                    <li className="breadcrumb-item">
                      <a className="text-gray-400" href="index.html">
                        Home
                      </a>
                    </li>
                    <li className="breadcrumb-item active">Women's Clothing</li>
                  </ol>
                </div>
                <div className="col-12 col-md-auto">
                  <select className="form-select form-select-xs">
                    <option selected>Most Popular</option>
                  </select>
                </div>
              </div>
              <div className="row mb-7">
                <div className="col-12">
                  <span className="btn btn-xs btn-light fw-normal text-muted me-3 mb-3">
                    Shift Dresses
                    <a className="text-reset ms-2" href="#!" role="button">
                      <img src="images/icons8-multiply-24.png" alt="" />
                    </a>
                  </span>
                  <span className="btn btn-xs btn-light fw-normal text-muted me-3 mb-3">
                    Summer
                    <a className="text-reset ms-2" href="#!" role="button">
                      <img src="images/icons8-multiply-24.png" alt="" />
                    </a>
                  </span>
                  <span className="btn btn-xs btn-light fw-normal text-muted me-3 mb-3">
                    M
                    <a className="text-reset ms-2" href="#!" role="button">
                      <img src="images/icons8-multiply-24.png" alt="" />
                    </a>
                  </span>
                  <span className="btn btn-xs btn-light fw-normal text-muted me-3 mb-3">
                    White
                    <a className="text-reset ms-2" href="#!" role="button">
                      <img src="images/icons8-multiply-24.png" alt="" />
                    </a>
                  </span>
                  <span className="btn btn-xs btn-light fw-normal text-muted me-3 mb-3">
                    Red
                    <a className="text-reset ms-2" href="#!" role="button">
                      <img src="images/icons8-multiply-24.png" alt="" />
                    </a>
                  </span>
                  <span className="btn btn-xs btn-light fw-normal text-muted me-3 mb-3">
                    Adidas
                    <a className="text-reset ms-2" href="#!" role="button">
                      <img src="images/icons8-multiply-24.png" alt="" />
                    </a>
                  </span>
                  <span className="btn btn-xs btn-light fw-normal text-muted me-3 mb-3">
                    $10.00 - $49.00
                    <a className="text-reset ms-2" href="#!" role="button">
                      <img src="images/icons8-multiply-24.png" alt="" />
                    </a>
                  </span>
                  <span className="btn btn-xs btn-light fw-normal text-muted me-3 mb-3">
                    $50.00 - $99.00
                    <a className="text-reset ms-2" href="#!" role="button">
                      <img src="images/icons8-multiply-24.png" alt="" />
                    </a>
                  </span>
                </div>
              </div>
              <div className="row">
                <div className="col-6 col-md-4">
                  <div className="card mb-7">
                    <div className="badge bg-white text-body card-badge card-badge-start text-uppercase">
                      New
                    </div>
                    <div className="card-img">
                      <a className="card-image-hover" href="product-html">
                        {/* <img class="card-img-top card-img-back" src="https://yevgenysim-turkey.github.io/shopper/assets/img/products/product-120.jpg" alt=""> */}
                        <img
                          className="card-img-top card-img-front"
                          src="https://yevgenysim-turkey.github.io/shopper/assets/img/products/product-5.jpg"
                          alt=""
                        />
                      </a>
                      <div className="card-actions">
                        <span className="card-action">
                          <button
                            className="btn btn-xs btn-circle btn-white-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#modalProduct"
                          >
                            <i className="fe fe-eye" />
                          </button>
                        </span>
                        <span className="card-action">
                          <button
                            className="btn btn-xs btn-circle btn-white-primary"
                            data-toggle="button"
                          >
                            <i className="fe fe-shopping-cart" />
                          </button>
                        </span>
                        <span className="card-action">
                          <button
                            className="btn btn-xs btn-circle btn-white-primary"
                            data-toggle="button"
                          >
                            <i className="fe fe-heart" />
                          </button>
                        </span>
                      </div>
                    </div>
                    <div className="card-body px-0">
                      <div className="fs-xs">
                        <a className="text-muted" href="shop.html">
                          Shoes
                        </a>
                      </div>
                      <div className="fw-bold">
                        <a className="text-body" href="product.html">
                          Leather mid-heel Sandals
                        </a>
                      </div>
                      <div className="fw-bold text-muted">$129.00</div>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-md-4">
                  <div className="card mb-7">
                    <div className="card-img">
                      <a className="card-image-hover" href="product-html">
                        {/* <img class="card-img-top card-img-back" src="https://yevgenysim-turkey.github.io/shopper/assets/img/products/product-121.jpg" alt=""> */}
                        <img
                          className="card-img-top card-img-front"
                          src="https://yevgenysim-turkey.github.io/shopper/assets/img/products/product-6.jpg"
                          alt=""
                        />
                      </a>
                      <div className="card-actions">
                        <span className="card-action">
                          <button
                            className="btn btn-xs btn-circle btn-white-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#modalProduct"
                          >
                            <i className="fe fe-eye" />
                          </button>
                        </span>
                        <span className="card-action">
                          <button
                            className="btn btn-xs btn-circle btn-white-primary"
                            data-toggle="button"
                          >
                            <i className="fe fe-shopping-cart" />
                          </button>
                        </span>
                        <span className="card-action">
                          <button
                            className="btn btn-xs btn-circle btn-white-primary"
                            data-toggle="button"
                          >
                            <i className="fe fe-heart" />
                          </button>
                        </span>
                      </div>
                    </div>
                    <div className="card-body px-0">
                      <div className="fs-xs">
                        <a className="text-muted" href="shop.html">
                          Dresses
                        </a>
                      </div>
                      <div className="fw-bold">
                        <a className="text-body" href="product.html">
                          Cotton floral print Dress
                        </a>
                      </div>
                      <div className="fw-bold text-muted">$40.00</div>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-md-4">
                  <div className="card mb-7">
                    <div className="badge bg-dark card-badge card-badge-start text-uppercase">
                      Sale
                    </div>
                    <div className="card-img">
                      <a className="card-image-hover" href="product-html">
                        {/* <img class="card-img-top card-img-back" src="https://yevgenysim-turkey.github.io/shopper/assets/img/products/product-122.jpg" alt=""> */}
                        <img
                          className="card-img-top card-img-front"
                          src="https://yevgenysim-turkey.github.io/shopper/assets/img/products/product-7.jpg"
                          alt=""
                        />
                      </a>
                      <div className="card-actions">
                        <span className="card-action">
                          <button
                            className="btn btn-xs btn-circle btn-white-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#modalProduct"
                          >
                            <i className="fe fe-eye" />
                          </button>
                        </span>
                        <span className="card-action">
                          <button
                            className="btn btn-xs btn-circle btn-white-primary"
                            data-toggle="button"
                          >
                            <i className="fe fe-shopping-cart" />
                          </button>
                        </span>
                        <span className="card-action">
                          <button
                            className="btn btn-xs btn-circle btn-white-primary"
                            data-toggle="button"
                          >
                            <i className="fe fe-heart" />
                          </button>
                        </span>
                      </div>
                    </div>
                    <div className="card-body px-0">
                      <div className="fs-xs">
                        <a className="text-muted" href="shop.html">
                          Shoes
                        </a>
                      </div>
                      <div className="fw-bold">
                        <a className="text-body" href="product.html">
                          Leather Sneakers
                        </a>
                      </div>
                      <div className="fw-bold">
                        <span className="fs-xs text-gray-350 text-decoration-line-through">
                          $85.00
                        </span>
                        <span className="text-primary">$55.00</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-md-4">
                  <div className="card mb-7">
                    <div className="card-img">
                      <a className="card-image-hover" href="product-html">
                        {/* <img class="card-img-top card-img-back" src="https://yevgenysim-turkey.github.io/shopper/assets/img/products/product-8.jpg" alt=""> */}
                        <img
                          className="card-img-top card-img-front"
                          src="https://yevgenysim-turkey.github.io/shopper/assets/img/products/product-8.jpg"
                          alt=""
                        />
                      </a>
                      <div className="card-actions">
                        <span className="card-action">
                          <button
                            className="btn btn-xs btn-circle btn-white-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#modalProduct"
                          >
                            <i className="fe fe-eye" />
                          </button>
                        </span>
                        <span className="card-action">
                          <button
                            className="btn btn-xs btn-circle btn-white-primary"
                            data-toggle="button"
                          >
                            <i className="fe fe-shopping-cart" />
                          </button>
                        </span>
                        <span className="card-action">
                          <button
                            className="btn btn-xs btn-circle btn-white-primary"
                            data-toggle="button"
                          >
                            <i className="fe fe-heart" />
                          </button>
                        </span>
                      </div>
                    </div>
                    <div className="card-body px-0">
                      <div className="fs-xs">
                        <a className="text-muted" href="shop.html">
                          Tops
                        </a>
                      </div>
                      <div className="fw-bold">
                        <a className="text-body" href="product.html">
                          Cropped cotton Top
                        </a>
                      </div>
                      <div className="fw-bold text-muted">$29.00</div>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-md-4">
                  <div className="card mb-7">
                    <div className="card-img">
                      <a className="card-image-hover" href="product-html">
                        {/* <img class="card-img-top card-img-back" src="https://yevgenysim-turkey.github.io/shopper/assets/img/products/product-9.jpg" alt=""> */}
                        <img
                          className="card-img-top card-img-front"
                          src="https://yevgenysim-turkey.github.io/shopper/assets/img/products/product-9.jpg"
                          alt=""
                        />
                      </a>
                      <div className="card-actions">
                        <span className="card-action">
                          <button
                            className="btn btn-xs btn-circle btn-white-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#modalProduct"
                          >
                            <i className="fe fe-eye" />
                          </button>
                        </span>
                        <span className="card-action">
                          <button
                            className="btn btn-xs btn-circle btn-white-primary"
                            data-toggle="button"
                          >
                            <i className="fe fe-shopping-cart" />
                          </button>
                        </span>
                        <span className="card-action">
                          <button
                            className="btn btn-xs btn-circle btn-white-primary"
                            data-toggle="button"
                          >
                            <i className="fe fe-heart" />
                          </button>
                        </span>
                      </div>
                    </div>
                    <div className="card-body px-0">
                      <div className="fs-xs">
                        <a className="text-muted" href="shop.html">
                          Dresses
                        </a>
                      </div>
                      <div className="fw-bold">
                        <a className="text-body" href="product.html">
                          Floral print midi Dress
                        </a>
                      </div>
                      <div className="fw-bold text-muted">$50.00</div>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-md-4">
                  <div className="card mb-7">
                    <div className="badge bg-dark card-badge card-badge-start text-uppercase">
                      Sale
                    </div>
                    <div className="card-img">
                      <a className="card-image-hover" href="product-html">
                        {/* <img class="card-img-top card-img-back" src="https://yevgenysim-turkey.github.io/shopper/assets/img/products/product-123.jpg" alt=""> */}
                        <img
                          className="card-img-top card-img-front"
                          src="https://yevgenysim-turkey.github.io/shopper/assets/img/products/product-10.jpg"
                          alt=""
                        />
                      </a>
                      <div className="card-actions">
                        <span className="card-action">
                          <button
                            className="btn btn-xs btn-circle btn-white-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#modalProduct"
                          >
                            <i className="fe fe-eye" />
                          </button>
                        </span>
                        <span className="card-action">
                          <button
                            className="btn btn-xs btn-circle btn-white-primary"
                            data-toggle="button"
                          >
                            <i className="fe fe-shopping-cart" />
                          </button>
                        </span>
                        <span className="card-action">
                          <button
                            className="btn btn-xs btn-circle btn-white-primary"
                            data-toggle="button"
                          >
                            <i className="fe fe-heart" />
                          </button>
                        </span>
                      </div>
                    </div>
                    <div className="card-body px-0">
                      <div className="fs-xs">
                        <a className="text-muted" href="shop.html">
                          Bags
                        </a>
                      </div>
                      <div className="fw-bold">
                        <a className="text-body" href="product.html">
                          Suede cross body Bag
                        </a>
                      </div>
                      <div className="fw-bold">
                        <span className="fs-xs text-gray-350 text-decoration-line-through">
                          $79.00
                        </span>
                        <span className="text-primary">$49.00</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-md-4">
                  <div className="card mb-7">
                    <div className="card-img">
                      <a className="card-image-hover" href="product-html">
                        {/* <img class="card-img-top card-img-back" src="https://yevgenysim-turkey.github.io/shopper/assets/img/products/product-124.jpg" alt=""> */}
                        <img
                          className="card-img-top card-img-front"
                          src="https://yevgenysim-turkey.github.io/shopper/assets/img/products/product-11.jpg"
                          alt=""
                        />
                      </a>
                      <div className="card-actions">
                        <span className="card-action">
                          <button
                            className="btn btn-xs btn-circle btn-white-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#modalProduct"
                          >
                            <i className="fe fe-eye" />
                          </button>
                        </span>
                        <span className="card-action">
                          <button
                            className="btn btn-xs btn-circle btn-white-primary"
                            data-toggle="button"
                          >
                            <i className="fe fe-shopping-cart" />
                          </button>
                        </span>
                        <span className="card-action">
                          <button
                            className="btn btn-xs btn-circle btn-white-primary"
                            data-toggle="button"
                          >
                            <i className="fe fe-heart" />
                          </button>
                        </span>
                      </div>
                    </div>
                    <div className="card-body px-0">
                      <div className="fs-xs">
                        <a className="text-muted" href="shop.html">
                          Skirts
                        </a>
                      </div>
                      <div className="fw-bold">
                        <a className="text-body" href="product.html">
                          Printed A-line Skirt
                        </a>
                      </div>
                      <div className="fw-bold text-muted">$79.00</div>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-md-4">
                  <div className="card mb-7">
                    <div className="badge bg-white text-body card-badge card-badge-start text-uppercase">
                      New
                    </div>
                    <div className="card-img">
                      <a className="card-image-hover" href="product-html">
                        {/* <img class="card-img-top card-img-back" src="https://yevgenysim-turkey.github.io/shopper/assets/img/products/product-12.jpg" alt=""> */}
                        <img
                          className="card-img-top card-img-front"
                          src="https://yevgenysim-turkey.github.io/shopper/assets/img/products/product-12.jpg"
                          alt=""
                        />
                      </a>
                      <div className="card-actions">
                        <span className="card-action">
                          <button
                            className="btn btn-xs btn-circle btn-white-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#modalProduct"
                          >
                            <i className="fe fe-eye" />
                          </button>
                        </span>
                        <span className="card-action">
                          <button
                            className="btn btn-xs btn-circle btn-white-primary"
                            data-toggle="button"
                          >
                            <i className="fe fe-shopping-cart" />
                          </button>
                        </span>
                        <span className="card-action">
                          <button
                            className="btn btn-xs btn-circle btn-white-primary"
                            data-toggle="button"
                          >
                            <i className="fe fe-heart" />
                          </button>
                        </span>
                      </div>
                    </div>
                    <div className="card-body px-0">
                      <div className="fs-xs">
                        <a className="text-muted" href="shop.html">
                          Shoes
                        </a>
                      </div>
                      <div className="fw-bold">
                        <a className="text-body" href="product.html">
                          Heel strappy Sandals
                        </a>
                      </div>
                      <div className="fw-bold text-muted">$90.00</div>
                    </div>
                  </div>
                </div>
              </div>
              <nav className="d-flex justify-content-center justify-content-md-end">
                <ul className="pagination pagination-sm text-gray-400">
                  <li className="page-item">
                    <a className="page-link page-link-arrow" href="#">
                      <svg
                        className="svg-inline--fa fa-caret-left"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="caret-left"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 256 512"
                        data-fa-i2svg
                      >
                        <path
                          fill="currentColor"
                          d="M137.4 406.6l-128-127.1C3.125 272.4 0 264.2 0 255.1s3.125-16.38 9.375-22.63l128-127.1c9.156-9.156 22.91-11.9 34.88-6.943S192 115.1 192 128v255.1c0 12.94-7.781 24.62-19.75 29.58S146.5 415.8 137.4 406.6z"
                        />
                      </svg>
                    </a>
                  </li>
                  <li className="page-item active">
                    <a className="page-link" href="#">
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      4
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      5
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      6
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link page-link-arrow" href="#">
                      <svg
                        className="svg-inline--fa fa-caret-right"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="caret-right"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 256 512"
                        data-fa-i2svg
                      >
                        <path
                          fill="currentColor"
                          d="M118.6 105.4l128 127.1C252.9 239.6 256 247.8 256 255.1s-3.125 16.38-9.375 22.63l-128 127.1c-9.156 9.156-22.91 11.9-34.88 6.943S64 396.9 64 383.1V128c0-12.94 7.781-24.62 19.75-29.58S109.5 96.23 118.6 105.4z"
                        />
                      </svg>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
