import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './books.css';

class Books extends Component {
  render() {
    const authorName = this.props.authorName;
    // for (let i = 0; i < this.props.savedBooks[authorName].length; i += 1) {

    // }
    // console.log(this.props.savedBooks[authorName][0]);
    console.log(this.props.EachBook);
    return (
      <div className="BookContainer">
        <div className="BookImage" />
        <div className="BookTitle" >
          {this.props.EachBook.name}
        </div>
        <div className="Rating">
          {this.props.EachBook.rating}
        </div>
        <div className="AuthorName">
          {this.props.EachBook.author}
        </div>
      </div>
    );
  }
}

Books.propTypes = {
  savedBooks: PropTypes.object,
};

Books.defaultProps = {
  savedBooks: {},
};

const mapStateToProps = state => ({
  savedBooks: state.savedBooks,
});

export default connect(mapStateToProps, null)(Books);
