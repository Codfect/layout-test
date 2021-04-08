import styled from 'styled-components';

export const Container = styled.header`
`;

export const Content = styled.div`
  margin: 0 auto;
  padding: 2rem 0;
  max-width: 1120px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
  }
  
  div {
    li {
      list-style: none;
      display: inline-block;
      margin-left: 3rem;
    }

    a { 
      text-decoration: none;
      color: #000;
      font-weight: 500;
      font-size: 0.9rem;
    }

    a::after {
      content: '';
      display: block;
      width: 0;
      height: 0.15rem;
      border-radius: 5px;
      margin-top: 7px;
      background-color: #607FCF;
      transition: 0.5s;
    }

    a:hover {
      color: #2B2B2B;
    }

    a:hover:after {
      width: 100%;
    }
  }  
`;