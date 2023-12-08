// any & 합집합

export interface ISquare {
  tag: 'square';
  size: number;
}
export interface IRectangle {
  tag: 'rectangle';
  width: number;
  height: number;
}
export interface ICircle {
  tag: 'circle';
  radius: number;
}
export type IShape = ISquare | IRectangle | ICircle;

// const calcArea = (shape: IShape): number => {
//   return 1 + 1;
// };
