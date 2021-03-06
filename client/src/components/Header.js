import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';


class Header extends Component {
  
  renderContent() {
    switch(this.props.auth){
      case null:
        return;
      case false: 
        return <li><a href="/auth/google">Login with Google</a></li>;
      default:
        return [
          <li key="1"><Payments /></li>,
          <li key="2" style={{ margin: '0 10px'}}>Credits: {this.props.auth.credits}</li>,
          <li key="3"><a href="/api/logout">Logout</a></li>
        ];
    }
  }

  render() {
      return (
        <nav style={{ paddingLeft: '20px', backgroundColor: 'rgb(31, 29, 29)', marginBottom: '20px' }}>
          <div className="nav-wrapper">
            <Link to={ this.props.auth ? '/surveys' : '/' } className="left brand-logo">campaignManager</Link>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                { this.renderContent() }
            </ul>
          </div>
        </nav>
      )
  }
}

function mapStateToProps({auth}){
  return { auth }
}

export default connect(mapStateToProps)(Header);