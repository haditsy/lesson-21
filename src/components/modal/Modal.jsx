import { Button } from "@mui/base";
// import { Typography } from "@mui/material";
import React from "react";
import { styled } from "styled-components";

export const Modal = ({ onClose, onConfirm }) => {
  return (
    <>
      <Backdrop onClick={onClose}/>
      <StyledModalContainer>
        <h3>Вы уверены что хотите удалить?</h3>
        <Button onClick={onConfirm}>Да</Button>
        <Button onClick={onClose}>Нет</Button>
      </StyledModalContainer>
    </>
  );
};
const Backdrop = styled("div")`
  position: fixed;
  z-index: 1;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
`;
const StyledModalContainer = styled("div")`
  width: 200px;
  height: 170px;
  background-color: pink;
  border-radius: 1rem;
  position: fixed;
  z-index: 2;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 1.5rem, 1rem;
`;
