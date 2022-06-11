import React from "react";
import { Route } from "react-router";
import Loadable from "react-loadable";
import Loading from "../ui-molecules/Loading";

const Dashboard = Loadable({
  loader: () => import("../ui-pages/UserHome/components/Content/Dashboard"),
  loading: Loading
});

const QuestionComponent = Loadable({
  loader: () =>
    import(
      "../ui-pages/UserHome/components/Content/Dashboard/components/Mobile/quesionComponent"
    ),
  loading: Loading
});

const feedback = Loadable({
  loader: () =>
    import(
      "../ui-pages/UserHome/components/Content/Dashboard/components/Mobile/feedback"
    ),
  loading: Loading
});

const UserRoutes = () => {
  return (
    <div>
      <Route exact path="/Yardstix/user-home" component={Dashboard} />
      <Route
        path="/Yardstix/user-home/questionComponent"
        component={QuestionComponent}
      />
      <Route path="/Yardstix/user-home/feedback" component={feedback} />
    </div>
  );
};

export default UserRoutes;
