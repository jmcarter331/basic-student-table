import React from "react";

export default class StudentForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: props.student ? props.student.firstName : "",
      lastName: props.student ? props.student.lastName : "",
      street: props.student ? props.student.street : "",
      city: props.student ? props.student.city : "",
      state: props.student ? props.student.state : "",
      zip: props.student ? props.student.zip : "",
      phone: props.student ? props.student.phone : "",
      gpa: props.student ? props.student.gpa : "",
    };
  }
  onFirstNameChange = (e) => {
    const firstName = e.target.value;
    this.setState(() => ({ firstName }));
  };
  onLastNameChange = (e) => {
    const lastName = e.target.value;
    this.setState(() => ({ lastName }));
  };
  onStreetChange = (e) => {
    const street = e.target.value;
    this.setState(() => ({ street }));
  };
  onCityChange = (e) => {
    const city = e.target.value;
    this.setState(() => ({ city }));
  };
  onStateChange = (e) => {
    const state = e.target.value;
    this.setState(() => ({ state }));
  };
  onZipChange = (e) => {
    const zip = e.target.value;
    this.setState(() => ({ zip }));
  };
  onPhoneChange = (e) => {
    const phone = e.target.value;
    this.setState(() => ({ phone }));
  };
  onGpaChange = (e) => {
    const gpa = e.target.value;
    this.setState(() => ({ gpa }));
  };
  onSubmit = (e) => {
    console.log("hit on sub..");
    e.preventDefault();
    this.setState(() => ({ error: "" }));
    this.props.onSubmit({
      ...this.state,
    });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <div>
            <input
              type="text"
              placeholder="First Name"
              autoFocus
              value={this.state.firstName}
              onChange={this.onFirstNameChange}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Last Name"
              value={this.state.lastName}
              onChange={this.onLastNameChange}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Street"
              value={this.state.street}
              onChange={this.onStreetChange}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="City"
              value={this.state.city}
              onChange={this.onCityChange}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="State"
              value={this.state.state}
              onChange={this.onStateChange}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Zip"
              value={this.state.zip}
              onChange={this.onZipChange}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Phone Number"
              value={this.state.phone}
              onChange={this.onPhoneChange}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="GPA"
              value={this.state.gpa}
              onChange={this.onGpaChange}
            />
          </div>
          <div>
            <button variant="outline-primary">Add Student</button>
          </div>
        </form>
      </div>
    );
  }
}
