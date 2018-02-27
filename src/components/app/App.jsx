import React, { Component } from 'react';
import MaterialIcon from 'material-icons-react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import displaySaveAction from '../../redux/actions';
import MainBody from '../mainBody/mainBody';


import './App.css';


class App extends Component {
  componentWillMount = () => {
    this.fetchData();
  }
  fetchData = () => fetch('/books/fetchDatabase')
    .then((response) => {
      if (!response.ok) {
        console.log('Network request failed');
      }
      return response;
    })
    .then(data => (data.json()))
    .then((books) => {
      this.props.saveBook(books.data);
    })
  syncBooks = () => {
    fetch('/books/booksRating/populate')
      .then((response) => {
        if (!response.ok) {
          console.log('Network request failed');
        }
        return response;
      })
      // .then(data => (data.json()))
      .then(() => {
        this.setState({
          displayPage: 1,
        });
      })
      .then(this.fetchData);
    // .then(data);
  }

  render() {
    if (Object.getOwnPropertyNames(this.props.savedBooks).length === 0) {
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
              <div className="Header">The <span className="HeaderBook">Book</span>shelf</div>
            </div>
            <div className="MainBodyContainer">
              <div className="NotFound">
                <p className="NotFoundText">{this.props.notFoundText}</p>
                <button className="FirstSync" onClick={this.syncBooks}>
                  <MaterialIcon icon="sync" color="white" size="75%" />
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    }
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


        <div className="MainCompleteBody">
          <div className="MainHeader">
            <div className="Header">The <span className="HeaderBook">Book</span> Store</div>
          </div>
          <MainBody />

        </div>
      </div>
    );
  }
}
App.propTypes = {
  // header: PropTypes.string,
  bs: PropTypes.string,
  notFoundText: PropTypes.string,
  saveBook: PropTypes.func,
  savedBooks: PropTypes.object,
};

App.defaultProps = {
  // header: 'The Book Shelf',
  bs: 'Bs',
  notFoundText: 'Oops! No books found! Import them now ?',
  saveBook: () => { },
  savedBooks: {},
};

const mapStateToProps = state => ({
  savedBooks: state.savedBooks,
  display: state.display,
});

const mapDispatchToProps = dispatch => ({
  saveBook: bookData => dispatch(displaySaveAction(bookData, 'ADD')),

});

export default connect(mapStateToProps, mapDispatchToProps)(App);
