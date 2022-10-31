import { useEffect, useRef } from "react";
import { ModeType } from "../utils/constants";
import Canvas from "./Canvas";
import Menu from "./Menu";

function App() {
  const mode = useRef<ModeType>("brush");
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);

  useEffect(() => {
    ctxRef.current = canvasRef?.current?.getContext("2d") || null;
  }, []);

  return (
    <>
      <Canvas canvasRef={canvasRef} ctxRef={ctxRef} mode={mode} />
      <Menu mode={mode} />
    </>
  );
}

export default App;
