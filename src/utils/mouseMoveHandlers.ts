import { Dispatch, SetStateAction } from "react";
import { Drawings, ModeType } from "./constants";

const handleBrushMove = (setDrawings: any, x: number, y: number) => {
  setDrawings((prev: any) => {
    const newState = [...prev];
    const curDrawing = newState[newState.length - 1];
    curDrawing.points.push([x, y]);
    return newState;
  });
};

const handleLineMove = (setDrawings: any, x: number, y: number) => {
  setDrawings((prev: any) => {
    const newState = [...prev];
    const curDrawing = newState[newState.length - 1];
    curDrawing.points = [[x, y]];
    return newState;
  });
};

const handleArrowMove = (setDrawings: any, x: number, y: number) => {
  setDrawings((prev: any) => {
    const newState = [...prev];
    const curDrawing = newState[newState.length - 1];
    curDrawing.points = [[x, y]];
    return newState;
  });
};

const handleRectMove = (setDrawings: any, x: number, y: number) => {
  setDrawings((prev: any) => {
    const newState = [...prev];
    const curDrawing = newState[newState.length - 1];
    curDrawing.points = [[x, y]];
    return newState;
  });
};

const handleCircleMove = (setDrawings: any, x: number, y: number) => {
  setDrawings((prev: any) => {
    const newState = [...prev];
    const curDrawing = newState[newState.length - 1];
    curDrawing.points = [[x, y]];
    return newState;
  });
};

const mouseMoveHandler = (
  curMode: ModeType,
  setDrawings: Dispatch<SetStateAction<Drawings>>,
  x: number,
  y: number
) => {
  switch (curMode) {
    case "brush":
      handleBrushMove(setDrawings, x, y);
      break;
    case "line":
      handleLineMove(setDrawings, x, y);
      break;
    case "arrow":
      handleArrowMove(setDrawings, x, y);
      break;
    case "rect":
      handleRectMove(setDrawings, x, y);
      break;
    case "circle":
      handleCircleMove(setDrawings, x, y);
      break;

    default:
      console.error("Error: Unhandled mode:", curMode);
  }
};

export default mouseMoveHandler;
