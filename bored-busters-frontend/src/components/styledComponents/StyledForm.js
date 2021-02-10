import styled from "styled-components";

export const FormGroup = styled.form`
    display: flex;
    flex-direction: column;
	margin: 50px auto;
	align-items: center;
	
`;

export const Label = styled.label`
	margin-bottom: 0.5em;
	color: #c44747;
    display: block;
`;

export const Input = styled.input`
	padding: 0.5em;
	color: #c44747;
	background: papayawhip;
	border: none;
	border-radius: 8px;
	width: 500px;
	margin-bottom: 0.5em;
	font-size: 20px;
`;

export const Button = styled.button`
  width: 250px;
  height: 50px;
  margin: 20px;
  font-size: 25px;
  font-weight: 900;
  letter-spacing: 7px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 10px;
  background: #c44747;
  color: #ccacab;
  font-family: 'Mountains of Christmas';
`;