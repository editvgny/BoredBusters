import styled from "styled-components";

export default styled.div`
    width: 620px;
    min-height: 100px;
    margin: 20px;

    font-family: 'Chelsea Market';
    font-size: 20px;
    font-weight: 400;
    letter-spacing: 7px;

    display: flex;
    flex-direction: column;
    /* flex-wrap: row; */
    align-items: flex-start;
    /* justify-content: center; */

    border-radius: 10px;
   
    background: #172251;
    /* background: cyan; */
    color: #72CD55;

    div {
        margin: 25px 15px 10px 15px;
    }

    a {
      color: #F7B900;
      text-decoration: none;
      font-size: 15px;
    }

    a:hover {
      color: #FACF3E;
    }

    .details {
      width: 600px;
      min-height: 375px;
      color: #111111;
      background-color: #6679AE;
      border-radius: 20px;
      margin: 20px auto;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
`;
