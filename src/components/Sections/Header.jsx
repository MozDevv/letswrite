import React from "react";

// Components

// Assets
import HeaderImage from "../../assets/img/2148817069.jpg";
import QuotesIcon from "../../assets/svg/Quotes";
import Dots from "../../assets/svg/Dots";
import { Button } from "@mui/material";
import { ArrowForwardIos } from "@mui/icons-material";
import styled from "styled-components";

export default function Header() {
  const [hovered, setHovered] = React.useState(false);
  return (
    <Wrapper id="home" className="container flexSpaceCenter">
      <LeftSide className="flexCenter">
        <div>
          <h1 className="extraBold font60">
            Elevate Your Writing with Expert Support.
          </h1>
          <HeaderP className="font13 semiBold">
            Our comprehensive writing services include personalized tutoring,
            engaging copywriting, and professional editing. Whether you’re
            looking to improve your writing skills or need help with a project,
            we’re here to help.
          </HeaderP>
          <div
            className="flex flex-row gap-3 bg-white "
            style={{
              display: "flex",
              alignItems: "center",
              gap: "40px",
            }}
          >
            <Button
              variant="contained"
              size="large"
              sx={{
                borderRadius: "20px",

                transition: "all 0.3s ease",

                width: hovered ? "200px" : "180px", // Change width on hover
                transform: hovered ? "scale(1.05)" : "scale(1)", // Enlarge on hover
                "&:hover": {
                  backgroundColor: "#7620FF", // Optional: change color on hover
                },
              }}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              endIcon={
                <ArrowForwardIos
                  fontSize="small"
                  sx={{
                    fontSize: "13px !important",
                    marginLeft: "8px",
                    transition: "opacity 0.3s ease",
                    opacity: hovered ? 1 : 0, // Fade in icon on hover
                  }}
                />
              }
            >
              Get Started
            </Button>
            <Button
              variant="outlined"
              sx={{
                borderRadius: "20px",
              }}
              size="large"
            >
              Hire a Tutor
            </Button>
          </div>
        </div>
      </LeftSide>
      <RightSide>
        <ImageWrapper>
          <Img
            className="radius8"
            src={HeaderImage}
            alt="office"
            style={{ zIndex: 9 }}
          />
          <QuoteWrapper className="flexCenter darkBg radius8">
            <QuotesWrapper>
              <QuotesIcon />
            </QuotesWrapper>
            <div>
              <p className="font15 whiteColor">
                <em>
                  Friends, such as we desire, are dreams and fables. Friendship
                  demands the ability to do without it.
                </em>
              </p>
              <p
                className="font13 orangeColor textRight"
                style={{ marginTop: "10px" }}
              >
                Ralph Waldo Emerson
              </p>
            </div>
          </QuoteWrapper>
          <DotsWrapper>
            <Dots />
          </DotsWrapper>
        </ImageWrapper>
        <GreyDiv className="lightBg"></GreyDiv>
      </RightSide>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding-top: 80px;
  width: 100%;
  min-height: 840px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
const LeftSide = styled.div`
  width: 50%;
  height: 100%;
  @media (max-width: 960px) {
    width: 100%;
    order: 2;
    margin: 50px 0;
    text-align: center;
  }
  @media (max-width: 560px) {
    margin: 80px 0 50px 0;
  }
`;
const RightSide = styled.div`
  width: 50%;
  height: 100%;
  @media (max-width: 960px) {
    width: 100%;
    order: 1;
    margin-top: 30px;
  }
`;
const HeaderP = styled.div`
  max-width: 470px;
  padding: 15px 0 50px 0;
  line-height: 1.5rem;
  @media (max-width: 960px) {
    padding: 15px 0 50px 0;
    text-align: center;
    max-width: 100%;
  }
`;
const BtnWrapper = styled.div`
  max-width: 190px;
  @media (max-width: 960px) {
    margin: 0 auto;
  }
`;
const GreyDiv = styled.div`
  width: 30%;
  height: 700px;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 0;
  @media (max-width: 960px) {
    display: none;
  }
`;
const ImageWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  z-index: 9;

  @media (max-width: 960px) {
    width: 100%;
    justify-content: center;
  }
`;
const Img = styled.img`
  height: 607px;
  width: 426px;
  object-fit: cover;
`;
const QuoteWrapper = styled.div`
  position: absolute;
  left: 0;
  bottom: 50px;
  max-width: 330px;
  padding: 30px;
  z-index: 99;
  @media (max-width: 960px) {
    left: 20px;
  }
  @media (max-width: 560px) {
    bottom: -50px;
  }
`;
const QuotesWrapper = styled.div`
  position: absolute;
  left: -20px;
  top: -10px;
`;
const DotsWrapper = styled.div`
  position: absolute;
  right: -100px;
  bottom: 100px;
  z-index: 2;
  @media (max-width: 960px) {
    right: 100px;
  }
  @media (max-width: 560px) {
    display: none;
  }
`;
