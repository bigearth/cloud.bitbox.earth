import React, { Component } from 'react';
import moment from 'moment';
import {
  Link,
  withRouter
} from 'react-router-dom';
import Slider from 'react-slick';

import "../styles/homepage.scss";

class Homepage extends Component {
  componentDidMount() {
    document.title = "BITBOX Market - A marketplace of apps build w/ BITBOX";
  }

  render() {
    let settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true
    };
    return (
    <div>
      <div className="banner">
        <h1 className="banner-head">
          BITBOX Cloud<br />
          Digital Ocean meets Heroku for BCH
        </h1>
      </div>

      <div className="l-content">
        <div className="pricing-tables pure-g">
          <div className="pure-u-1 pure-u-md-1-3">
            <div className="pricing-table pricing-table-free">
              <div className="pricing-table-header">
                <h2>Personal</h2>

                <span className="pricing-table-price">
                   $0<span>per month</span>
                </span>
              </div>

              <ul className="pricing-table-list">
                <li>Free setup</li>
                <li>IP Address</li>
                <li>No customer support</li>
              </ul>

              <button className="button-choose pure-button">Choose</button>
            </div>
          </div>

          <div className="pure-u-1 pure-u-md-1-3">
            <div className="pricing-table pricing-table-biz pricing-table-selected">
              <div className="pricing-table-header">
                <h2>Small Business</h2>

                <span className="pricing-table-price">
                  $50 <span>per month</span>
                </span>
              </div>

              <ul className="pricing-table-list">
                <li>Free setup</li>
                <li>Custom sub domain</li>
                <li>Standard customer support</li>
              </ul>

              <button className="button-choose pure-button">Choose</button>
            </div>
          </div>

          <div className="pure-u-1 pure-u-md-1-3">
            <div className="pricing-table pricing-table-enterprise">
              <div className="pricing-table-header">
                <h2>Enterprise</h2>

                <span className="pricing-table-price">
                  $500 <span>per month</span>
                </span>
              </div>

              <ul className="pricing-table-list">
                <li>Free setup</li>
                <li>Custom sub domain</li>
                <li>Premium customer support</li>
              </ul>

              <button className="button-choose pure-button">Choose</button>
            </div>
          </div>
        </div>

        <div className="information pure-g">
          <div className="pure-u-1 pure-u-md-1-2">
            <div className="l-box">
              <h3 className="information-head">Full Node</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation.
              </p>
            </div>
          </div>

          <div className="pure-u-1 pure-u-md-1-2">
            <div className="l-box">
              <h3 className="information-head">Pay monthly or annually</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.
              </p>
            </div>
          </div>

          <div className="pure-u-1 pure-u-md-1-2">
            <div className="l-box">
              <h3 className="information-head">24/7 customer support</h3>
              <p>
                Cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                et dolore magna aliqua.
              </p>
            </div>
          </div>

          <div className="pure-u-1 pure-u-md-1-2">
            <div className="l-box">
              <h3 className="information-head">Cancel your plan anytime</h3>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer l-box">
        <p>Created w/ ❤️ on EARTH by <a href='https://twitter.com/bitboxearth'>@bitboxearth</a>. Donations <strong>bitcoincash:qpcxf2sv9hjw08nvpgffpamfus9nmksm3chv5zqtnz</strong></p>
      </div>
    </div>
    );
  }
}

export default withRouter(Homepage);
