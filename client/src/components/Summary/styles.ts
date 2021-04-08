import styled from "styled-components";

export const Container = styled.div`
  &:nth-child(2) {
    background: black;
  }
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  max-width: 100%;
  margin-top: 4rem;

  div {
    header {
      color: gray;
      font-size: 0.75rem;
      margin-bottom: 0.5rem;
    }
  }

  strong{
    color: var(--currentBalance);
    font-size: 1.6rem;
  }
`;