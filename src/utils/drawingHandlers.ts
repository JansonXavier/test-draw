export const handleBrushDraw = (ctxRef: any, drawing: any) => {
  const { start, points } = drawing;

  ctxRef.current.beginPath();
  ctxRef.current.moveTo(start[0], start[1]);

  for (let i = 0; i < points.length - 2; i += 2) {
    const first = points[i];
    const second = points[i + 1];
    ctxRef.current?.quadraticCurveTo(first[0], first[1], second[0], second[1]);
  }
};

export const handleLineDraw = (ctxRef: any, drawing: any) => {
  const { start, points } = drawing;
  const point = points[0];
  if (!point) return;

  ctxRef.current.beginPath();
  ctxRef.current.moveTo(start[0], start[1]);
  ctxRef.current.lineTo(point[0], point[1]);
};

export const handleArrowDraw = (ctxRef: any, drawing: any) => {
  const { start, points } = drawing;
  const point = points[0];
  if (!point) return;

  ctxRef.current.beginPath();

  var dx = point[0] - start[0];
  var dy = point[1] - start[1];
  var headlen = Math.sqrt(dx ** 2 + dy ** 2) * 0.1;
  var angle = Math.atan2(dy, dx);
  ctxRef.current.moveTo(start[0], start[1]);
  ctxRef.current.lineTo(point[0], point[1]);
  ctxRef.current.lineTo(
    point[0] - headlen * Math.cos(angle - Math.PI / 6),
    point[1] - headlen * Math.sin(angle - Math.PI / 6)
  );
  ctxRef.current.moveTo(point[0], point[1]);
  ctxRef.current.lineTo(
    point[0] - headlen * Math.cos(angle + Math.PI / 6),
    point[1] - headlen * Math.sin(angle + Math.PI / 6)
  );
};

export const handleRectDraw = (ctxRef: any, drawing: any) => {
  const { start, points } = drawing;
  const point = points[0];
  if (!point) return;

  ctxRef.current.beginPath();
  ctxRef.current.rect(
    start[0],
    start[1],
    point[0] - start[0],
    point[1] - start[1]
  );
  ctxRef.current.stroke();
};

export const handleCircleDraw = (ctxRef: any, drawing: any) => {
  const { start, points } = drawing;
  const point = points[0];
  if (!point) return;

  const dx = point[0] - start[0];
  const dy = point[1] - start[1];

  console.log(dx, dy);

  ctxRef.current.beginPath();
  ctxRef.current.ellipse(
    start[0] + dx / 2,
    start[1] + dy / 2,
    Math.abs(dx / 2),
    Math.abs(dy / 2),
    0,
    0,
    2 * Math.PI
  );
};
