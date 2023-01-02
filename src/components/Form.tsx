import styled from "styled-components";
import { useState } from "react";
import InputMask from "react-input-mask";
type Props = {
  isCompleted?: boolean;
  setsCompleted?: boolean;
  selected?: boolean;
  validNumber?: boolean;
  validName?: boolean;
  validMM?: boolean;
  validYY?: boolean;
  validCVC?: boolean;
};
const monthRegex = /^[0]*[1-9]$|^[0]*1[0-2]$/;
const cvcRegex = "[0-9]{3}";
const yyRegex = "[1-9]{2}";
const nameRegex = /^[A-Za-z ]+$/;
const numberRegex = "[1-9 ]{19}";

const Form = (Props: boolean | any) => {
  const [validName, setValidName] = useState(false);
  const [validNumber, setValidNumber] = useState(false);
  const [validMM, setValidMM] = useState(false);
  const [validYY, setValidYY] = useState(false);
  const [validCVC, setValidCVC] = useState(false);
  const handleConfirm = () => {
    {
      validName && validNumber && validYY && validCVC && validMM
        ? setIsCompleted(true)
        : alert("Something Empty or is not Valid");
    }
  };

  function handleName(event: React.ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);
    {
      event.target.value === "" ? setValidName(false) : setValidName(true);
      event.target.value.match(nameRegex)
        ? setValidName(true)
        : setValidName(false);
    }
  }
  function handleNumber(event: React.ChangeEvent<HTMLInputElement>) {
    setNumber(event.target.value);
    event.target.value.match(numberRegex)
      ? setValidNumber(true)
      : setValidNumber(false);
  }
  function handleMonth(event: React.ChangeEvent<HTMLInputElement>) {
    setMonth(event.target.value);
    event.target.value === "" ? setValidMM(false) : setValidMM(true);
    event.target.value.match(monthRegex) ? setValidMM(true) : setValidMM(false);
  }
  function handleYear(event: React.ChangeEvent<HTMLInputElement>) {
    setYear(event.target.value);
    event.target.value === "" ? setValidYY(false) : setValidYY(true);
    event.target.value.match(yyRegex) ? setValidYY(true) : setValidYY(false);
  }
  function handleCode(event: React.ChangeEvent<HTMLInputElement>) {
    setCode(event.target.value);
    event.target.value === "" ? setValidCVC(false) : setValidCVC(true);
    event.target.value.match(cvcRegex) ? setValidCVC(true) : setValidCVC(false);
  }
  const { setIsCompleted, setName, setNumber, setMonth, setYear, setCode } =
    Props;
  return (
    <FormWrapper>
      <FormContainer>
        <Label>Cardholder Name</Label>
        <InputName
          validName={validName}
          maxLength={35}
          onChange={handleName}
          placeholder="e.g. Jane Appleseed"
        ></InputName>
        {!validName && <ErrorName>Wrong format, letters only</ErrorName>}
        <Label>Card Number</Label>
        <InputNumber
          mask={"9999 9999 9999 9999 "}
          validNumber={validNumber}
          maxLength={21}
          onChange={handleNumber}
          placeholder="e.g. 1234 5678 9123 0000"
        ></InputNumber>
        {!validNumber && <ErrorNumber>Wrong format, numbers only</ErrorNumber>}
        <LabelWrapper>
          <LabelDate>Exp. Date (MM/YY)</LabelDate>
          <LabelDate>CVC</LabelDate>
        </LabelWrapper>
        <InputWrapper>
          <InputMM
            validMM={validMM}
            maxLength={2}
            onChange={handleMonth}
            placeholder="MM"
          ></InputMM>
          <InputYy
            validYY={validYY}
            maxLength={2}
            onChange={handleYear}
            placeholder="YY"
          ></InputYy>
          <InputCVC
            validCVC={validCVC}
            maxLength={3}
            onChange={handleCode}
            placeholder="e.g. 123"
          ></InputCVC>
        </InputWrapper>
        <ErrorWrapper>
          {!validMM && <ErrorMM>Can’t be blank</ErrorMM>}
          {!validYY && <ErrorYY>Can’t be blank</ErrorYY>}
          {!validCVC && <ErrorCVC>Can’t be blank</ErrorCVC>}
        </ErrorWrapper>
        <Button onClick={handleConfirm} value="submit">
          Confirm
        </Button>
      </FormContainer>
    </FormWrapper>
  );
};
const FormWrapper = styled.div`
  width: 375px;
  font-family: "Space Grotesk", sans-serif;

  @media screen and (min-width: 1050px) {
    width: 381px;
    margin-left: 200px;
  }
  @media screen and (min-width: 1150px) {
    width: 381px;
    margin-left: 320px;
  }
  @media screen and (min-width: 1250px) {
    width: 381px;
    margin-right: 500px;
  }
`;
const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 327px;
  @media screen and (min-width: 1250px) {
    width: 381px;
  }
`;
const LabelWrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: baseline;
`;
const FormContainer = styled.form`
  margin: 68px 24px 45px 24px;
  display: flex;
  flex-direction: column;
`;
const Label = styled.label`
  font-size: 12px;
  color: #21092f;
  line-height: 15px;
  width: 240px;
  height: 15px;
  letter-spacing: 2px;
  margin-bottom: 9px;
  margin-top: 20px;
  text-transform: uppercase;
`;
const LabelDate = styled.label`
  font-size: 12px;
  color: #21092f;
  line-height: 15px;
  height: 15px;
  letter-spacing: 2px;
  margin-bottom: 9px;
  margin-top: 20px;
  text-transform: uppercase;
  margin-right: 24px;
  @media screen and (min-width: 1250px) {
    margin-left: 15px;
  }
`;
const InputName = styled.input<Props>`
  border: ${(props: boolean | boolean | any) =>
    props.validName === true ? "1px solid #6348FE" : "#dfdee0 1px solid"};
  width: 327px;
  height: 45px;
  padding: 11px 16px;
  border-radius: 8px;
  color: #21092f;
  letter-spacing: 1px;
  transition: border-color 0.3s ease-in-out;
  font-family: "Space Grotesk", sans-serif;
  @media screen and (min-width: 1250px) {
    width: 381px;
    font-size: 16px;
  }
  &:focus {
    border: ${(props: boolean | boolean | any) =>
      props.validName === false && "1px solid red"};
  }
`;

const InputNumber = styled(InputMask)<Props>`
  border: ${(props: boolean | boolean | any) =>
    props.validNumber === true ? "1px solid #6348FE" : " #dfdee0 1px solid"};
  width: 327px;
  height: 45px;
  padding: 11px 16px;
  border-radius: 8px;
  color: #21092f;
  letter-spacing: 1px;
  font-family: "Space Grotesk", sans-serif;
  transition: border-color 0.3s ease-in-out;
  @media screen and (min-width: 1250px) {
    width: 381px;
    font-size: 16px;
  }
  &:focus {
    border: ${(props: boolean | boolean | any) =>
      props.validNumber === false && "1px solid red"};
  }
`;
const InputMM = styled.input<Props>`
  border: ${(props: boolean | boolean | any) =>
    props.validMM === true ? "1px solid #6348FE" : "#dfdee0 1px solid"};
  width: 72px;
  height: 45px;
  padding: 11px 16px;
  border-radius: 8px;
  color: #21092f;
  transition: border-color 0.3s ease-in-out;
  @media screen and (min-width: 1250px) {
    width: 80px;
    font-size: 18px;
  }
  &:focus {
    border: ${(props: boolean | boolean | any) =>
      props.validMM === false && "1px solid red"};
  }
`;
const InputYy = styled.input<Props>`
  border: ${(props: boolean | boolean | any) =>
    props.validYY === true ? "1px solid #6348FE" : "#dfdee0 1px solid"};
  width: 72px;
  height: 45px;
  padding: 11px 16px;
  border-radius: 8px;
  color: #21092f;
  transition: border-color 0.3s ease-in-out;
  @media screen and (min-width: 1250px) {
    width: 80px;
    font-size: 18px;
  }
  &:focus {
    border: ${(props: boolean | boolean | any) =>
      props.validYY === false && "1px solid red"};
  }
`;
const InputCVC = styled.input<Props>`
  border: ${(props: boolean | boolean | any) =>
    props.validCVC === true ? "1px solid #6348FE" : "#dfdee0 1px solid"};
  width: 164px;
  height: 45px;
  padding: 11px 16px;
  border-radius: 8px;
  color: #21092f;
  transition: border-color 0.3s ease-in-out;
  @media screen and (min-width: 1250px) {
    width: 191px;
    font-size: 18px;
  }
  &:focus {
    border: ${(props: boolean | boolean | any) =>
      props.validCVC === false && "1px solid red"};
  }
`;
const Button = styled.button`
  width: 327px;
  height: 53px;
  border-radius: 8px;
  background-color: #21092f;
  margin-top: 28px;
  color: #ffffff;
  font-size: 18px;
  cursor: pointer;
  letter-spacing: 1px;
  @media screen and (min-width: 1250px) {
    width: 381px;
  }
`;
const ErrorWrapper = styled.div`
  display: flex;
  position: relative;
  margin-bottom: 26px;
`;
const ErrorMM = styled.div`
  position: absolute;
  color: #ff5050;
  font-size: 11px;
  right: 250px;
  margin-top: 8px;
  display: inline;
`;
const ErrorCVC = styled.div`
  position: absolute;
  color: #ff5050;
  font-size: 11px;
  right: 85px;
  margin-top: 8px;
  @media screen and (min-width: 1250px) {
    right: 60px;
  }
`;
const ErrorYY = styled.div`
  position: absolute;
  color: #ff5050;
  font-size: 11px;
  right: 171px;
  margin-top: 8px;
  @media screen and (min-width: 1250px) {
    right: 160px;
  }
`;
const ErrorName = styled.div`
  color: #ff5050;
  font-size: 12px;
  margin-top: 8px;
`;
const ErrorNumber = styled.div`
  color: #ff5050;
  font-size: 12px;
  margin-top: 8px;
`;

export default Form;
