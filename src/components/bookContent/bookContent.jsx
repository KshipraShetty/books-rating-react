import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import displaySaveAction from '../../redux/actions';
import './bookContent.css';
import Books from '../books/books';

class BookContent extends Component {
  render() {
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
  display: state.display,
});

const mapDispatchToProps = dispatch => ({
  saveBooks: bookData => dispatch(displaySaveAction(bookData)),

});

export default connect(mapStateToProps, mapDispatchToProps)(BookContent);
