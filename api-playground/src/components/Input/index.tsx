import {
  DetailedHTMLProps,
  forwardRef,
  InputHTMLAttributes,
  useCallback,
  useState,
} from "react";
import { Container, InputBox, Label } from "./styles";

interface InputProps
  extends Omit<
    DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
    "ref"
  > {
  label: string;
}

const Input: React.FC<InputProps> = forwardRef<HTMLInputElement, InputProps>(
  ({ label, id, onFocus, onBlur, onChange, ...props }, ref) => {
    const [focused, setFocused] = useState(!!props.autoFocus);
    const [filled, setFilled] = useState(!!props.value);
    const handleFocus = useCallback(() => setFocused(true), []);
    const handleBlur = useCallback(() => setFocused(false), []);
    return (
      <Container>
        <Label htmlFor={id} filled={filled} focused={focused}>
          {label}
          {props.required && (
            <span aria-label="required" style={{ color: "red" }}>
              *
            </span>
          )}
        </Label>
        <InputBox
          id={id}
          {...props}
          onFocus={(e) => {
            handleFocus();
            if (onFocus) onFocus(e);
          }}
          onBlur={(e) => {
            handleBlur();
            if (onBlur) onBlur(e);
          }}
          focused={focused}
          onChange={(e) => {
            setFilled(
              props.type === "checkbox" || props.type === "radio"
                ? e.target.checked
                : !!e.target.value
            );
            if (onChange) onChange(e);
          }}
          type={props.type}
          ref={ref}
        />
      </Container>
    );
  }
);

export default Input;
