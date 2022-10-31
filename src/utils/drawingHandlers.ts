import { Drawing } from "./constants";

const handleBrushDraw = (ctx: CanvasRenderingContext2D, drawing: Drawing) => {
  const { start, points } = drawing;

  ctx.beginPath();
  ctx.moveTo(start[0], start[1]);

  for (let i = 0; i < points.length - 2; i += 2) {
    const first = points[i];
    const second = points[i + 1];
    ctx?.quadraticCurveTo(first[0], first[1], second[0], second[1]);
  }
};

const handleLineDraw = (ctx: CanvasRenderingContext2D, drawing: Drawing) => {
  const { start, points } = drawing;
  const point = points[0];
  if (!point) return;

  ctx.beginPath();
  ctx.moveTo(start[0], start[1]);
  ctx.lineTo(point[0], point[1]);
};

const handleArrowDraw = (ctx: CanvasRenderingContext2D, drawing: Drawing) => {
  const { start, points } = drawing;
  const point = points[0];
  if (!point) return;

  ctx.beginPath();

  var dx = point[0] - start[0];
  var dy = point[1] - start[1];
  var headlen = Math.sqrt(dx ** 2 + dy ** 2) * 0.2;
  var angle = Math.atan2(dy, dx);
  ctx.moveTo(start[0], start[1]);
  ctx.lineTo(point[0], point[1]);
  ctx.lineTo(
    point[0] - headlen * Math.cos(angle - Math.PI / 6),
    point[1] - headlen * Math.sin(angle - Math.PI / 6)
  );
  ctx.moveTo(point[0], point[1]);
  ctx.lineTo(
    point[0] - headlen * Math.cos(angle + Math.PI / 6),
    point[1] - headlen * Math.sin(angle + Math.PI / 6)
  );
};

const handleRectDraw = (ctx: CanvasRenderingContext2D, drawing: Drawing) => {
  const { start, points } = drawing;
  const point = points[0];
  if (!point) return;

  ctx.beginPath();
  ctx.rect(start[0], start[1], point[0] - start[0], point[1] - start[1]);
  ctx.stroke();
};

const handleCircleDraw = (ctx: CanvasRenderingContext2D, drawing: Drawing) => {
  const { start, points } = drawing;
  const point = points[0];
  if (!point) return;

  const dx = point[0] - start[0];
  const dy = point[1] - start[1];

  ctx.beginPath();
  ctx.ellipse(
    start[0] + dx / 2,
    start[1] + dy / 2,
    Math.abs(dx / 2),
    Math.abs(dy / 2),
    0,
    0,
    2 * Math.PI
  );
};

const drawingHandler = (drawing: Drawing, ctx: CanvasRenderingContext2D) => {
  switch (drawing.type) {
    case "brush":
      handleBrushDraw(ctx, drawing);
      break;
    case "line":
      handleLineDraw(ctx, drawing);
      break;
    case "arrow":
      handleArrowDraw(ctx, drawing);
      break;
    case "rect":
      handleRectDraw(ctx, drawing);
      break;
    case "circle":
      handleCircleDraw(ctx, drawing);
      break;

    default:
      console.error("Error: Unhandled drawing type:", drawing.type);
  }

  ctx?.stroke();
};

export default drawingHandler;
