export type SearchEvent =
  | React.ChangeEvent<HTMLInputElement>
  | React.MouseEvent<HTMLElement, MouseEvent>
  | React.KeyboardEvent<HTMLInputElement>
  | undefined;
