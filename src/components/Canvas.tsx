import {
  useState,
  useEffect,
  useRef,
  FC,
  MouseEvent,
  MutableRefObject,
} from "react";
import drawingHandler from "../utils/drawingHandlers";
import mouseMoveHandler from "../utils/mouseMoveHandlers";
import { Drawings, ModeType } from "../utils/constants";

type CanvasProps = {
  modeRef: MutableRefObject<ModeType>;
};

const Canvas: FC<CanvasProps> = ({ modeRef }) => {
  const [drawings, setDrawings] = useState<Drawings>([]);
  const isDrawingRef = useRef(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);

  useEffect(() => {
    ctxRef.current = canvasRef?.current?.getContext("2d") || null;
  }, []);

  useEffect(() => {
    if (!ctxRef.current) return;

    ctxRef.current.clearRect(0, 0, window.innerWidth, window.innerHeight);

    for (const drawing of drawings) {
      drawingHandler(drawing, ctxRef.current);
    }
  }, [drawings]);

  const handleMouseUp = () => {
    isDrawingRef.current = false;
    console.log(drawings);
  };

  const handleMouseDown = (e: MouseEvent<HTMLCanvasElement>) => {
    const { pageX, pageY } = e;

    isDrawingRef.current = true;
    setDrawings((prev: Drawings) => [
      ...prev,
      { type: modeRef.current, start: [pageX, pageY], points: [] },
    ]);
  };

  const handleMouseMove = (e: MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawingRef.current) return;

    const { pageX, pageY } = e;
    mouseMoveHandler(modeRef.current, setDrawings, pageX, pageY);
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
