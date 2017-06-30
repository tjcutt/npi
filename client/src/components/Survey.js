import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const disordersArray = [
  "Stroke","Brain Injury","Alzheimer's Disease and Other Dementias","Epilepsy","Parkinson's Disease","Autism Spectrum Disorders and Other Neurodevelopmental Disorders","Multiple Sclerosis","ALS and Other Neurodegenerative Disorders","Spinal Cord Injury","Migraine/Pain"
];

class Survey extends React.Component {
  state = {
    disorders: [],
    role: 'Patient',
    referral: 'Baylor University'
  };

  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleRoleChange = this.handleRoleChange.bind(this)
    this.handleReferralChange = this.handleReferralChange.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event, index, disorders){
    this.setState({disorders});
  }
  handleRoleChange(role) {
    this.setState({
      role: role.target.value
    });
  }
  handleReferralChange(referral) {
    this.setState({
      referral: referral.target.value
    });
  }
  menuItems(disorders) {
    return disordersArray.map((name) => (
      <MenuItem
        key={name}
        insetChildren={true}
        checked={disorders && disorders.indexOf(name) > -1}
        value={name}
        primaryText={name}
      />
    ));
  }

  handleClick(event) {
    fetch('/api/survey',{
      method:"POST",
      headers: {
           'Accept': 'application/json',
           'Content-Type': 'application/json'
         },
      body:JSON.stringify(this.state)
    }).then(res => console.log(res))
  }
  render(){
    const {disorders, role, referral} = this.state;
    return (
      <MuiThemeProvider>
          <div className="container survey font1">
            <div className="row">
               <h3 className="center font1">Tell Us About Yourself</h3>
            </div>

            <h5>Specify your role...</h5><br  />
            <div className="row">
               <div className="col l3">
                  <p>
                     <input className="with-gap" name="role" type="radio" id="patient" value="Patient" checked={this.state.role === 'Patient'} onChange={this.handleRoleChange}/>
                     <label htmlFor="patient">Patient</label>
                  </p>
               </div>
               <div className="col l3">
                  <p>
                     <input className="with-gap" name="role" type="radio" id="family" value="Family" checked={this.state.role === 'Family'} onChange={this.handleRoleChange}/>
                        <label htmlFor="family">Family</label>
                     </p>
               </div>
               <div className="col l3">
                  <p>
                     <input className="with-gap" name="role" type="radio" id="caregiver" value="Caregiver" checked={this.state.role === 'Caregiver'} onChange={this.handleRoleChange}/>
                     <label htmlFor="caregiver">Caregiver</label>
                  </p>
               </div>
               <div className="col l3">
                  <p>
                     <input className="with-gap" name="role" type="radio" id="medprof" value="Medical Professional" checked={this.state.role === 'Medical Professional'} onChange={this.handleRoleChange} />
                     <label htmlFor="medprof">Medical Professional</label>
                  </p>
               </div>
            </div>

            <h5>Specify the neurological disorder you have or care of:</h5><br  />
            <div className="row">
               <div className="row">
                  <div className="col m4 l4 selectDisorder">
                     <SelectField
                     id="selectfield"
                     multiple={true}
                     fullWidth={true}
                     hintText="Select disorders"
                     value={disorders}
                     onChange={this.handleChange}>
                     {this.menuItems(disorders)}
                     </SelectField>
                  </div>
               </div>
               <div className="col m12 l12">
                  <div className="row">
                     <input className="with-gap col m2 l2" name="other" type="radio" id="other" />
                      <label htmlFor="other col m2 l2" id="otherLable">Other: </label>
                     <input id="first_name" type="text" className="surveryInput validate right col m8 l8"/>
                  </div>
               </div>
            </div>

            <h5>Where did you hear about us?</h5><br  />
            <div className="row">
              <div className="col m12 l4">
                <p>
                  <input className="with-gap" name="referral" type="radio" id="baylor" value="Baylor University" checked={this.state.referral === 'Baylor University'} onChange={this.handleReferralChange}/>
                  <label htmlFor="baylor">Baylor University</label>
                </p>
              </div>
              <div className="col m12 l4">
                <p>
                  <input className="with-gap" name="referral" type="radio" id="cu-med" value="University of Colorado School of Medicine" checked={this.state.referral === 'University of Colorado School of Medicine'} onChange={this.handleReferralChange}/>
                  <label htmlFor="cu-med">University of Colorado School of Medicine</label>
                </p>
              </div>
              <div className="col m12 l4">
                <p>
                  <input className="with-gap" name="referral" type="radio" id="child-hosp" value="Children's Hospital Colorado" checked={this.state.referral === "Children's Hospital Colorado"} onChange={this.handleReferralChange}/>
                  <label htmlFor="child-hosp">Children&#39;s Hospital Colorado</label>
                </p>
              </div>
              <br  />
            </div>
            <button className="btn nextBtn waves-effect waves-light right light-blue darken-3 col l12" type="submit" onClick={this.handleClick} name="action">Next
            </button>
          </div>
      </MuiThemeProvider>
    )
  }

}

export default Survey
