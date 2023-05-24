import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import styled from "styled-components";
import data from "./data.json";

const Background = styled.div`
  position: relative;
  height: 844px;
  background: #902443;
`;

const WhiteBox = styled.div`
  position: relative;
  width: 50%;
  height: 571px;
  top: 10%;
  margin: auto;
  background: #ffffff;
  box-shadow: 0px 0px 4px 2px rgba(100, 100, 100, 0.25);
  border-radius: 5px;
`;

const Logo = styled.div`
  position: relative;
  padding-top: 20px;
  margin: auto;
  width: 81px;
  height: 81px;
`;

const Title = styled.div`
  position: relative;
  margin: auto;
  margin-top: 3%;
  width: 400px;
  height: 48px;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 800;
  font-size: 25px;
  line-height: 24px;
  text-align: center;

  color: #5e162b;
`;

const Line1 = styled.div`
  position: relative;
  width: 14px;
  height: 0px;
  margin-left: 32%;
  margin-top: 8%;

  border: 5px solid #dc7190;
  transform: rotate(90deg);
`;

const Name = styled.div`
  position: relative;
  width: 35px;
  height: 26px;
  margin-left: 36.5%;
  margin-top: -2.2%;

  font-family: "SUIT";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 20px;
  text-align: center;

  color: #000000;
`;

const NameForm = styled.input`
  position: relative;
  width: 250px;
  height: 40px;
  margin-left: 30%;
  margin-top: 10px;

  background: #cd99a6;
  border-radius: 50px;
`;

const Line2 = styled.div`
  position: relative;
  width: 14px;
  height: 0px;
  margin-left: 32%;
  margin-top: 8%;

  border: 5px solid #dc7190;
  transform: rotate(90deg);
`;

const Phone = styled.div`
  position: relative;
  width: 90px;
  height: 26px;
  margin-left: 35%;
  margin-top: -2.2%;

  font-family: "SUIT";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 20px;
  text-align: center;

  color: #000000;
`;

const PhoneForm = styled.input`
  position: relative;
  width: 253px;
  height: 42px;
  margin-left: 30%;
  margin-top: 11px;

  background: #cd99a6;
  border-radius: 50px;
`;

const Button = styled.div`
  position: relative;
  margin: auto;
  width: 93px;
  height: 36px;
  bottom: -10%;
  padding-top: 10px;

  background: #902443;
  border-radius: 10px;

  font-family: "SUIT";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 25px;
  text-align: center;

  color: #ffffff;
`;

const Footer = styled.div`
  position: relative;
  width: 248px;
  height: 29px;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  top: 15%;

  text-align: center;
  margin: auto;
  color: #ffffff;
`;

const Main = () => {
  const navigate = useNavigate();

  const go = () => {
    navigate("/fail");
  };

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleName = (event) => {
    setName(event.target.value);
  };
  const handlePhone = (event) => {
    setPhone(event.target.value);
  };

  const discriminate = () => {
    let foundMatch = false;
    for (let i = 0; i < data.length; i++) {
      if (
        data[i].name === name &&
        data[i].phone === phone &&
        data[i].pass === 1
      ) {
        navigate("/pass", { state: data[i].name });
        foundMatch = true;
        break;
      } else if (
        data[i].name === name &&
        data[i].phone === phone &&
        data[i].pass === 0
      ) {
        navigate("/fail");
        foundMatch = true;
        break;
      }
    }

    if (!foundMatch) {
      alert(
        "등록되지 않은 성함/번호입니다. \n성함과 번호를 다시 한 번 확인해주세요!"
      );
    }
  };

  return (
    <Background>
      <WhiteBox>
        <Logo>
          <img
            src={`${process.env.PUBLIC_URL}/images/ddwu_logo.png`}
            alt="logo"
            width="81px"
          />
        </Logo>
        <Title>
          동덕여자대학교 멋쟁이사자처럼 <br />
          11기 아기사자 합격자 발표
        </Title>
        <Line1></Line1>
        <Name>성함</Name>
        <NameForm type="text" value={name} onChange={handleName}></NameForm>
        <Line2></Line2>
        <Phone>전화번호</Phone>
        <PhoneForm type="text" value={phone} onChange={handlePhone}></PhoneForm>
        <Button onClick={discriminate}>입력</Button>
      </WhiteBox>
      <Footer>DONGDUK x LIKELION</Footer>
    </Background>
  );
};

export default Main;
