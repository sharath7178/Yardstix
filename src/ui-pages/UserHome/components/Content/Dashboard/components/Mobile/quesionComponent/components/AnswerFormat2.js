import { withStyles } from "@material-ui/styles";
import React, { useState } from "react";
import { Button, InputBase } from "@material-ui/core";

const styles = theme => ({
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

const AnswerFormat2 = props => {
  const { classes, answers_array } = props;
  console.log("answer", answers_array);

  const { selectAnswerArray, setSelectAnserArray } = useState(answers_array);

  const selectingHandler = key => {
    let dummyState = [];
    console.log("dummydata", dummyState);
    dummyState = answers_array.map((item, index) => {
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
    console.log("dummydata", dummyState);
    setSelectAnserArray({ selectAnswerArray: dummyState });
  };
  console.log("selectAnswerArray", selectAnswerArray);
  return (
    <div>
      <div style={{ padding: "20px 0px" }}>
        {answers_array.map((item, key) => {
          console.log("item2", item);
          return (
            <Button
              key={key}
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
  );
};
export default withStyles(styles)(AnswerFormat2);
