import React, { Component } from 'react';
import { connect } from 'react-redux';

import DieFormContainer from '../components/DieForm';
import { doDie } from '../actions/Die';

class DieFormView extends Component {

  constructor (props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(data) {
    console.debug(`DieFormView -> handleSubmit ...`, data);
    const { k } = data;
    const { doDie } = this.props;
    doDie(k);
  }

  render () {
    return (
      <DieFormContainer
        onSubmit={this.handleSubmit}
      />
    );
  }

}

export default connect(state => state, {
  doDie
})(DieFormView);
