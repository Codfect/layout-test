import styled from 'styled-components';

export const Container = styled.main`
  max-width: 900px;
  margin: 0 auto;

  section {
    margin-top: 4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    li {
      list-style: none;
      display: inline-block;
      margin-left: 3rem;
      position: relative;
    }

    a {
      text-decoration: none;
      color: #000;
      font-weight: 500;
      font-size: 0.9rem;
      transition: 0.3s;
    }

    a:hover {
      color: var(--currentBalance);
    }
  }  
`;