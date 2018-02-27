import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import displaySaveAction from '../../redux/actions';
import './books.css';
import Icon from '../icon/icon';

class Books extends Component {
likeButton = (bookID) => {
  if (this.props.EachBook.like === false || this.props.EachBook.like === null) {
    fetch(`/books/${bookID}/like`, { method: 'POST' })
      .then(response => response.json())
      .then(() => {
        this.props.saveBooks({
          bookID,
          like: true,
          author: this.props.EachBook.author,
        });
      });
  } else {
    fetch(`/books/${bookID}/unlike`, { method: 'POST' })
      .then(response => response.json())
      .then((data) => {
        this.props.saveBooks({
          bookID,
          like: false,
          author: this.props.EachBook.author,
        });
      });
  }
}


render() {
  const authorName = this.props.authorName;
  // console.log(this.props.Eachbook);
  return (
    <div className="BookContainer">
      <div className="BookImage" />

      <Icon
        className="Book-fav-icon"
        icon="&#xE87D;"
        style={{
            paddingTop: '4px',
            color: '#fff',
          }}
        containerStyle={{
            textAlign: 'center',
            display: 'inline-block',
            position: 'relative',
            top: '-24px',
            left: '77%',
            padding: '8px',
            width: '32px',
            height: '32px',
            borderRadius: '32px',
            alignContent: 'center',
            backgroundColor: (this.props.EachBook.like) ? '#E41912' : 'grey',
            boxShadow: '-1px 1px 2px black',
            cursor: 'pointer',
          }}
        onClick={() => this.likeButton(this.props.EachBook.bookID)}
      />
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
  savedBook: PropTypes.object,
};

Books.defaultProps = {
  savedBook: {},
};

const mapStateToProps = state => ({
  savedBook: state.savedBooks,
  display: state.display,
});

const mapDispatchToProps = dispatch => ({
  saveBooks: likeobj => dispatch(displaySaveAction(likeobj, 'TOGGLE_LIKE')),

});

export default connect(mapStateToProps, mapDispatchToProps)(Books);
