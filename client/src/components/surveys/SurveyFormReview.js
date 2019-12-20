import React from 'react';

const SurveyFormReview = ({ onCancel, onDelete }) => {
    return (
        <div>
            <h5>Please confirm your survey entries:</h5>
            <button 
              className="yellow darken-3 btn-flat"
              style={{ marginRight: '20px', color: 'white' }}
              onClick={onCancel}
            >
              Back
            </button>
            <button 
              className="red darken-3 btn-flat"
              onClick={onDelete}
            >
              Delete
            </button>
        </div>
    )
}

export default SurveyFormReview;