import React, { useEffect, useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import "react-table/react-table.css";
import { mapDispatchToProps } from "../../../../../ui-utils/commons";
import { Hidden, Typography, Grid, Button } from "@material-ui/core";
import logoImage from "../../../../../ui-assets/images/logoYardstix.svg";
import { httpRequest } from "../../../../../ui-utils/api";

const styles = theme => ({
  root: {
    height: "100vh",
    background: "#F8F8F8",
    width: "100%"
  },

  //desktop

  dashboardRoot: {
    display: "flex",
    flexFlow: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    fontFamily: "Montserrat"
  },
  welcomtext: {
    fontFamily: "Montserrat",
    fontSize: 20,
    fontWeight: 400
  },
  infoText: {
    fontFamily: "Montserrat",
    fontSize: 20,
    fontWeight: 400,
    width: "50%",
    textAlign: "center"
  },
  highlightText: {
    fontFamily: "Montserrat",
    fontSize: 20,
    fontWeight: 700
  },

  //mobile view
  mobileRoot: {
    padding: "34px"
  },
  logoImageStyle: {
    display: "flex",
    justifyContent: "center",
    padding: "120px 0px !important",
    "@media only screen and (min-width:250px) and (max-width:350px)": {
      padding: "60px 0px !important"
    },
    "@media only screen and (min-height:550px) and (max-height:600px)": {
      padding: "60px 0px"
    }
    // "@media only screen and (min-width:250px) and (max-width:300px)": {
    //   fontSize: "12px"
    // },
  },
  logoMobiimg: {
    "@media only screen and (min-width:250px) and (max-width:420px)": {
      height: "60px"
    },
    "@media only screen and (min-height:700px) and (max-height:1000px)": {
      height: "unset"
    }
  },
  redCard: {
    background: "linear-gradient(to right, #820505 40%,#D22222  100%)",
    borderRadius: 10,
    padding: "20px",
    display: "flow-root",
    textAlign: "unset"
  },

  whiteCard: {
    background: "#9B9B9B",
    borderRadius: 10,
    padding: "20px"
  },

  openText: {
    fontSize: 24,
    fontWeight: 700,
    fontFamily: "Montserrat",
    color: "#fff",
    display: "flex",
    flexFlow: "row",
    alignItems: "start"
    // "@media only screen and (min-width:250px) and (max-width:300px)": {
    //   fontSize: "20px"
    // },
  },
  openText2: {
    fontSize: "14px",
    fontWeight: 400,
    fontFamily: "Montserrat",
    color: "#fff",
    display: "flex",
    flexFlow: "row",
    alignItems: "start",
    textTransform: "lowercase"
    // "@media only screen and (min-width:250px) and (max-width:300px)": {
    //   fontSize: "12px"
    // },
  },
  suggestionText: {
    padding: "50px 0px",
    fontSize: 16,
    lineHeight: "24px",
    fontFamily: "Montserrat",
    fontWeight: 400
  },
  buttonStyle: {
    color: "#D22222",
    fontSize: 16,
    lineHeight: "24px",
    fontFamily: "Montserrat",
    fontWeight: 400,
    textTransform: "unset",
    padding: 0
  }
});

const Dashboard = props => {
  const { classes, userInfo, openSurvey, history } = props;
  console.log("user", userInfo);
  console.log("open survy", openSurvey);

  const [openSurveyDetails, setOpenSurveydetails] = useState([]);
  const [surveyList, setSurveyList] = useState(" ");
  console.log("surveyLi", surveyList);

  useEffect(() => {
    if (userInfo?.UserId) {
      getOpenSurvey(userInfo.UserId);
    }
  }, [userInfo]);

  const openSurveyHandler = () => {
    if (openSurvey) {
      getQuestionHandler(openSurvey[0]?.userId, openSurvey[0]?.surveyId);
    }
    history.push("./user-home/questionComponent");
  };

  const onClickHandler = () => {
    const { history } = props;
    history.push("./user-home/feedback");
  };

  const getQuestionHandler = async (uid, sid) => {
    try {
      await httpRequest({
        endPoint: `api/v1/user/questions?userId=${uid}&questionId=${0}&surveyId=${sid}`,
        method: "get",
        instance: "instanceOne",
        contentType: "application/json",
        authReqd: true
      }).then(response => {
        console.log(response);
        localStorage.setItem("question1_data", JSON.stringify(response));
        props.setAppData("dashboard.question1_data", response);
      });
    } catch (e) {
      console.log(e);
    }
    // history.push("./user-home/question1");
  };

  const getOpenSurvey = async id => {
    try {
      await httpRequest({
        endPoint: `api/v1/user/allOpenSurveys?userId=${id}`,
        method: "get",
        instance: "instanceOne",
        contentType: "application/json",
        authReqd: true
      }).then(response => {
        console.log(response);
        localStorage.setItem("openSurvey", JSON.stringify(response));
        props.setAppData("dashboard.openSurvey", response);
        // setOpenSurveydetails({ openSurveyDetails: response });
        let Tempdata = response.filter(item => !item._Finalized).length;
        setSurveyList({ surveyList: Tempdata });
      });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className={classes.root}>
      <Hidden only={"xs"}>
        <div className={classes.dashboardRoot}>
          <Typography className={classes.welcomtext}>Welcome to</Typography>
          <img className={classes.logoMobiimg} src={logoImage} alt="logo" />
          <Typography className={classes.infoText}>
            Currently we help you measure your success in transforming only
            through your mobile device.{" "}
            <a className={classes.highlightText}> Quick and simple! </a>
          </Typography>
        </div>
      </Hidden>
      <Hidden only={["lg", "md", "xl", "sm"]}>
        <div className={classes.mobileRoot}>
          <div className={classes.logoImageStyle}>
            <img className={classes.logoMobiimg} src={logoImage} alt="logo" />
          </div>
          {surveyList === 0 ? (
            <div className={classes.whiteCard}>
              <Typography className={classes.openText}>No open Stix</Typography>
              <Typography className={classes.openText2}>
                {" "}
                Good luck transforming your organization! There are no new Stix
                planned for you yet...s!
              </Typography>
            </div>
          ) : (
            <Button className={classes.redCard} onClick={openSurveyHandler}>
              <Typography className={classes.openText}>
                {" "}
                {surveyList.surveyList} open Stix
              </Typography>
              <Typography className={classes.openText2}>
                {" "}
                The weekly Change {openSurvey[0]?.surveyName} is ready for you!
              </Typography>
            </Button>
          )}

          <Typography className={classes.suggestionText}>
            We are continuously adding new functionalities to your personal
            Yardstix space! If you have suggestions please{" "}
            <a className={classes.buttonStyle} onClick={() => onClickHandler()}>
              click here...
            </a>
          </Typography>
        </div>
      </Hidden>
    </div>
  );
};

const mapStateToProps = ({ screenConfiguration = {} }) => {
  const { preparedFinalObject = {} } = screenConfiguration;
  const { userInfo, dashboard } = preparedFinalObject;
  const { openSurvey } = dashboard || "";
  return { userInfo, openSurvey };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Dashboard));

// class Dashboard extends React.Component {
//   state = {
//     userSurvey: [],
//     // UserIdNumber: this.props.userInfo.UserId,
//   }
//   componentDidMount = () => {
//     console.log("user", this.props.userInfo);
//     if (this.props.userInfo?.UserId) {
//       this.getOpenSurveyList(this.props.userInfo.UserId);
//       // this.getOpenSurveyList();
//     }
//   }

//   onClickHandler = () => {
//     const { history } = this.props;
//     history.push("./user-home/feedback");
//   };

//   redCardHandler = () => {
//     const { history } = this.props;
//     history.push("./user-home/question1");
//   };

//   getOpenSurveyList = async id => {
//     const { setAppData } = this.props;
//     console.log("props",this.props);
//     try {
//       await httpRequest({
//         endPoint: `api/v1/user/allOpenSurveys?userId=${id}`,
//         method: "get",
//         instance: "instanceOne",
//         contentType:"appication/json"
//       }).then(response => {
//         console.log("response", response);
//         if (response?.length > 0) {
//           setAppData("dashboard.organisation_info", response);
//           this.setState({ userSurvey: response[0] });
//         }
//       });
//     } catch (e) {
//       console.log({ e });
//     }
//   };

//   render() {
//     const { classes, userInfo } = this.props;
//     console.log("user", userInfo);

//     return (
//       <div className={classes.root}>
//         <Hidden only={"xs"}>
//           <div className={classes.dashboardRoot}>
//             <Typography className={classes.welcomtext}>Welcome to</Typography>
//             <img className={classes.logoMobiimg} src={logoImage} alt="logo" />
//             <Typography className={classes.infoText}>
//               Currently we help you measure your success in transforming only
//               through your mobile device.{" "}
//               <a className={classes.highlightText}> Quick and simple! </a>
//             </Typography>
//           </div>
//         </Hidden>
//         <Hidden only={["lg", "md", "xl", "sm"]}>
//           <div className={classes.mobileRoot}>
//             <div className={classes.logoImageStyle}>
//               <img className={classes.logoMobiimg} src={logoImage} alt="logo" />
//             </div>
//             <Button className={classes.redCard} onClick={this.redCardHandler}>
//               <Typography className={classes.openText}>1 open Stix</Typography>
//               <Typography className={classes.openText2}>
//                 {" "}
//                 The weekly Change Readiness Stix is ready for you!
//               </Typography>
//             </Button>

//             {/* no open Stix */}

//             {/* <div className={classes.whiteCard}>
//               <Typography className={classes.openText}>No open Stix</Typography>
//               <Typography className={classes.openText2}> Good luck transforming your organization! There are no new Stix planned for you yet...s!</Typography>
//             </div> */}

//             <Typography className={classes.suggestionText}>
//               We are continuously adding new functionalities to your personal
//               Yardstix space! If you have suggestions please{" "}
//               <a className={classes.buttonStyle} onClick={this.onClickHandler}>
//                 click here...
//               </a>
//             </Typography>
//           </div>
//         </Hidden>
//       </div>
//     );
//   }
// }
// const mapStateToProps = ({ screenConfiguration = {} }) => {
//   const { preparedFinalObject = {} } = screenConfiguration;
//   const { userInfo } = preparedFinalObject;
//   return { userInfo };
// };
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(withStyles(styles)(Dashboard));
