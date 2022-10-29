import { useState, FC, MutableRefObject, useEffect, useRef } from "react";
import {
  handleArrowDraw,
  handleBrushDraw,
  handleCircleDraw,
  handleLineDraw,
  handleRectDraw,
} from "../utils/drawingHandlers";
import {
  handleBrushMove,
  handleLineMove,
  handleArrowMove,
  handleRectMove,
  handleCircleMove,
} from "../utils/moveMouseHandlers";

type Point = number[];

type Drawing = {
  type: string;
  start: Point;
  points: Point[];
};

type Drawings = Drawing[];

type CanvasProps = {
  mode: any;
  canvasRef: MutableRefObject<HTMLCanvasElement | null>;
  ctxRef: MutableRefObject<CanvasRenderingContext2D | null>;
};

const Canvas: FC<CanvasProps> = ({ mode, canvasRef, ctxRef }) => {
  const [drawings, setDrawings] = useState<Drawings>([]);
  const isDrawing = useRef(false);

  useEffect(() => {
    ctxRef.current?.clearRect(0, 0, window.innerWidth, window.innerHeight);

    for (const drawing of drawings) {
      switch (drawing.type) {
        case "brush":
          handleBrushDraw(ctxRef, drawing);
          break;
        case "line":
          handleLineDraw(ctxRef, drawing);
          break;
        case "arrow":
          handleArrowDraw(ctxRef, drawing);
          break;
        case "rect":
          handleRectDraw(ctxRef, drawing);
          break;
        case "circle":
          handleCircleDraw(ctxRef, drawing);
          break;

        default:
          console.error("Error: Unhandled drawing mode:", mode);
      }

      ctxRef.current?.stroke();
    }
  }, [drawings, ctxRef, mode]);

  const handleMouseUp = () => {
    console.log(drawings);
    isDrawing.current = false;
  };

  const handleMouseDown = (e: any) => {
    const { pageX, pageY } = e;

    isDrawing.current = true;
    setDrawings((prev: any) => [
      ...prev,
      { type: mode.current, start: [pageX, pageY], points: [] },
    ]);
  };

  const handleMouseMove = (e: any) => {
    if (!isDrawing.current) return;

    const { pageX, pageY } = e;

    switch (mode.current) {
      case "brush":
        handleBrushMove(setDrawings, pageX, pageY);
        break;
      case "line":
        handleLineMove(setDrawings, pageX, pageY);
        break;
      case "arrow":
        handleArrowMove(setDrawings, pageX, pageY);
        break;
      case "rect":
        handleRectMove(setDrawings, pageX, pageY);
        break;
      case "circle":
        handleCircleMove(setDrawings, pageX, pageY);
        break;

      default:
        console.error("Error: Unhandled drawing mode:", mode);
    }
  };

  return (
    <canvas
      ref={canvasRef}
      width={window.innerWidth}
      height={window.innerHeight}
      onMouseUp={handleMouseUp}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
    />
  );
};

export default Canvas;
