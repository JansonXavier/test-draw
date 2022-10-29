export const handleBrushMove = (setDrawings: any, x: number, y: number) => {
  setDrawings((prev: any) => {
    const newState = [...prev];
    const curDrawing = newState[newState.length - 1];
    curDrawing.points.push([x, y]);
    return newState;
  });
};

export const handleLineMove = (setDrawings: any, x: number, y: number) => {
  setDrawings((prev: any) => {
    const newState = [...prev];
    const curDrawing = newState[newState.length - 1];
    curDrawing.points = [[x, y]];
    return newState;
  });
};

export const handleArrowMove = (setDrawings: any, x: number, y: number) => {
  setDrawings((prev: any) => {
    const newState = [...prev];
    const curDrawing = newState[newState.length - 1];
    curDrawing.points = [[x, y]];
    return newState;
  });
};

export const handleRectMove = (setDrawings: any, x: number, y: number) => {
  setDrawings((prev: any) => {
    const newState = [...prev];
    const curDrawing = newState[newState.length - 1];
    curDrawing.points = [[x, y]];
    return newState;
  });
};

export const handleCircleMove = (setDrawings: any, x: number, y: number) => {
  setDrawings((prev: any) => {
    const newState = [...prev];
    const curDrawing = newState[newState.length - 1];
    curDrawing.points = [[x, y]];
    return newState;
  });
};
