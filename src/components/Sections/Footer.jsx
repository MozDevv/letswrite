import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
// Assets
import LogoImg from "../../assets/svg/Logo";

export default function Contact() {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <Wrapper>
      <div className="darkBg">
        <div className="container">
          <InnerWrapper
            className="flexSpaceCenter"
            style={{ padding: "30px 0" }}
          >
            <Link className="pointer flexNullCenter" to="home" smooth={true}>
              <img
                src="/letwrite.png"
                alt=""
                style={{
                  width: "280px",
                  height: "60px",

                  objectFit: "cover",
                  marginRight: "10px",
                  transform: "scale(0.7)", // Adjust the scale value to make it smaller
                  transition: "transform 0.2s ease-in-out",
                }}
              />
            </Link>
            <StyleP className="whiteColor font13">
              © {getCurrentYear()} -{" "}
              <span className="purpleColor font13">Lets Write</span> All Right
              Reserved
            </StyleP>

            <Link
              className="whiteColor animate pointer font13"
              to="home"
              smooth={true}
              offset={-80}
            >
              Back to top
            </Link>
          </InnerWrapper>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
`;
const InnerWrapper = styled.div`
  @media (max-width: 550px) {
    flex-direction: column;
  }
`;
const StyleP = styled.p`
  @media (max-width: 550px) {
    margin: 20px 0;
  }
`;
