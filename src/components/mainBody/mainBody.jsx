import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import BookContent from '../bookContent/bookContent';
import './mainBody.css';

class MainBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authorNo: -1,
    };
  }

  render() {
    const allBooks = Object.keys(this.props.savedBooks).map(() => {
      this.state.authorNo += 1;
      if (this.state.authorNo > 1) {
        this.state.authorNo = 0;
      }
      return (<BookContent authorNo={this.state.authorNo} />);
    });
    return (
      <div className="MainBody">
        {allBooks}
      </div>
    );
  }
}

MainBody.propTypes = {
  savedBooks: PropTypes.object,
};

MainBody.defaultProps = {
  savedBooks: {},
};

const mapStateToProps = state => ({
  savedBooks: state.savedBooks,
});

export default connect(mapStateToProps)(MainBody);
// export default MainBody;
