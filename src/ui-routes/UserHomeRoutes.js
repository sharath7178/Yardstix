import React from "react";
import { Route } from "react-router";
import Loadable from "react-loadable";
import Loading from "../ui-molecules/Loading";

const Dashboard = Loadable({
  loader: () => import("../ui-pages/UserHome/components/Content/Dashboard"),
  loading: Loading
});

const Question1 = Loadable({
  loader: () =>
    import(
      "../ui-pages/UserHome/components/Content/Dashboard/components/Mobile/question1"
    ),
  loading: Loading
});

const Question2 = Loadable({
  loader: () =>
    import(
      "../ui-pages/UserHome/components/Content/Dashboard/components/Mobile/question2"
    ),
  loading: Loading
});

const Question3 = Loadable({
  loader: () =>
    import(
      "../ui-pages/UserHome/components/Content/Dashboard/components/Mobile/question3"
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
      <Route path="/Yardstix/user-home/question1" component={Question1} />
      <Route path="/Yardstix/user-home/question2" component={Question2} />
      <Route path="/Yardstix/user-home/question3" component={Question3} />
      <Route path="/Yardstix/user-home/feedback" component={feedback} />
    </div>
  );
};

export default UserRoutes;
