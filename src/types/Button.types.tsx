export interface ButtonProps {
  disabled?: boolean;
  icon?: boolean;
  kind?: "primary" | "secondary";
  label: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
