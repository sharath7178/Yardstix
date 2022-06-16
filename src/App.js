import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import Snackbar from "./ui-containers/SnackBar";
import CircularProgress from "@material-ui/core/CircularProgress";
import { mapDispatchToProps } from "./ui-utils/commons";
import MainRoutes from "./ui-routes/MainRoutes";
import { connect } from "react-redux";
import "./App.css";
import { httpRequest } from "./ui-utils/api";
import LoadingOverlay from "react-loading-overlay";

const App = props => {
  const { setAppData, menuList = [] } = props;
  const [loader, setLoader] = useState(false);
  const hasAccess_token =
    window.location.href.includes("access_token") || false;

  console.log("access token", hasAccess_token);

  useEffect(() => {
    debugger;
    if (hasAccess_token) {
      let tempLocation = window.location.href.split("&")?.[0].split("=") || "";
      localStorage.setItem("access_token", tempLocation[1]);
      getAuthInfo(tempLocation[1]);
    }
  }, [hasAccess_token]);

  const getAuthInfo = async access_token => {
    setLoader(true);
    try {
      await httpRequest({
        endPoint: "api/Account/UserInfo",
        method: "get",
        instance: "instanceOne",
        headers: {
          Authorization: `Bearer ${access_token}`
        }
      }).then(response => {
        console.log("userInfo", response);
        if (response.UserId) {
          localStorage.setItem("validityResponse", JSON.stringify(response));
          props.setAppData("userInfo", response);
          setLoader(false);
          props.history.push("/Yardstix/user-home");
        }
      });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <LoadingOverlay
      spinner={<CircularProgress />}
      styles={{
        overlay: base => ({
          ...base,
          backgroundColor: "rgba(0, 0, 0, 0.16)",
          backdropFilter: "blur(2px)"
        })
      }}
      active={loader}
    >
      <div>
        <MainRoutes />
        <Snackbar />
      </div>
    </LoadingOverlay>
  );
};

const mapStateToProps = ({ screenConfiguration }) => {
  const { preparedFinalObject = {} } = screenConfiguration;
  const { spinner = false, userInfo = {}, menuList = [] } = preparedFinalObject;
  return { spinner, userInfo, menuList };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));

// import React from "react";
// import { withRouter } from "react-router-dom";
// import Snackbar from "./ui-containers/SnackBar";
// import CircularProgress from "@material-ui/core/CircularProgress";
// import { mapDispatchToProps } from "./ui-utils/commons";
// import MainRoutes from "./ui-routes/MainRoutes";
// import isEmpty from "lodash/isEmpty";
// import { connect } from "react-redux";
// import "./App.css";
// import { httpRequest } from "./ui-utils/api";
// // import LoadingOverlay from "react-loading-overlay";

// class App extends React.Component {
//   state = {
//     loader: false,
//   }

//   componentDidMount = () => {
//     if (hasAccess_token) {
//       let tempLocation = window.location.href.split("&")?.[0].split("=") || "";
//       localStorage.setItem("access_token", tempLocation[1]);
//       getAuthInfo(tempLocation[1]);
//     }
//   }zz[hasAccess_token]);

//   render() {
//     const { spinner, userInfo } = this.props;

//     const hasAccess_token =
//       window.location.href.includes("access_token") || false;
//     return (
//       <div>
//         <MainRoutes />
//         <Snackbar />
//         {spinner && isEmpty(userInfo) && (
//           <div
//             style={{
//               position: "absolute",
//               left: "50%",
//               top: "50%",
//               transform: "translate(-50%, -50%)"
//             }}
//           >
//             <CircularProgress />
//           </div>
//         )}
//       </div>
//     );
//   }
// }

// const mapStateToProps = ({ screenConfiguration }) => {
//   const { preparedFinalObject = {} } = screenConfiguration;
//   const { spinner = false, userInfo = {} } = preparedFinalObject;
//   return { spinner, userInfo };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));
