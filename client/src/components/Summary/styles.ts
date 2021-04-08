import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  max-width: 100%;
  margin-top: 2rem;

  div {
    header {
      color: gray;
      font-size: 0.75rem;
      margin-bottom: 0.5rem;
    }

    strong{
      color: var(--currentBalance);
      font-size: 1.6rem;
      &.colorTwo {
        color: var(--income);
      }
      &.colorThree {
        color: var(--outcome);
      }
    }
  }
`;