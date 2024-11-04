import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import { StyledButton } from "./styles";

interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

const Button: React.FC<ButtonProps> = ({
  type = "submit",
  children,
  ...props
}) => {
  return (
    <StyledButton {...props} type={type}>
      {children}
    </StyledButton>
  );
};

export default Button;
