import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AllStudents from "../components/AllStudent";
import AddStudent from "../components/AddStudent";
import EditStudent from "../components/EditStudent";
import Header from "../components/Header";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={AllStudents} exact={true} />
        <Route path="/create" component={AddStudent} />
        <Route path="/edit/:id" component={EditStudent} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
