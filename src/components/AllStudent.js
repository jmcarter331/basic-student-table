import React from "react";
import { connect } from "react-redux";
import StudentListItem from "./StudentListItem";
import selectStudents from "../selectors/students";

export const AllStudents = (props) => (
  <div>
    {props.students.length === 0 ? (
      <p>No students</p>
    ) : (
      props.students.map((student) => {
        return <StudentListItem key={student.id} {...student} />;
      })
    )}
  </div>
);

const mapStateToProps = (state) => {
  console.log("check all students..");
  console.log(state);
  return {
    students: selectStudents(state),
  };
};

export default connect(mapStateToProps)(AllStudents);
