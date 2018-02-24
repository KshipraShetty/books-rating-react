import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import './bookContent.css';
import Books from '../books/books';

class BookContent extends Component {
  render() {
    // const allBooks = Object.keys(this.props.savedBooks).map(() => (<Books />));
    // Object.keys(this.props.savedBooks)[this.props.authorNo]
    // let allBooks =
    // for (let i = 0; i < Object.keys(this.props.savedBooks)[this.props.authorNo].length; i += 1) {
    //   return ();
    // }

    // use this
    console.log(this.props.savedBooks[Object.keys(this.props.savedBooks)[this.props.authorNo]]);
    const books = this.props.savedBooks[Object.keys(this.props.savedBooks)[this.props.authorNo]]
      .map(eachBook => (

        <Books
          EachBook={eachBook}
        />
      ));
    return (
      <div className="BookContent">
        <div className="BookAuthor">
          {Object.keys(this.props.savedBooks)[this.props.authorNo]}
        </div>
        <div className="BooksList" >
          {books}
        </div>
      </div>
    );
  }
}
BookContent.propTypes = {
  savedBooks: PropTypes.object,
  authorNo: PropTypes.number,
};

BookContent.defaultProps = {
  savedBooks: {},
  authorNo: 0,
};

const mapStateToProps = state => ({
  savedBooks: state.savedBooks,
});

export default connect(mapStateToProps)(BookContent);

