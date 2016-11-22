import React, { PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Grid, Row, Col, Button, Form, ControlLabel, FormControl } from 'react-bootstrap';

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div>
    <Col componentClass={ControlLabel} sm={2}>
      {label}
    </Col>
    <Col sm={10}>
      <FormControl {...input} placeholder={label} type={type}/>
      {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    </Col>
  </div>
)

const DieForm = (props) => {
  const {
    handleSubmit,
    submitting,
    pristine,
    reset
  } = props;
  return (
    <Form horizontal onSubmit={handleSubmit}>
      <Grid fluid>
        <Row>
          <Col xs={12}>
            <Field name="k" component={renderField} type="text" label="k: " />
          </Col>
        </Row>
        <br />
        <Row>
          <Col xs={6}>
            <Button block bsStyle="primary" type="submit" disabled={pristine || submitting}>Submit</Button>
          </Col>
          <Col xs={6}>
            <Button block type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</Button>
          </Col>
        </Row>
      </Grid>
    </Form>
  );
}

DieForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
};

const DieFormContainer = reduxForm({
  form: 'DieForm'
})(DieForm);

export default DieFormContainer;
