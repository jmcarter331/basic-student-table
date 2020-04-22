import { createStore } from "redux";
import studentsReducer from "../reducers/students";

export default () => {
  const store = createStore(studentsReducer);
  return store;
};
