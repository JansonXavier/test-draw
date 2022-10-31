import { useRef } from "react";
import { ModeType } from "../utils/constants";
import Canvas from "./Canvas";
import Menu from "./Menu";

function App() {
  const modeRef = useRef<ModeType>("brush");
  return (
    <>
      <Canvas modeRef={modeRef} />
      <Menu modeRef={modeRef} />
    </>
  );
}

export default App;
