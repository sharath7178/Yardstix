import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import "react-table/react-table.css";
import {
  mapDispatchToProps,
  sliderJson
} from "../../../../../../../../ui-utils/commons";
import {
  Hidden,
  Typography,
  Grid,
  Button,
  IconButton
} from "@material-ui/core";
import logoImage from "../../../../../../../../ui-assets/images /logoYardstix.svg";
import Stack from "@mui/material/Stack";
import Slider from "@mui/material/Slider";
import { styled } from "@mui/material/styles";
import back from "../../../../../../../../ui-assets/images /keyboardReturn.svg";
import check from "../../../../../../../../ui-assets/images /check.svg";
import "./index.css";

const styles = theme => ({
  root: {
    height: "100vh",
    background: "#F8F8F8",
    width: "100%"
  },

  //desktop

  //mobile view
  mobileRoot: {
    padding: 34,
    "@media only screen and (min-height:600px) and (max-height:750px)": {
      padding: "30px"
    },
    "@media only screen and (min-height:500px) and (max-height:600px)": {
      padding: "25px"
    }
  },
  logoImageStyle: {
    display: "flex",
    justifyContent: "center",
    padding: "60px 0px",
    "@media only screen and (min-height:600px) and (max-height:750px)": {
      padding: "30px 0px"
    },
    "@media only screen and (min-height:500px) and (max-height:600px)": {
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
    fontWeight: 700
  },
  sliderDiv: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "30px"
  },
  sliderRoot: {
    color: "#fff"
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
    "@media only screen and (min-height:500px) and (max-height:600px)": {
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
    }
  }
});

const PrettoSlider = styled(Slider)({
  // color: "linear-gradient(262.14deg, #D22222 -4.5%, #820505 91.48%);",
  color: "#820505",
  // height: 8,
  "& .MuiSlider-rail": {
    color: "#E2E2E2",
    width: 10
  },
  "& .MuiSlider-track": {
    border: "none",
    color: "#E2E2E2",
    width: 10
  },
  "& .MuiSlider-markLabel": {
    fontFamily: "Montserrat",
    color: "#400505",
    fontSize: 14
  },
  "& .MuiSlider-thumb": {
    height: 24,
    width: 24,
    // backgroundColor: '#fff',
    // color: marks.color,
    border: "2px solid currentColor",
    "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
      boxShadow: "inherit"
    },
    "&:before": {
      display: "none"
    }
  },
  "& .MuiSlider-valueLabel": {
    lineHeight: 1.2,
    fontSize: 12,
    background: "unset",
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: "50% 50% 50% 0",
    // backgroundColor: '#52af77',
    transformOrigin: "bottom left",
    transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
    "&:before": { display: "none" },
    "&.MuiSlider-valueLabelOpen": {
      transform: "translate(50%, -100%) rotate(-45deg) scale(1)"
    },
    "& > *": {
      transform: "rotate(45deg)"
    }
  }
});

// const Slider = document.querySelector('input[name=rangeInput]');

// Slider.oninput = _ => Slider.style.setProperty('--SliderColor', `hsl(${Slider.value}, 100%, 50%)`);

// const slider = document.getElementById("myinput")
// const min = slider.min
// const max = slider.max
// const value = slider.value

// slider.style.background = `linear-gradient(to right, red 0%, red ${(value - min) / (max - min) * 100}%, #DEE2E6 ${(value - min) / (max - min) * 100}%, #DEE2E6 100%)`

// slider.oninput = function () {
//   this.style.background = `linear-gradient(to right, red 0%, red ${(this.value - this.min) / (this.max - this.min) * 100}%, #DEE2E6 ${(this.value - this.min) / (this.max - this.min) * 100}%, #DEE2E6 100%)`
// };

class Question1 extends React.Component {
  backHandler = () => {
    const { history } = this.props;
    history.push("/Yardstix/user-home");
  };

  nextQuestionHandler = () => {
    const { history } = this.props;
    history.push("/Yardstix/user-home/question2");
  };

  // MyThumbComponent(props) {
  //   debugger
  //   if (props[marks.value] == 0) {
  //     props.style.backgroundColor = "green";
  //   } else if (props[marks.value] == 20) {
  //     props.style.backgroundColor = "red";
  //   }
  //   return <span {...props} />;
  // }

  render() {
    const { classes } = this.props;
    // const Slider = document.querySelector('input[name=rangeInput]');
    // Slider.oninput = _ => Slider.style.setProperty('--SliderColor', `hsl(${Slider.value}, 100%, 50%)`);
    // const slider = document.getElementById("myinput")
    // const min = slider.min
    // const max = slider.max
    // const value = slider.value

    // slider.style.background = `linear-gradient(to right, red 0%, red ${(value - min) / (max - min) * 100}%, #DEE2E6 ${(value - min) / (max - min) * 100}%, #DEE2E6 100%)`

    // slider.oninput = function () {
    //   this.style.background = `linear-gradient(to right, red 0%, red ${(this.value - this.min) / (this.max - this.min) * 100}%, #DEE2E6 ${(this.value - this.min) / (this.max - this.min) * 100}%, #DEE2E6 100%)`
    // };

    return (
      <div className={classes.root}>
        <div className={classes.mobileRoot}>
          <div className={classes.logoImageStyle}>
            <img className={classes.logoMobiimg} src={logoImage} alt="logo" />
          </div>
          <Typography className={classes.questionStyle}>
            How long have you been associated with this organization?
          </Typography>
          <div className={classes.sliderDiv}>
            <Stack
              className={classes.sliderRoot}
              sx={{ height: 300 }}
              spacing={1}
              direction="row"
            >
              <PrettoSlider
                // style={{  color: marks.color }}
                class="slider"
                fontFamily="Montserrat"
                aria-label="Temperature"
                orientation="vertical"
                valueLabelDisplay="off"
                type="range"
                // min="0"
                // max="100"
                // value="50"
                name="rangeInput"
                marks={sliderJson}
              />
            </Stack>
          </div>
          <div class="slidecontainer">
            {/* <input class="slider" orientation="vertical" type="range" min="0" max="100" value="50" name="rangeInput" /> */}
            {/* <Slider
                // style={{  color: marks.color }}
                className="slider"
                fontFamily="Montserrat"
                aria-label="Temperature"
                orientation="vertical"
                // ThumbComponent={this.MyThumbComponent}
                // getAriaValueText={valuetext}
                // defaultValue={30}
                marks={marks}
              /> */}
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
