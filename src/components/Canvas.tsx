import { useState, FC, MutableRefObject, useEffect, useRef } from "react";
import drawingHandler from "../utils/drawingHandlers";
import mouseMoveHandler from "../utils/mouseMoveHandlers";
import { Drawings } from "../utils/constants";

type CanvasProps = {
  mode: any;
  canvasRef: MutableRefObject<HTMLCanvasElement | null>;
  ctxRef: MutableRefObject<CanvasRenderingContext2D | null>;
};

const Canvas: FC<CanvasProps> = ({ mode, canvasRef, ctxRef }) => {
  const [drawings, setDrawings] = useState<Drawings>([]);
  const isDrawing = useRef(false);

  useEffect(() => {
    if (!ctxRef.current) return;

    ctxRef.current?.clearRect(0, 0, window.innerWidth, window.innerHeight);

    for (const drawing of drawings) {
      drawingHandler(drawing, ctxRef.current);
    }
  }, [drawings, ctxRef, mode]);

  const handleMouseUp = () => {
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

    mouseMoveHandler(mode.current, setDrawings, pageX, pageY);
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
