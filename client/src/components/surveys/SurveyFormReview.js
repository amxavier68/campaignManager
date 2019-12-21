import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import formFields from './formFields';
import * as actions from '../../actions/index';

const SurveyFormReview = ({ onCancel, onDelete, formValues, submitSurvey }) => {
    
    const reviewFields = _.map(formFields, ({ name, label }) => {
        return (
            <div style={{ marginBottom: '20px' }} key={name}>
                <label>{label}</label>
                <div>{formValues[name]}</div>
            </div>
        );
    });

    return (
        <div>
            <h1>Preview</h1>
            <h5 style={{marginBottom: '20px'}}>Please confirm your survey entries:</h5>
            {reviewFields}
            <button className="orange darken-3 btn-flat" style={{marginRight: '20px'}} onClick={onCancel}>Back</button>
            <button className="red darken-3 btn-flat white-text" onClick={onDelete}>Delete</button>
            <button 
              className="green btn-flat right white-text"
              onClick={() => submitSurvey(formValues)}
            >Send<i className="material-icons right">email</i></button>
        </div>
    )
}

const mapStateToProps = (state) => {
    // console.log(state);
  return { formValues: state.form.SurveyForm.values }
};

export default connect(mapStateToProps, actions)(SurveyFormReview);