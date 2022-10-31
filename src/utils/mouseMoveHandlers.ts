import { Dispatch, SetStateAction } from "react";
import { Drawings, ModeType } from "./constants";

const handleBrushMove = (
  setDrawings: Dispatch<SetStateAction<Drawings>>,
  x: number,
  y: number
) => {
  setDrawings((prev: any) => {
    const newState = [...prev];
    const curDrawing = newState[newState.length - 1];
    curDrawing.points.push([x, y]);
    return newState;
  });
};

const handleOtherMove = (
  setDrawings: Dispatch<SetStateAction<Drawings>>,
  x: number,
  y: number
) => {
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
    case "arrow":
    case "rect":
    case "circle":
      handleOtherMove(setDrawings, x, y);
      break;

    default:
      console.error("Error: Unhandled mode:", curMode);
  }
};

export default mouseMoveHandler;
