import React from "react";
import { Link } from "react-router-dom";

const StudentListItem = ({ id, firstName, lastName, phone, gpa }) => (
  <table>
    <tr>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Phone Number</th>
      <th>GPA</th>
      <th>Actions</th>
    </tr>
    <tr>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{phone}</td>
      <td>{gpa}</td>
      <td>
        <Link to={`/edit/${id}`}>Edit</Link>
      </td>
    </tr>
  </table>
);

export default StudentListItem;
