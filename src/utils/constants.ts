export type ModeType = "brush" | "line" | "arrow" | "rect" | "circle";
export const modeOptions: ModeType[] = [
  "brush",
  "line",
  "arrow",
  "rect",
  "circle",
];

export type Point = number[];
export type Drawing = {
  type: string;
  start: Point;
  points: Point[];
};
export type Drawings = Drawing[];
