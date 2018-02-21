import React from 'react';
import PropTypes from 'prop-types';
//import './mainBodyContainer.css';

class Footer extends React.Component {
  if(this.props.PageToDisplay){
    render() {
      return (
        <div className="Footer">
          {this.props.footer}
        </div>
      );
    }
  }

}

Footer.defaultProps = {
  PageToDisplay: 0,
};

Footer.propTypes = {
  PageToDisplay: PropTypes.number,
};

export default Footer;
