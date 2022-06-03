import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import "react-table/react-table.css";
import {
  mapDispatchToProps,
  marks
} from "../../../../../../../../ui-utils/commons";
import {
  Hidden,
  Typography,
  Grid,
  Button,
  IconButton
} from "@material-ui/core";
import logoImage from "../../../../../../../../ui-assets/images /logoYardstix.svg";
import back from "../../../../../../../../ui-assets/images /keyboardReturn.svg";
import check from "../../../../../../../../ui-assets/images /check.svg";

const styles = theme => ({
  root: {
    height: "100vh",
    background: "#F8F8F8",
    width: "100%"
  },

  //desktop

  //mobile view
  mobileRoot: {
    padding: 34
  },
  logoImageStyle: {
    display: "flex",
    justifyContent: "center",
    padding: "60px 0px",
    "@media only screen and (min-height:600px) and (max-height:750px)": {
      padding: "30px 0px"
    },
    "@media only screen and (min-height:450px) and (max-height:600px)": {
      padding: "20px 0px"
    }
  },
  logoMobiimg: {
    "@media only screen and (min-width:250px) and (max-width:420px)": {
      height: "60px"
    }
  },
  questionStyle: {
    color: "#400505",
    fontSize: 18,
    lineHeight: "24px",
    fontFamily: "Montserrat",
    fontWeight: 700,
    "@media only screen and (min-width:250px) and (max-width:420px)": {
      fontSize: 14
    }
  },

  alignDesignationItems: {
    display: "flex",
    border: "1px solid darkred",
    borderRadius: "10px",
    margin: "10px 0px",
    color: "darkred",
    fontSize: 16,
    justifyContent: "flex-start",
    fontFamily: "Montserrat",
    "@media only screen and (min-width:320px) and (max-width:420px)": {
      fontSize: 14
    },
    "@media only screen and (min-width:250px) and (max-width:320px)": {
      fontSize: 14
    }
  },
  selectingDesignationItems: {
    display: "flex",
    border: "2px solid darkred",
    borderRadius: "10px",
    margin: "10px 0px",
    background: "darkred !important",
    color: "#fff",
    fontSize: 15,
    justifyContent: "flex-start",
    fontFamily: "Montserrat"
  },
  designationButton: {
    width: "100%",
    display: "flex"
  },
  footerStyle: {
    position: "fixed",
    left: 0,
    bottom: 0,
    width: "100%",
    color: "white",
    textAlign: "center",
    height: "100px",
    boxShadow: "0px 0px 40px rgba(0, 0, 0, 0.1)",
    "@media only screen and (min-height:600px) and (max-height:750px)": {
      height: "50px"
    },
    "@media only screen and (min-height:450px) and (max-height:600px)": {
      height: "40px"
    }
  },
  backImage: {
    color: "#9B9B9B",
    display: "flex",
    alignItems: "center"
  },
  backimg: {
    "@media only screen and (min-height:600px) and (max-height:750px)": {
      height: "30px"
    },
    "@media only screen and (min-height:450px) and (max-height:600px)": {
      height: "25px"
    }
  },
  checkImage: {
    display: "flex",
    alignItems: "center",
    background: "linear-gradient(31.62deg, #299F16 0%, #8BFF78 100%)",
    borderRadius: "10px 0px 0px 10px"
  },
  checkimg: {
    "@media only screen and (min-height:600px) and (max-height:750px)": {
      height: "30px"
    },
    "@media only screen and (min-height:450px) and (max-height:600px)": {
      height: "25px"
    }
  }
});

class Question3 extends React.Component {
  state = {
    selectingValue: false,
    marksState: marks
  };

  backHandler = () => {
    const { history } = this.props;
    history.push("/Yardstix/user-home");
  };

  nextQuestionHandler = () => {
    const { history } = this.props;
    history.push("/Yardstix/user-home/question4");
  };

  selectingHandler = key => {
    let dummyState = [];
    dummyState = this.state.marksState.map((item, index) => {
      if (index !== key) {
        return {
          ...dummyState,
          ...item,
          selected: true
        };
      } else {
        return {
          ...dummyState,
          ...item,
          selected: false
        };
      }
    });
    this.setState({ marksState: dummyState });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.mobileRoot}>
          <div className={classes.logoImageStyle}>
            <img className={classes.logoMobiimg} src={logoImage} alt="logo" />
          </div>
          <Typography className={classes.questionStyle}>
            Please select your designation
          </Typography>
          {this.state.marksState.map((item, key) => {
            return (
              <Button
                key={key}
                style={{ width: item.width }}
                className={
                  item.selected === false
                    ? classes.selectingDesignationItems
                    : classes.alignDesignationItems
                }
                onClick={() => this.selectingHandler(key)}
              >
                {item.name}
              </Button>
            );
          })}
        </div>

        <Grid container className={classes.footerStyle}>
          <Grid item xs={6} justify="center" className={classes.backImage}>
            <IconButton onClick={this.backHandler}>
              <img className={classes.backimg} src={back} alt="back" />
            </IconButton>
          </Grid>
          <Grid item xs={6} justify="center" className={classes.checkImage}>
            <IconButton>
              <img className={classes.checkimg} src={check} alt="logo" />
            </IconButton>
          </Grid>
        </Grid>
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
)(withStyles(styles)(Question3));
