import { withStyles } from "@material-ui/styles";
import React from "react";
import { Button, Typography } from "@material-ui/core";

const styles = theme => ({
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
  }
});

const AnswerFormat3 = props => {
  const { classes, answers_array } = props;

  const selectingHandler = key => {
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
  return (
    <div>
      {answers_array.map((item, key) => {
        return (
          <Button
            key={key}
            style={{ width: item.width }}
            className={
              item.selected === false
                ? classes.selectingDesignationItems
                : classes.alignDesignationItems
            }
            onClick={() => selectingHandler(key)}
          >
            {item.label}
          </Button>
        );
      })}
    </div>
  );
};

export default withStyles(styles)(AnswerFormat3);
