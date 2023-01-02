import React from "react";
import styled from "styled-components";
import thanksLogo from "../assets/icon-complete.svg";
import { useState } from "react";

type Props = {
  isCompleted?: any;
  setIsCompleted?: any;
};
export const Thanks = (props: any) => {
  const { setIsCompleted, setName, setNumber, setMonth, setYear, setCode } =
    props;
  const handleContinue = () => {
    setName(false);
    setNumber(false);
    setMonth(false);
    setYear(false);
    setCode(false);
    setIsCompleted(false);
  };
  return (
    <ThanksContainer>
      <ThanksLogo src={thanksLogo} />
      <Title>THANK YOU!</Title>
      <Text>We’ve added your card details</Text>
      <BtnContinue onClick={handleContinue}>Continue</BtnContinue>
    </ThanksContainer>
  );
};
const ThanksContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 375px;
  @media screen and (min-width: 1050px) {
    width: 381px;
    margin-left: 200px;
  }
  @media screen and (min-width: 1150px) {
    width: 381px;
    margin-left: 350px;
  }
  @media screen and (min-width: 1250px) {
    width: 381px;
    margin-right: 400px;
  }
  @media screen and (min-width: 1150px) {
    width: 381px;
    margin-left: 350px;
  }
  @media screen and (min-width: 1250px) {
    width: 381px;
    margin-right: 500px;
  }
`;
const ThanksLogo = styled.img`
  width: 80px;
  height: 80px;
  margin-top: 91px;
`;
const Title = styled.h1`
  margin-top: 35px;
  letter-spacing: 2px;
  font-size: 28px;
  color: #21092f;
  font-family: "Space Grotesk", sans-serif;
`;
const Text = styled.h3`
  margin-top: 16px;
  font-size: 18px;
  line-height: 23px;
  font-family: "Space Grotesk", sans-serif;
  color: #8f8694;
`;
const BtnContinue = styled.button`
  background-color: #21092f;
  color: #ffffff;
  width: 327px;
  height: 53px;
  margin-top: 48px;
  border-radius: 8px;
  font-size: 18px;
  cursor: pointer;
  @media screen and (min-width: 1150px) {
    width: 381px;
  }
`;
