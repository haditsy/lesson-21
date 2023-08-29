import { Box, TextField, styled, Button } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import React, { useState } from "react";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import axios from "axios";
import { format } from "date-fns";
import { BASE_URL } from "./constants/general";
import { useDispatch } from "react-redux";
import { getTodosThunk } from "./store/actions/todo-actions";

export const TodoForm = () => {

    function isValidFDate(date) {
        return date instanceof Date && !isNaN(date)
    }
  const [enteredTodo, setEnteredTodo] = useState("");
  const [enteredDate, setEnteredDate] = useState(new Date());

  const dispatch = useDispatch()

  const todoValueChangeHandler = (e) => {
    setEnteredTodo(e.target.value);
  };

  const dateChangeHandler = (date) => {
    if(isValidFDate()) {
        setEnteredDate(date)
    }
  }

  const submitHandler = async (e) => {
    e.preventDefault()
   try {
    const formatedDate = format(enteredDate, 'dd-MM-yy')
    const newTodo = {
        title: enteredTodo,
        date: formatedDate,
    }
    await axios.post(`${BASE_URL}/todos.json`, newTodo)
    setEnteredDate(new Date())
    setEnteredTodo('')
    dispatch(getTodosThunk())
   } catch (error) {
    console.log(error);
   }
  }

  const isSubmitDisabled = enteredTodo.trim().length === 0 || !enteredDate
  return (
    <StyledBox component={"form"} onSubmit={submitHandler}>
      <TextField
        label="Enter todo"
        variant="outlined"
        value={enteredTodo}
        onChange={todoValueChangeHandler}
      />
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker value={enteredDate} onChange={dateChangeHandler}/>
      </LocalizationProvider>
      <Button type="submit" variant="contained" className="submit" disabled={isSubmitDisabled}>
        Add
      </Button>
    </StyledBox>
  );
};

const StyledBox = styled(Box)(() => ({
  padding: "1rem 2rem",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: '1rem',
  '& > *': {
    flex: '1',
  },
  '& .submit': {
    maxWidth: 'max-content',
    padding: '1rem 2rem',
    borderRadius: '1rem',
  },
}));
