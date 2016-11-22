import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col, Panel } from 'react-bootstrap';

import DieFormView from './DieFormView';

class MainSection extends Component {
  render () {
    const { k, result} = this.props;
    return (
      <Grid>
        <Row>
          <Col xs={6}>
            <Panel header={'Die'} bsStyle="info">
              <DieFormView />
            </Panel>
          </Col>
          <Col xs={6}>
            <Panel header={'Result'} bsStyle="info">
              <h3>k -> {k}</h3>
              <h3>result -> {result}</h3>
            </Panel>
          </Col>
        </Row>
      </Grid>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    k: state.Die.get('k'),
    result: state.Die.get('result')
  };
};

export default connect(
  mapStateToProps
)(MainSection);
