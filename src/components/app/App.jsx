import React, { Component } from 'react';
import MaterialIcon from 'material-icons-react';
import PropTypes from 'prop-types';

import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayPage: 0,
    };
  }
  render() {
    if (!this.state.displayPage) {
      return (


        <div className="App" >
          <div className="SideBar">
            <header className="SideBarHeader"> {this.props.bs}</header>
            <div className="SideBarSync">
              <MaterialIcon icon="sync" color="white" size="32px" />
            </div>
            <div className="SideBarSettings">
              <MaterialIcon icon="settings" color="white" size="32px" />
            </div>
          </div>


          <div className="MainBody">
            <div className="MainHeader">
              <div className="Header">{this.props.header}</div>
            </div>
            <div className="MainBodyContainer">
              <div className="NotFound">
                <p className="NotFoundText">{this.props.notFoundText}</p>
                <button className="FirstSync" >
                  <MaterialIcon icon="sync" color="white" size="32px" />
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div />
    );
  }
}
App.propTypes = {
  header: PropTypes.string,
  bs: PropTypes.string,
  notFoundText: PropTypes.string,
};

App.defaultProps = {
  header: 'The Book Shelf',
  bs: 'Bs',
  notFoundText: 'Oops! No books found! Import them now ?',
};


export default App;
