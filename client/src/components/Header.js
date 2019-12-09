import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <nav>
            <div className="nav-wrapper">
              <a href="/" className="left brand-logo">Emaily</a>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                  <li><a>Login with Google</a></li>
                {/* <li><a href="sass.html">Dasboard</a></li>
                <li><a href="badges.html">Settings</a></li> */}
              </ul>
            </div>
          </nav>
        )
    }
}

export default Header;