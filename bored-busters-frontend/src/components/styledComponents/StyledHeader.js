import styled from "styled-components";

export default styled.div`
    height: 120px;
    padding: 20px 20px 0 20px;

    font-family: 'Mountains of Christmas';
    font-size: 60px;
    font-weight: 900;
    letter-spacing: 7px;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: #172251;

    a {
        color: #F7B900;
        text-decoration: none;        
    }

    @media (max-width: 640px) {
    font-size: 30px;      
  }
`;