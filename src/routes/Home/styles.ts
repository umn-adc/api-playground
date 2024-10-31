import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  flex-direction: column;
  min-height: 100%;
  padding: 3rem;
  gap: 2rem;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.accentLight};
  font-weight: bold;
  font-size: 3rem;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
  align-content: center;
  gap: 1rem;

  a {
    color: ${({ theme }) => theme.colors.secondary};
    transition: transform 150ms cubic-bezier(0.165, 0.84, 0.44, 1);
    padding: 0.2rem;

    &:hover {
      transform: scale(1.2);
    }
  }
`;
