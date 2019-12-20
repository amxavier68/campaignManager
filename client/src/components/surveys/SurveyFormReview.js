import React from 'react';
import { connect } from 'react-redux';

const SurveyFormReview = ({ onCancel, onDelete }) => {
    return (
        <div>
            <h5>Please confirm your survey entries:</h5>
            <button className="orange darken-3 btn-flat" onClick={onCancel}>Back</button>
        </div>
    )
}

const mapStateToProps = (state) => {
  return {
      
  }
};

export default connect(mapStateToProps)(SurveyFormReview);