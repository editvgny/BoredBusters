import styled from "styled-components";

export default styled.div`
    width: 790px;
    height: 45px;
    padding: 0;
    margin: 0;

    font-family: 'Mountains of Christmas';
    font-size: 30px;
    font-weight: 900;
    letter-spacing: 7px;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: #172251;
    color: #72CD55;

    .option {
        width: auto;
        height: 40px;
        border: none;
        border-radius: 10px;
        background-color: #253265;
        color: #72CD55;

        font-family: 'Mountains of Christmas';
        font-size: 25px;
        font-weight: 900;
        letter-spacing: 7px;
        text-align: center;
        outline: none;
    }

    .option::placeholder {
        color: #72CD55;
    }

    .option:focus {
        width: auto;
    }
`;