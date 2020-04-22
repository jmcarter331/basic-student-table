import uuid from "uuid/v1";

export const addStudent = ({
  firstName = "",
  lastName = "",
  street = "",
  city = "",
  state = "",
  zip = "",
  phone = "",
  gpa = "",
} = {}) => ({
  type: "ADD_STUDENT",
  student: {
    id: uuid(),
    firstName,
    lastName,
    street,
    city,
    state,
    zip,
    phone,
    gpa,
  },
});

export const removeStudent = ({ id } = {}) => ({
  type: "REMOVE_STUDENT",
  id,
});

// EDIT_EXPENSE
export const editStudent = (id, updates) => ({
  type: "EDIT_STUDENT",
  id,
  updates,
});
