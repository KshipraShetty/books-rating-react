import React, { Component } from 'react';
import MaterialIcon from 'material-icons-react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {displaySaveAction} from '../../redux/actions';

class MainBodyContainer extends Component {
<div className="MainBodyContainer">
  <div className="NotFound">
    <p className="NotFoundText">{this.props.notFoundText}</p>
    <button className="FirstSync" onClick={this.syncBooks}>
      <MaterialIcon icon="sync" color="white" size="32px" />
    </button>
  </div>
</div>
}
export default MainBodyContainer;
