import React from "react";
import { withStyles } from "@material-ui/core";
import returnButton from "../../../../../../../../../ui-assets/images/keyboardReturn.svg";
import logoImage from "../../../../../../../../../ui-assets/images/logoYardstix.svg";
import { Typography } from "@material-ui/core";
import "./ProgressDetails.css";
import static_scale from "../../../../../../../../../ui-assets/images/static_scale.svg";

const styles = theme => ({
  mobileRoot: {
    padding: 34,
    height: "100vh",
    background: "#fff"
  },
  logoImageStyle: {
    display: "flex",
    justifyContent: "center",
    // padding: "40px 0px",
    "@media only screen and (min-height:400px) and (max-height:630px)": {
      padding: "20px 0px"
    }
  },
  logoMobiimg: {
    width: "200px",
    "@media only screen and (min-width:250px) and (max-width:380px)": {
      width: "150px"
    }
  },
  progressText: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 20,
    fontWeight: 600,
    padding: "10px"
  },

  scaleIdentifier: {
    display: "flex",
    justifyContent: "space-around"
  },

  scaleText: {
    fontSize: "12px",
    fontFamily: "Montserrat",
    fontWeight: 600,
    paddingBottom: "5px"
  },

  scaleDesign: {
    display: "flex",
    background:
      "linear-gradient(0.25turn, #FF0000 0% 30%, #820505 30% 70%, #FDE7E7 70%)",
    padding: "10px",
    "@media only screen and (min-width:250px) and (max-width:380px)": {
      padding: "5px"
    }
  },

  yellowScaleDesign: {
    // border: "1px solid #820505",
    // background: "#FFE669",
    // padding: "20px",
    marginTop: "10px",
    // display: "flex",
    // justifyContent: "space-around",
    "@media only screen and (min-width:250px) and (max-width:380px)": {
      padding: "5px",
      marginTop: "5px"
    }
  },
  YelloScaleText: {
    fontSize: "13px",
    fontFamily: "Montserrat",
    fontWeight: 600,
    paddingBottom: "5px",
    color: " #820505"
  },
  surveyScale: {
    fontSize: "13px",
    fontFamily: "Montserrat",
    fontWeight: 600,
    paddingTop: "10px",
    "@media only screen and (min-width:250px) and (max-width:380px)": {
      paddingTop: "5px"
    }
  },
  surveyDetailBar: {
    border: "0.5px solid #820505",
    padding: "5px",
    display: "flex",
    justifyContent: "center",
    flexFlow: "column"
  },
  customProgressBar: {
    display: "flex",
    background:
      "linear-gradient(0.25turn, #FF0000 0% 30%, #820505 30% 70%, #FDE7E7 70%)",
    padding: "2px"
  },

  footerStyle: {
    position: "fixed",
    left: 0,
    bottom: 0,
    width: "100%",
    color: "white",
    textAlign: "center",
    height: "100px",
    boxShadow:
      "rgb(0 0 0 / 25%) 0px 54px 55px, rgb(0 0 0 / 12%) 0px -12px 30px, rgb(0 0 0 / 12%) 0px 4px 6px, rgb(0 0 0 / 17%) 0px 12px 13px, rgb(0 0 0 / 9%) 0px -3px 5px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "@media only screen and (min-height:600px) and (max-height:750px)": {
      height: "50px"
    },
    "@media only screen and (min-height:500px) and (max-height:600px)": {
      height: "40px"
    }
  }
});

const readings = [
  {
    name: "Apples",
    value: 30,
    color: "#ff0000"
  },
  {
    name: "Blueberries",
    value: 40,
    color: "#820505"
  },
  {
    name: "Guavas",
    value: 30,
    color: "#fde7e7"
  }
];

const ProgressDetailsJson = [
  {
    Name: "Customer Experience"
  },
  {
    Name: "Data & Insights"
  },
  {
    Name: "Strategy & Leadership"
  },
  {
    Name: "Technology"
  },
  {
    Name: "Supply Chain Management"
  },
  {
    Name: "Culture & People"
  },
  {
    Name: "Organization"
  },
  {
    Name: "Marketing"
  },
  {
    Name: "Cyber Security"
  },
  {
    Name: "Brand Management"
  }
];

// const bars = readings.map((item, i) => {
//     debugger
//     if (item.value > 0) {
//         return (
//             <div className="bar" style={{ 'backgroundColor': item.color, 'width': item.value + '%' }} key={i}>

//             </div>
//         )
//     }
// }, bars);

let bars =
  readings &&
  readings.length &&
  readings.map((item, i) => {
    return (
      <div
        className="bar"
        style={{ backgroundColor: item.color, width: item.value + "%" }}
        key={i}
      ></div>
    );
  }, this);

const ProgressDetails = props => {
  const { classes, history, parent } = props;

  const onClickHandler = () => {
    history.push("./");
  };

  return (
    <div className={classes.mobileRoot}>
      <div className={classes.logoImageStyle}>
        <img className={classes.logoMobiimg} src={logoImage} alt="logo" />
      </div>
      <Typography className={classes.progressText}>
        {" "}
        Progress details
      </Typography>
      <div className={classes.scaleIdentifier}>
        <Typography className={classes.scaleText}> Start state</Typography>
        <Typography className={classes.scaleText}> Progress </Typography>
        <Typography className={classes.scaleText}> Target state</Typography>
      </div>
      <div className={classes.scaleDesign}></div>
      <div className={classes.yellowScaleDesign}>
        <img src={static_scale} alt="scale" />
        {/* <Typography className={classes.YelloScaleText}>  Basic</Typography>
                <Typography className={classes.YelloScaleText}> Medium </Typography>
                <Typography className={classes.YelloScaleText}> Good</Typography>
                <Typography className={classes.YelloScaleText}> Elite</Typography> */}
      </div>
      {ProgressDetailsJson.map((item, key) => {
        return (
          <div key={key}>
            <Typography className={classes.surveyScale}>{item.Name}</Typography>
            <div className={classes.surveyDetailBar}>
              <div className="multicolor-bar">
                <div className="bars">{bars === "" ? "" : bars}</div>
              </div>
            </div>
          </div>
        );
      })}
      <div className={classes.footerStyle} onClick={() => onClickHandler()}>
        <img src={returnButton} alt="back" />
      </div>
    </div>
  );
};

export default withStyles(styles)(ProgressDetails);
