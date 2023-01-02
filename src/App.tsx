import React, { useState } from "react";
import styled from "styled-components";
import bgImage from "./assets/bg-main-mobile.png";
import imageDesktop from "./assets/bg-main-desktop.png";
import cardBack from "./assets/bg-card-back.png";
import cardFront from "./assets/bg-card-front.png";
import cardLogo from "./assets/card-logo.svg";
import Form from "./components/Form";
import { Thanks } from "./components/Thanks";

export type Props = {
  isCompleted?: boolean;
  setIsCompleted?: boolean;
  selected?: boolean;
  name?: boolean;
};

function App() {
  const [isCompleted, setIsCompleted] = useState(false);
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [code, setCode] = useState("");

  return (
    <AppContainer>
      <CardContainer>
        <ImageMobile src={bgImage}></ImageMobile>
        <ImageDesktop src={imageDesktop}></ImageDesktop>
        <CardBack src={cardBack} />
        <Code>{code || "000"}</Code>
        <CardFront>
          <CardLogo src={cardLogo}></CardLogo>
          <CardNumber>{number || "0000 0000 0000 0000"}</CardNumber>
          <CardBox>
            <CardName>{name || "JANE APPLESEED"}</CardName>
            <CardDate>
              {month || "00"}/{year || "00"}
            </CardDate>
          </CardBox>
        </CardFront>
      </CardContainer>
      {!isCompleted ? (
        <Form
          isCompleted={isCompleted}
          setIsCompleted={setIsCompleted}
          setName={setName}
          setNumber={setNumber}
          setMonth={setMonth}
          setYear={setYear}
          setCode={setCode}
        />
      ) : (
        <Thanks
          setIsCompleted={setIsCompleted}
          setName={setName}
          setNumber={setNumber}
          setMonth={setMonth}
          setYear={setYear}
          setCode={setCode}
        />
      )}
    </AppContainer>
  );
}

const AppContainer = styled.div`
  width: 375px;
  display: flex;
  font-family: "Space Grotesk", sans-serif;
  align-items: center;
  width: 100vw;
  flex-direction: column;
  @media screen and (min-width: 1050px) {
    width: 100vw;
    height: 100vh;
    flex-direction: row;
    position: relative;
    justify-content: space-between;
  }
`;
const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  @media screen and (min-width: 1050px) {
    flex-direction: start;
    justify-content: start;
  }
`;
const ImageMobile = styled.img`
  width: 375px;
  height: 240px;
  @media screen and (min-width: 1050px) {
    display: none;
  }
`;
const ImageDesktop = styled.img`
  display: none;
  height: 100vh;
  @media screen and (min-width: 1050px) {
    height: 100vh;
    width: 483px;
    display: flex;
  }
`;
const CardBack = styled.img`
  position: absolute;
  width: 286px;
  height: 157px;
  left: 72px;
  top: 36px;
  @media screen and (min-width: 1050px) {
    width: 447px;
    height: 245px;
    left: 262px;
    top: 480px;
  }
`;
const CardFront = styled.div`
  background-image: url(${cardFront});
  width: 285px;
  height: 156px;
  position: absolute;
  top: 125px;
  left: 16px;
  background-size: 286px 156px;
  @media screen and (min-width: 1050px) {
    width: 447px;
    height: 245px;
    top: 197px;
    left: 165px;
    background-size: 447px 245px;
  }
`;
const CardLogo = styled.img`
  width: 74px;
  height: 48px;
  padding: 18px 0 0 19px;
  @media screen and (min-width: 1050px) {
    width: 120px;
    height: 77px;
    padding: 28px 0 0 32px;
  }
`;
const CardNumber = styled.h2`
  width: 375px;
  height: 23px;
  padding: 27px 0px 46px 19px;
  font-size: 18px;
  color: #ffffff;
  letter-spacing: 1px;
  font-weight: 500;
  @media screen and (min-width: 1050px) {
    width: 381px;
    height: 36px;
    padding: 44px 0px 25px 32px;
    font-size: 28px;
    letter-spacing: 1.5px;
  }
`;
const CardBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 20px 20px 19px;

  @media screen and (min-width: 1050px) {
    padding: 45px 26px 26px 32px;
  }
`;
const CardName = styled.h3`
  font-size: 9px;
  color: #ffffff;
  letter-spacing: 0.5px;
  @media screen and (min-width: 1050px) {
    font-size: 14px;
    letter-spacing: 1px;
    text-transform: uppercase;
    line-height: 18px;
  }
`;

const CardDate = styled.h3`
  color: #ffffff;
  font-size: 9px;
  @media screen and (min-width: 1050px) {
    font-size: 14px;
    letter-spacing: 1px;
    text-transform: uppercase;
    line-height: 18px;
  }
`;
const Code = styled.h4`
  position: absolute;
  left: 310px;
  top: 108px;
  font-size: 9px;
  color: #ffffff;
  @media screen and (min-width: 1050px) {
    left: 630px;
    top: 590px;
    font-size: 14px;
    letter-spacing: 1px;
    color: #ffffff;
  }
`;
export default App;
