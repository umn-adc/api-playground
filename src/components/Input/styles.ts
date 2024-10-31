import { ComponentProps } from "react";
import styled from "styled-components";
import Input from ".";

interface CommonProps {
  focused?: boolean;
  filled?: boolean;
}

interface InputBoxProps extends CommonProps {
  type: ComponentProps<typeof Input>["type"];
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;

export const Label = styled.label<CommonProps>`
  transition: all 250ms cubic-bezier(0.165, 0.84, 0.44, 1);
  opacity: ${({ focused, filled }) => (focused || filled ? 1 : 0.7)};
  color: ${({ theme, filled }) =>
    filled ? theme.colors.accentLight : theme.colors.contrast};
  font-family: "Fira Code", monospace;
  font-weight: 500;
  font-size: 0.9rem;
`;

export const InputBox = styled.input<InputBoxProps>`
  transition: border 250ms cubic-bezier(0.165, 0.84, 0.44, 1);
  font-family: "Fira Code", monospace;
  border: none;
  border: 1px solid
    ${({ theme, focused }) => theme.colors.contrast + (focused ? "20" : "10")};
  outline: 1.5px solid
    ${({ theme, type }) =>
      type === "checkbox" || type === "radio"
        ? "transparent"
        : theme.colors.contrastInverted + "40"};
  color: ${({ theme }) => theme.colors.contrast};
  background-color: ${({ theme }) => theme.colors.contrastInverted + "40"};
  border-radius: 0.2rem;
  height: 1.5rem;

  ${({ type }) =>
    type === "checkbox" || type === "radio" ? "margin: 3px;" : ""}
`;
