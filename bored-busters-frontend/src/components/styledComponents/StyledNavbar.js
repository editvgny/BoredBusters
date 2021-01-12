import styled from "styled-components";

export default styled.div`
    height: 40px;
    padding: 20px;

    font-family: 'Mountains of Christmas';
    font-size: 30px;
    font-weight: 700;
    letter-spacing: 7px;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: #364679;

    a {
      color: #F7B900;
      text-decoration: none;
      padding: 10px;
    }

    a:hover {
      color: #FACF3E;
    }

    @media (max-width: 640px) {
    font-size: 17px;      
  }
`;