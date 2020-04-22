import React from "react";
import { connect } from "react-redux";
import StudentForm from "./StudentForm";
import { addStudent } from "../actions/students";

export class AddStudent extends React.Component {
  onSubmit = (student) => {
    this.props.addStudent(student);
    this.props.history.push("/");
  };
  render() {
    return (
      <div>
        <h1>Add Student</h1>
        <StudentForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addStudent: (student) => dispatch(addStudent(student)),
});

export default connect(undefined, mapDispatchToProps)(AddStudent);
