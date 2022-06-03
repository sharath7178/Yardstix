import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import "react-table/react-table.css";
import { mapDispatchToProps } from "../../../../../ui-utils/commons";
import { Hidden, Typography, Grid, Button } from "@material-ui/core";
import logoImage from "../../../../../ui-assets/images /logoYardstix.svg";

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

class Dashboard extends React.Component {
  onClickHandler = () => {
    const { history } = this.props;
    history.push("./user-home/feedback");
  };

  redCardHandler = () => {
    const { history } = this.props;
    history.push("./user-home/question1");
  };

  render() {
    const { classes } = this.props;

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
            <Button className={classes.redCard} onClick={this.redCardHandler}>
              <Typography className={classes.openText}>1 open Stix</Typography>
              <Typography className={classes.openText2}>
                {" "}
                The weekly Change Readiness Stix is ready for you!
              </Typography>
            </Button>

            {/* no open Stix */}

            {/* <div className={classes.whiteCard}>
              <Typography className={classes.openText}>No open Stix</Typography>
              <Typography className={classes.openText2}> Good luck transforming your organization! There are no new Stix planned for you yet...s!</Typography>
            </div> */}

            <Typography className={classes.suggestionText}>
              We are continuously adding new functionalities to your personal
              Yardstix space! If you have suggestions please{" "}
              <a className={classes.buttonStyle} onClick={this.onClickHandler}>
                click here...
              </a>
            </Typography>
          </div>
        </Hidden>
      </div>
    );
  }
}
const mapStateToProps = ({ screenConfiguration = {} }) => {
  const { preparedFinalObject = {} } = screenConfiguration;
  const { dashboard } = preparedFinalObject;
  return { dashboard };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Dashboard));

// import { Box, Slider } from "@material-ui/core";
// import { useState } from "react";

// function App() {
//   const [value, setValue] = useState(20);

//   const changeValue = (event, value) => {
//     setValue(value);
//   };

//   const [multiValue, setMultiValue] = useState([20, 30, 50]);

//   const changeMultiValue = (event, value) => {
//     setMultiValue(value);
//   };

//   const getText = (valu) => `${value}`;

//   const customMarks = [
//     {
//       value: 10,
//       label: "$10"
//     },
//     {
//       value: 20,
//       label: "$20"
//     },
//     {
//       value: 30,
//       label: "$30"
//     },
//     {
//       value: 40,
//       label: "$40"
//     },
//     {
//       value: 50,
//       label: "$50"
//     },
//     {
//       value: 100,
//       label: "$100"
//     }
//   ];
//   return (
//     <Box display="flex" flexDirection="column" m={10}>
//       <Slider style={{ width: 300 }} value={value} onChange={changeValue} />
//       <Slider
//         style={{ width: 300 }}
//         min={10}
//         max={100}
//         step={10}
//         value={value}
//         marks
//         onChange={changeValue}
//         valueLabelDisplay="auto"
//         getAriaValueText={getText}
//       />
//       <Slider
//         disabled
//         style={{ width: 300 }}
//         value={value}
//         onChange={changeValue}
//       />
//       <Slider
//         style={{ width: 300 }}
//         min={10}
//         max={100}
//         step={10}
//         value={value}
//         marks={customMarks}
//         onChange={changeValue}
//         valueLabelDisplay="auto"
//         getAriaValueText={getText}
//       />
//       <Slider
//         style={{ width: 300 }}
//         min={10}
//         max={100}
//         step={10}
//         value={value}
//         marks={customMarks}
//         onChange={changeValue}
//         valueLabelDisplay="on"
//         getAriaValueText={getText}
//       />
//       <Slider
//         style={{ width: 300 }}
//         min={10}
//         max={100}
//         step={null}
//         value={value}
//         marks={customMarks}
//         onChange={changeValue}
//         valueLabelDisplay="auto"
//         getAriaValueText={getText}
//       />
//       <Slider
//         style={{ width: 300 }}
//         min={10}
//         max={100}
//         step={null}
//         value={value}
//         marks={customMarks}
//         onChange={changeValue}
//         valueLabelDisplay="auto"
//         getAriaValueText={getText}
//         track="inverted"
//       />
//       <Slider
//         style={{ height: 300, marginTop: 30 }}
//         min={10}
//         max={100}
//         step={null}
//         value={value}
//         marks={customMarks}
//         onChange={changeValue}
//         valueLabelDisplay="auto"
//         getAriaValueText={getText}
//         orientation="vertical"
//       />
//       <Slider
//         style={{ width: 300, marginTop: 40 }}
//         min={10}
//         max={100}
//         value={multiValue}
//         onChange={changeMultiValue}
//       />
//     </Box>
//   );
// }

// export default App;
