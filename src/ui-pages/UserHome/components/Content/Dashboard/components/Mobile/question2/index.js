import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import "react-table/react-table.css";
import {
  mapDispatchToProps,
  departments
} from "../../../../../../../../ui-utils/commons";
import {
  Hidden,
  Typography,
  Grid,
  Button,
  IconButton,
  InputBase
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
    "@media only screen and (min-height:450px) and (max-height:650px)": {
      padding: "30px 0px"
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
    "@media only screen and (min-width:315px) and (max-width:400px)": {
      fontSize: 15
    },
    "@media only screen and (min-width:250px) and (max-width:315px)": {
      fontSize: 13
    },
    "@media only screen and (min-height:450px) and (max-height:600px)": {
      fontSize: 13
    }
  },
  alignDesignationItems: {
    border: "1px solid darkred",
    // borderRadius: "10px",
    margin: "0px 10px 10px 0px",
    color: "darkred",
    fontSize: 16,
    fontFamily: "Montserrat",
    "@media only screen and (min-width:330px) and (max-width:400px)": {
      fontSize: 14
    },
    "@media only screen and (min-width:250px) and (max-width:330px)": {
      fontSize: 12
    },
    "@media only screen and (min-height:450px) and (max-height:600px)": {
      fontSize: "14px"
    }
  },
  selectingDesignationItems: {
    border: "1px solid darkred",
    margin: "0px 10px 10px 0px",
    color: "#fff",
    fontSize: 16,
    fontFamily: "Montserrat",
    background: "darkred !important",
    "@media only screen and (min-width:330px) and (max-width:400px)": {
      fontSize: 14
    },
    "@media only screen and (min-width:250px) and (max-width:330px)": {
      fontSize: 12
    },
    "@media only screen and (min-height:450px) and (max-height:600px)": {
      fontSize: "14px"
    }
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
    // "@media only screen and (min-height:600px) and (max-height:750px)": {
    //   borderRadius: "5px 0px 0px 5px",
    // },
  },
  checkimg: {
    "@media only screen and (min-height:600px) and (max-height:750px)": {
      height: "30px"
    },
    "@media only screen and (min-height:450px) and (max-height:600px)": {
      height: "25px"
    }
  },
  searchData: {
    display: "flex",
    border: "1px solid darkred",
    borderRadius: 10,
    padding: 10
  },
  stylesText: {
    padding: 0,
    fontFamily: "Montserrat",
    display: "flex",
    color: "#400505",
    fontSize: 16
  }
});

class Question1 extends React.Component {
  state = {
    dummyArray: departments
  };

  backHandler = () => {
    const { history } = this.props;
    history.push("/Yardstix/user-home");
  };

  nextQuestionHandler = () => {
    const { history } = this.props;
    history.push("/Yardstix/user-home/question3");
  };

  selectingHandler = key => {
    let dummyState = [];
    dummyState = this.state.dummyArray.map((item, index) => {
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
    this.setState({ dummyArray: [...dummyState] });
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
            Please select your department
          </Typography>
          <div style={{ padding: "20px 0px" }}>
            {this.state.dummyArray.map((item, key) => {
              return (
                <Button
                  key={key}
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

          <div className={classes.searchData}>
            <InputBase
              className={classes.stylesText}
              placeholder="Type other here...."
              type="text"
              // defaultValue={company_guide?.Description || ""}
              // onChange={e => this.handleChnage(e.target.value)}
              // multiline={2}
              style={{ lineHeight: "30px" }}
              fullWidth
            />
          </div>
        </div>

        <Grid container className={classes.footerStyle}>
          <Grid item xs={6} justify="center" className={classes.backImage}>
            <IconButton onClick={this.backHandler}>
              <img className={classes.backimg} src={back} alt="back" />
            </IconButton>
          </Grid>
          <Grid item xs={6} justify="center" className={classes.checkImage}>
            <IconButton onClick={this.nextQuestionHandler}>
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
)(withStyles(styles)(Question1));
