import { Button } from "@mui/base";
import { Box, Checkbox, TextField, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import { useDispatch } from "react-redux";
import { styled } from "styled-components";
import { ThemeContext } from "./context/theme-context";
import { deleteTodoThunk } from "./store/actions/todo-actions";
import { todosReducer } from "./store/reducers/todos-reducer";
import "./TodoItem.css";

export const TodoItem = ({ title, date, id }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(title);
  const [changeInput, setChangeInput] = useState(false);

  const dispatch = useDispatch();

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    dispatch({
      type: "UPDATE_TODO",
      payload: {
        title: newTitle,
        id,
      },
    });
    setIsEditing(false);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    setNewTitle();
  };

  const handleInputChange = (e) => {
    setNewTitle(e.target.value);
  };

  const handleChecboxClick = () => {
    setChangeInput(!changeInput);
  };
  const contextData = useContext(ThemeContext);

  const isDarkMode = contextData.mode === "dark";

  return (
    <StyledBox>
      <div>
        {isEditing ? (
          <div
            style={{ display: "flex", justifyContent: "space-around" }}
            className={`${isDarkMode ? "dark_mode_box" : "light_mode_box"}`}
          >
            <TextField
              className={`${isDarkMode ? "dark_mode_text_field" : ""}`}
              label="Title"
              variant="outlined"
              value={newTitle}
              onChange={handleInputChange}
            />
            <StyledSaveButton onClick={handleSaveClick} variant="outlined">
              Save
            </StyledSaveButton>
            <StyledCancelButton onClick={handleCancelClick}>
              Cancel
            </StyledCancelButton>
          </div>
        ) : (
          <div className={`${isDarkMode ? "dark_mode" : ""}`}>
            <Typography
              className={`${isDarkMode ? "dark_mode_text" : ""}`}
              variant="subtitle1"
              style={{ textDecoration: changeInput ? "line-through" : "none" }}
            >
              {title}
            </Typography>
            <Typography
              variant="subtitle2"
              className={`${isDarkMode ? "dark_mode_date" : ""}`}
              color="darkgray"
            >
              {date}
            </Typography>
            <Checkbox
              type="checkbox"
              onClick={handleChecboxClick}
              style={{ color: "#43c269" }}
              checked={changeInput}
            />
            <StyledDeleteButton
              variant="outlined"
              onClick={() => dispatch(deleteTodoThunk(id))}
            >
              Delete Todo
            </StyledDeleteButton>
            <StyledEditButton onClick={handleEditClick}>
              Edit Todo
            </StyledEditButton>
          </div>
        )}
      </div>
    </StyledBox>
  );
};
const StyledDeleteButton = styled(Button)`
  width: 100px;
  height: 40px;
  color: #2e89dd;
  background-color: white;
  border: 1px solid #2e89dd;
`;

const StyledBox = styled(Box)`
  width: 400px;
  min-height: 60px;
  padding: 0.5rem;
  margin-top: 20px;
  margin-left: 150px;
`;

const StyledEditButton = styled(Button)`
  width: 100px;
  height: 40px;
  color: #2e89dd;
  background-color: white;
  border: 1px solid #2e89dd;
`;
const StyledCancelButton = styled(Button)`
  width: 70px;
  height: 30px;
  color: #2e89dd;
  background-color: white;
  border: 1px solid #2e89dd;
`;
const StyledSaveButton = styled(Button)`
  width: 70px;
  height: 30px;
  color: #2e89dd;
  background-color: white;
  border: 1px solid #2e89dd;
`;
