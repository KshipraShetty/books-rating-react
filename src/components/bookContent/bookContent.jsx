import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import './bookContent.css';
import Books from '../books/books';

class BookContent extends Component {
  render() {
    // const allBooks = Object.keys(this.props.savedBooks).map(() => (<Books />));
    // Object.keys(this.props.savedBooks)[this.props.authorNo]
    return (
      <div className="BookContent">
        <div className="BookAuthor">
          {Object.keys(this.props.savedBooks)[this.props.authorNo]}
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

