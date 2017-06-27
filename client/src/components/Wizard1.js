import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import injectTapEventPlugin from 'react-tap-event-plugin';

const disorders = ["Stroke","Brain Injury","Alzheimer's Disease and Other Dementias","Epilepsy","Parkinson's Disease","Autism Spectrum Disorders and Other Neurodevelopmental Disorders","Multiple Sclerosis","ALS and Other Neurodegenerative Disorders","Spinal Cord Injury","Migraine/Pain"];

const afflictions = ["Motor Skills","Sensory Deficits","Language/Speech Barriers","Safety Issues","Medication Adherence","Sleep Disturbance","Working","Transportation"];

const solutions = ["Assistive Devices","Biomarker Development","Alert Systems","Integrating Existing Systems/Data Analytics","Services","Apps"];

class WizardOne extends React.Component{
  state = {
    : [],
    role: 'Patient',
    referral: 'Baylor University'
  };

  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event, index, values){
    this.setState({values});
  }

  disorderItems(values) {
    return disorders.map((name) => (
      <MenuItem
        key={name}
        insetChildren={true}
        checked={values && values.indexOf(name) > -1}
        value={name}
        primaryText={name}
      />
    ));
  }
  render() {
    const {values, role, referral} = this.state;
    return (
      <MuiThemeProvider>
        <div className="container">
          <div className="row">
            <div id="bar">
              <div id="progress1">Part 1</div>
            </div>
          </div>
          <div className="row">
            <div className="col l12">
              <h5>Enter a title for your proposal</h5>
              <input placeholder="Enter title..." type="text" className="validate"/>
              <h5>Specify the neurological disorder your proposal targets:</h5>
            </div>
            <div className="col l8">
              <SelectField
                multiple={true}
                fullWidth={true}
                hintText="Select disorders"
                value={values}
                onChange={this.handleChange}>
                {this.disorderItems(values)}
              </SelectField>
            </div>
            <div className="col l4">
              <p>
                <input className="with-gap" name="other" type="radio" id="other" />
                <label htmlFor="other">Other: </label>
                <input id="first_name" type="text" className="validate right"/>
              </p>
            </div>
            <div className="col l6">
              <SelectField
                multiple={true}
                fullWidth={true}
                hintText="Select challenges"
                value={values}
                onChange={this.handleChange}>
                {this.disorderItems(values)}
              </SelectField>
            </div>
            <div className="col l6">
              <SelectField
                multiple={true}
                fullWidth={true}
                hintText="Select solutions"
                value={values}
                onChange={this.handleChange}>
                {this.disorderItems(values)}
              </SelectField>
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default WizardOne