import styled from "styled-components";

export const StyledButton = styled.button`
  transition: all 250ms cubic-bezier(0.165, 0.84, 0.44, 1);
  background-color: ${({ theme }) => theme.colors.contrastInverted + "40"};
  border: none;
  border: 2px solid ${({ theme }) => theme.colors.accent};
  border-radius: 0.4rem;
  font-size: 1rem;
  font-family: "Fira Code", monospace;
  color: ${({ theme }) => theme.colors.accent};
  padding: 0.4rem 0.6rem;
  min-height: 2rem;
  min-width: 4rem;

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.primary};
  }
`;
