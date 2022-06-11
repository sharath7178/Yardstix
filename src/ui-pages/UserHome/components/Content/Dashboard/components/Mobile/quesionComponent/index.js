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
  IconButton,
  InputBase
} from "@material-ui/core";
import logoImage from "../../../../../../../../ui-assets/images/logoYardstix.svg";
import Stack from "@mui/material/Stack";
import Slider from "@mui/material/Slider";
import { styled } from "@mui/material/styles";
import back from "../../../../../../../../ui-assets/images/keyboardReturn.svg";
import check from "../../../../../../../../ui-assets/images/check.svg";
import "./index.css";
import { httpRequest } from "../../../../../../../../ui-utils/api";
import AnswerFormat1 from "./components/AnswerFormat1";
import AnswerFormat2 from "./components/AnswerFormat2";
import AnswerFormat3 from "./components/AnswerFormat3";
import AnswerFormat4 from "./components/AnswerFormat4";

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

class QuestionComponent extends React.Component {
  state = {
    next_question_id: 0,
    questions_object: [],
    answer_code: null,
    selected_ans: {},
    answers_array: [],
    maximum_ans: null,
    minimum_ans: null,
    ans_format_code: "1" && "2" && "3" && "4",
    answer_select_value: {}
  };

  componentDidMount = () => {
    const { openSurvey } = this.props;
    if (openSurvey) {
      this.getQuestionHandler(
        openSurvey[0]?.userId,
        0,
        openSurvey[0]?.surveyId
      );
    }
  };

  getQuestionHandler = async (uid, index, sid) => {
    try {
      await httpRequest({
        endPoint: `api/v1/user/questions?userId=${uid}&questionId=${index}&surveyId=${sid}`,
        method: "get",
        instance: "instanceOne",
        contentType: "application/json",
        authReqd: true
      }).then(response => {
        console.log("response", response);

        let tempData = [];
        response?.Answers.forEach(item => {
          console.log("ans data", item);
          tempData.push({
            value: item.AnswerId,
            label: item.label,
            selected: true
          });
        });
        const max_num = Math.max(...tempData.map(item => item.value));
        const minNum = Math.min(...tempData.map(item => item.value));
        this.setState({
          next_question_id: response?.nextQuestionId,
          questions_object: response,
          answers_array: tempData,
          maximum_ans: max_num,
          minimum_ans: minNum,
          ans_format_code: response.Code
        });
      });
    } catch (e) {
      console.log(e);
    }
  };

  // postAnswerHanlder = async () => {
  //   const { setAppData } = this.props;
  //   const { questions_object, answers_array } = this.state;
  //   try {

  //     const answer_value = answers_array.map((item) => item.selected === false);
  //     console.log("answer_value",answer_value);

  //     await httpRequest({
  //       endPoint: "api/v1/user/addAnswers",
  //       method: "post",
  //       instance: "instanceOne",
  //       requestBody: {
  //         userId: questions_object?.UserId,
  //         userSurveyId: questions_object?.UserId,
  //         finilized: true,
  //         answerId: answer_value,
  //         questionId: questions_object?.QuestionId,
  //         empoymentMonths: null,
  //         department: 7,
  //         designation: 8,
  //         scale5: 9,
  //         other: "sample string 10"
  //       },
  //       authReqd: true,
  //       contentType: "application/json"
  //     }).then(async response => {
  //       console.log("company response ", response);
  //       if (response.OrganisationId) {
  //         setAppData("snackbar", {
  //           open: true,
  //           variant: "success",
  //           message: "Gegevenswijziging succesvol aangevraagd."
  //         });
  //         await this.getComGuide(
  //           response.OrganisationId,
  //           response.idPortal_CompanyGuide
  //         );
  //       } else {
  //         setAppData("snackbar", {
  //           open: true,
  //           variant: "error",
  //           message: "enter the valid  details"
  //         });
  //       }
  //     });
  //   } catch (e) {
  //     setAppData("snackbar", {
  //       open: true,
  //       variant: "warning",
  //       message: "its not working"
  //     });
  //     console.log(e);
  //   }
  // };

  backHandler = () => {
    const { history } = this.props;
    history.push("/Yardstix/user-home");
  };

  nextQuestionHandler = () => {
    const { openSurvey, history } = this.props;
    const { next_question_id } = this.state;
    if (openSurvey && next_question_id) {
      this.getQuestionHandler(
        openSurvey[0]?.userId,
        next_question_id,
        openSurvey[0]?.surveyId
      );
    }
  };

  onChangeHandler = e => {
    this.setState({ answer_select_value: e.target.value });
    console.log("value", e.target.value);
  };

  render() {
    const { classes } = this.props;

    console.log("state", this.state);
    const { questions_object = {}, answers_array } = this.state;
    console.log("answer", answers_array);

    let answerComponent = null;
    if (this.state.ans_format_code === "1") {
      answerComponent = (
        <AnswerFormat1
          maximum_ans={this.state.maximum_ans}
          minimum_ans={this.state.minimum_ans}
          answers_array={this.state.answers_array}
        />
      );
    } else if (this.state.ans_format_code === "2") {
      answerComponent = (
        <AnswerFormat2 answers_array={this.state.answers_array} />
      );
    } else if (this.state.ans_format_code === "3") {
      answerComponent = (
        <AnswerFormat3 answers_array={this.state.answers_array} />
      );
    } else if (this.state.ans_format_code === "4") {
      answerComponent = (
        <AnswerFormat4
          maximum_ans={this.state.maximum_ans}
          minimum_ans={this.state.minimum_ans}
          answers_array={this.state.answers_array}
        />
      );
    }

    return (
      <div className={classes.root}>
        <div className={classes.mobileRoot}>
          <div className={classes.logoImageStyle}>
            <img className={classes.logoMobiimg} src={logoImage} alt="logo" />
          </div>
          <Typography className={classes.questionStyle}>
            {questions_object?.QuestionText}
          </Typography>
          {answerComponent}
        </div>
        <Grid container className={classes.footerStyle}>
          <Grid item xs={6} justify="center" className={classes.backImage}>
            <IconButton onClick={this.backHandler}>
              <img className={classes.backimg} src={back} alt="back" />
            </IconButton>
          </Grid>
          <Grid item xs={6} justify="center" className={classes.checkImage}>
            <IconButton
              onClick={() => this.nextQuestionHandler()}
              onChange={e => this.onChangeHandler(e)}
            >
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
  const { openSurvey } = dashboard || "";
  return { openSurvey };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(QuestionComponent));
