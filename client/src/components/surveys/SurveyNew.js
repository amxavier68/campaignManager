import React, { Component } from 'react';
import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';

class SurveyNew extends Component {
    
    // Component Level State
    state = { showFormReview: false };
    
    componentDidMount() { }

    renderContent() {
        if(this.state.showFormReview) {
            return <SurveyFormReview />;
        } 
        return  <SurveyForm />
    }

    render() {
        return (
          <div>
            { this.renderContent() }
          </div>
        );
    }
}

export default SurveyNew;