import React from "react";
import { connect } from "react-redux";
import StudentForm from "./StudentForm";
import { editStudent, removeStudent } from "../actions/students";

export class EditStudent extends React.Component {
  onSubmit = (student) => {
    this.props.editStudent(this.props.student.id, student);
    this.props.history.push("/");
  };
  onRemove = () => {
    this.props.removeStudent({ id: this.props.student.id });
    this.props.history.push("/");
  };
  render() {
    return (
      <div>
        <StudentForm student={this.props.student} onSubmit={this.onSubmit} />
        <button onClick={this.onRemove}>Remove</button>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  student: state.find((student) => student.id === props.match.params.id),
});

const mapDispatchToProps = (dispatch, props) => ({
  editStudent: (id, student) => dispatch(editStudent(id, student)),
  removeStudent: (data) => dispatch(removeStudent(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditStudent);
