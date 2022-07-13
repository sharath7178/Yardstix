import React from "react";
import { withStyles } from "@material-ui/styles";
import logoImage from "../../../../../../../../../ui-assets/images/logoYardstix.svg";
import returnButton from "../../../../../../../../../ui-assets/images/keyboardReturn.svg";
import details from "../../../../../../../../../ui-assets/images/details.svg";
import { Typography } from "@material-ui/core";

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
    "@media only screen and (min-width:250px) and (max-width:320px)": {
      height: "60px"
    }
  },

  progressText: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 20,
    fontWeight: 600,
    padding: "20px"
  },
  ProgressBarStyle: {
    display: "flex",
    height: "60%",
    flexFlow: "column",
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  detailsButtonAlignCenter: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    display: "flex"
  },
  detailsButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0px 4px 4px rgb(0 0 0 / 25%)",
    gap: "20px",
    position: "absolute",
    bottom: "15%",
    padding: "10px",
    width: "200px",
    height: 60,
    borderRadius: 5
  },
  barText: {
    fontSize: "18px",
    fontFamily: "Montserrat",
    fontWeight: "600"
  },
  bar: {
    width: 50,
    background:
      "linear-gradient(180deg, rgba(255, 0, 0, 0.11) 0%, #860909 48.44%, #DA0B0B 100%)",
    height: "100%"
  },
  targetText: {
    borderRadius: "100%",
    width: 30,
    textAlign: "center",
    height: 30
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
    // boxShadow: "0px 0px 40px rgba(0, 0, 0, 0.1)",
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

const ProgressBar = props => {
  const { classes, history } = props;
  const onClickHandler = () => {
    history.push("./");
  };

  const detailsScreenHandler = () => {
    history.push("/Yardstix/user-home/ProgressDetails");
  };
  return (
    <div className={classes.mobileRoot}>
      <div className={classes.logoImageStyle}>
        <img className={classes.logoMobiimg} src={logoImage} alt="logo" />
      </div>
      <Typography className={classes.progressText}> progress</Typography>
      <div className={classes.ProgressBarStyle}>
        <Typography className={classes.barText}>100%</Typography>
        <div className={classes.bar}>
          <div>
            <input className={classes.targetText} type="text"></input>
            <label className={classes.targetLabel}>Target</label>
          </div>
        </div>
        <Typography className={classes.barText}>0%</Typography>
      </div>
      <div className={classes.detailsButtonAlignCenter}>
        <div className={classes.detailsButton} onClick={detailsScreenHandler}>
          <img src={details} alt="back" />
          <Typography className={classes.progressText}> Details</Typography>
        </div>
      </div>
      <div className={classes.footerStyle} onClick={() => onClickHandler()}>
        <img src={returnButton} alt="back" />
      </div>
    </div>
  );
};

export default withStyles(styles)(ProgressBar);
