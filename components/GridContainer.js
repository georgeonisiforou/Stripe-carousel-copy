import React, { useEffect, useState } from "react";
import styled, { css, keyframes } from "styled-components";
import Image from "next/image";
import { FaFileAlt } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  width: 100%;
`;

const MainContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 300px);
  /* grid-auto-rows: minmax(100px, 100px); */
  grid-template-rows: repeat(8, 100px);
`;

const LeftSideCarousel = styled.div`
  grid-column: 1/2;
  grid-row: 1/7;
  position: relative;
  display: flex;
  overflow: hidden;
`;

const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 100%;
  height: 100%;
  transform: ${({ move }) => `translateX(${move}%)`};
  transition: all 0.5s ease;
`;

const LeftSideElementOne = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  grid-row: 1/2;
  min-height: 33.33333%;
  border: 1px dashed rgba(0, 0, 0, 0.05);
  position: relative;

  &::before {
    content: "";
    position: absolute;
    left: -1px;
    top: 1rem;
    width: 1px;
    background-color: navy;
    height: 1.5rem;
  }
`;

const LeftSideElementTwo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  min-width: 100%;
  min-height: 33.333333%;
  grid-row: 2/3;
  border: 1px dashed rgba(0, 0, 0, 0.05);
  position: relative;

  &::before {
    content: "";
    position: absolute;
    left: -1px;
    top: 1rem;
    width: 1px;
    background-color: navy;
    height: 1.5rem;
  }
`;

const LeftSideElementThree = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  min-width: 100%;
  min-height: 33.33333%;
  grid-row: 3/4;
  border: 1px dashed rgba(0, 0, 0, 0.05);
  position: relative;

  &::before {
    content: "";
    position: absolute;
    left: -1px;
    top: 1rem;
    width: 1px;
    background-color: navy;
    height: 1.5rem;
  }
`;

const progress = keyframes`
from{
  width: 0;
}
to{
  width: 100%;
}
`;

const Carousel = styled.div`
  grid-column: 2/5;
  grid-row: 1/6;
  display: flex;
  position: relative;
  justify-content: flex-start;
  align-items: flex-end;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0px 0px 10px 4px rgba(0, 0, 0, 0.35);
  z-index: 2;
`;

const MainText = styled.div`
  font-size: 1.7rem;
  display: flex;
  flex-direction: column;
  gap: 24px;
  font-weight: 600;
  max-width: 450px;
  z-index: 3;
  color: white;
  transform: translateY(48px);
  transition: all 0.6s cubic-bezier(0.7, 0, 0, 1);
`;

const ReadMore = styled.div`
  font-size: 1rem;
  display: flex;
  gap: 8px;
  align-items: center;
`;

const MainImage = styled(Image)``;

const Overlay = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  opacity: 0.6;
  background: ${({ bg }) => bg};
  transition: all 0.5s ease 0.3s;
`;

const BigElement = styled(Link)`
  display: flex;
  padding: 2rem;
  min-width: 100%;
  height: 100%;
  position: relative;
  justify-content: flex-start;
  align-items: flex-end;
  transform: ${({ move }) => `translateX(${move}%)`};
  transition: all 0.5s ease;
  text-decoration: none;

  &:hover > ${MainText} {
    transform: translateY(-16px);
  }

  &:hover > ${Overlay} {
    opacity: 0.8;
  }
`;

const ProductsUsed = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-top: 1rem;
  justify-self: flex-start;
  align-self: flex-start;
`;

const Product = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
`;

const BigElementLogo = styled.div`
  position: absolute;
  left: 1rem;
  top: 1rem;
  width: 60px;
  height: 60px;
  z-index: 3;
  filter: brightness(0) invert(1);
`;

const FileIcon = styled.div`
  position: absolute;
  right: 1rem;
  top: 1rem;
  width: 30px;
  height: 30px;
  z-index: 3;
  color: white;
`;

const BottomElementOne = styled.button`
  grid-column: 1/2;
  grid-row: 7/9;
  border: 1px dashed rgba(0, 0, 0, 0.05);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  outline: none;
  cursor: pointer;
  position: relative;

  & > img {
    opacity: ${({ active }) => (active === 0 ? 1 : 0.4)};
    mix-blend-mode: ${({ active }) => (active === 0 ? "normal" : "luminosity")};
    transition: all 0.5s ease;
  }

  &::before {
    content: "";
    position: absolute;
    height: 1px;
    animation: ${({ active }) =>
      active === 0
        ? css`
            ${progress} 7s linear
          `
        : ""};
    background: ${({ bg }) => bg};
    top: 0;
    left: 0;
  }
`;

const BottomElementTwo = styled.button`
  grid-column: 2/3;
  grid-row: 7/9;
  border: 1px dashed rgba(0, 0, 0, 0.05);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  outline: none;
  cursor: pointer;
  position: relative;

  & > img {
    opacity: ${({ active }) => (active === 1 ? 1 : 0.4)};
    mix-blend-mode: ${({ active }) => (active === 1 ? "normal" : "luminosity")};
    transition: all 0.5s ease;
  }

  &::before {
    content: "";
    position: absolute;
    height: 1px;
    animation: ${({ active }) =>
      active === 1
        ? css`
            ${progress} 7s linear
          `
        : ""};
    background: ${({ bg }) => bg};
    top: 0;
    left: 0;
  }
`;

const BottomElementThree = styled.button`
  grid-column: 3/4;
  grid-row: 7/9;
  border: 1px dashed rgba(0, 0, 0, 0.05);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  outline: none;
  cursor: pointer;
  position: relative;

  & > img {
    opacity: ${({ active }) => (active === 2 ? 1 : 0.4)};
    mix-blend-mode: ${({ active }) => (active === 2 ? "normal" : "luminosity")};
    transition: all 0.5s ease;
  }

  &::before {
    content: "";
    position: absolute;
    height: 1px;
    animation: ${({ active }) =>
      active === 2
        ? css`
            ${progress} 7s linear
          `
        : ""};
    background: ${({ bg }) => bg};
    top: 0;
    left: 0;
  }
`;

const BottomElementFour = styled.button`
  grid-column: 4/5;
  grid-row: 7/9;
  border: 1px dashed rgba(0, 0, 0, 0.05);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  outline: none;
  cursor: pointer;
  position: relative;

  & > img {
    opacity: ${({ active }) => (active === 3 ? 1 : 0.4)};
    mix-blend-mode: ${({ active }) => (active === 3 ? "normal" : "luminosity")};
    transition: all 0.5s ease;
  }

  &::before {
    content: "";
    position: absolute;
    height: 1px;
    animation: ${({ active }) =>
      active === 3
        ? css`
            ${progress} 7s linear
          `
        : ""};
    background: ${({ bg }) => bg};
    top: 0;
    left: 0;
  }
`;

const Title = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
`;

const GridContainer = () => {
  const [current, setCurrent] = useState(0);
  const [active, setActive] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const content = [
    {
      brand: "BMW",
      link: "",
      leftElement1: {
        title: "Millions",
        text: "BMW owners using ConnectedDrive Store",
      },
      leftElement2: { title: "350+", text: "US dealerships" },
      leftElement3: {
        title: "Products used",
        text: "Amazon businesses on Stripe including Prime, Audible, and Amazon Pay.",
      },
      mainImg: "/images/bmwImg.webp",
      icon: "./images/logo-bmw-2020.svg",
      payments: "./images/payments.svg",
      connect: "./images/connect.svg",
      mainText: "Learn why BMW chose Stripe to power e-commerce and payments",
      overlay:
        "linear-gradient(0deg, rgba(37, 98, 200, 1) 55%, rgba(186, 183, 233, 1) 100%)",
      move: "0",
    },
    {
      brand: "Amazon",
      link: "",
      leftElement1: {
        title: "5+",
        text: "Amazon businesses on Stripe including Prime, Audible, and Amazon Pay.",
      },
      leftElement2: {
        title: "50+",
        text: "Payment methods available on Stripe",
      },
      leftElement3: {
        title: "Products used",
        text: "Amazon businesses on Stripe including Prime, Audible, and Amazon Pay.",
      },
      mainImg: "/images/amazonImg.png",
      icon: "./images/logo-amazon.svg",
      payments: "./images/payments.svg",
      connect: "./images/connect.svg",
      mainText: "See how Amazon simplified cross-border payments with Stripe",
      overlay:
        "linear-gradient(0deg, rgba(236,176,72,1) 34%, rgba(243,244,235,1) 100%)",
      move: "-100%",
    },
    {
      brand: "Maersk",
      link: "",
      leftElement1: { title: "130", text: "Countries in logistics network" },
      leftElement2: {
        title: "$10+",
        text: "Billion worth of goods moved around the world each year",
      },
      leftElement3: {
        title: "Products used",
        text: "Amazon businesses on Stripe including Prime, Audible, and Amazon Pay.",
      },
      mainImg: "/images/maerskImg.png",
      icon: "./images/maersk.svg",
      payments: "./images/payments.svg",
      connect: "./images/connect.svg",
      mainText:
        "See how Maersk tapped into new technology to make it easier to ship around the world",
      overlay:
        "linear-gradient(0deg, rgba(72,205,236,1) 34%, rgba(243,244,235,1) 100%)",
      move: "-200%",
    },
    {
      brand: "Twilio",
      link: "",
      leftElement1: {
        title: "+5.5%",
        text: "Uplift from Stripe's Global Payments Infrastructure",
      },
      leftElement2: { title: "+1%", text: "Uplift from Adaptive Acceptance" },
      leftElement3: {
        title: "Products used",
        text: "Amazon businesses on Stripe including Prime, Audible, and Amazon Pay.",
      },
      mainImg: "/images/twilioImg.png",
      icon: "./images/twilio-2.svg",
      payments: "./images/payments.svg",
      connect: "./images/connect.svg",
      mainText:
        "See how Twilio increased authorization rates by 10% with Stripe",
      overlay:
        "linear-gradient(0deg, rgba(236,72,75,1) 34%, rgba(243,244,235,1) 100%)",
      move: "-300%",
    },
  ];
  return (
    <Container>
      <MainContainer>
        <LeftSideCarousel>
          {content.map((item, idx) => {
            return (
              <LeftSide key={idx} move={current}>
                <LeftSideElementOne>
                  <Title>{item.leftElement1.title}</Title>
                  <p style={{ maxWidth: "25ch" }}>{item.leftElement1.text}</p>
                </LeftSideElementOne>

                <LeftSideElementTwo>
                  <Title>{item.leftElement2.title}</Title>
                  <p style={{ maxWidth: "25ch" }}>{item.leftElement2.text}</p>
                </LeftSideElementTwo>
                <LeftSideElementThree>
                  <Title>{item.leftElement3.title}</Title>
                  <ProductsUsed>
                    <Product>
                      <Image
                        alt="icon"
                        src={item.payments}
                        width={20}
                        height={20}
                      />
                      Payments
                    </Product>
                    <Product>
                      <Image
                        alt="icon"
                        src={item.connect}
                        width={20}
                        height={20}
                      />
                      Connect
                    </Product>
                  </ProductsUsed>
                </LeftSideElementThree>
              </LeftSide>
            );
          })}
        </LeftSideCarousel>

        <Carousel>
          {content.map((item, idx) => {
            return (
              <BigElement
                key={idx}
                move={current}
                href={item.link}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <MainImage
                  alt="image"
                  src={item.mainImg}
                  fill
                  style={{
                    objectFit: "cover",
                    objectPosition: idx === 3 ? "20% 0%" : "20%",
                  }}
                />
                <Overlay bg={item.overlay} />
                <BigElementLogo>
                  <Image
                    alt="logo"
                    src={item.icon}
                    width={idx === 2 ? 200 : 100}
                    height={50}
                  />
                </BigElementLogo>
                <FileIcon>
                  <FaFileAlt style={{ width: "100%", height: "100%" }} />
                </FileIcon>
                <MainText>
                  {item.mainText}
                  <ReadMore>
                    Read story
                    {isHovered ? <FaArrowRight /> : <FaChevronRight />}
                  </ReadMore>
                </MainText>
              </BigElement>
            );
          })}
        </Carousel>

        <BottomElementOne
          onAnimationEnd={() => {
            setActive(1);
            setCurrent(-100);
          }}
          bg={content[0].overlay}
          active={active}
          onClick={() => {
            setCurrent(0);
            setActive(0);
          }}
        >
          <Image alt="logo" src={content[0].icon} width={80} height={80} />
        </BottomElementOne>
        <BottomElementTwo
          onAnimationEnd={() => {
            setActive(2);
            setCurrent(-200);
          }}
          bg={content[1].overlay}
          active={active}
          onClick={() => {
            setCurrent(-100);
            setActive(1);
          }}
        >
          <Image alt="logo" src={content[1].icon} width={120} height={120} />
        </BottomElementTwo>
        <BottomElementThree
          onAnimationEnd={() => {
            setActive(3);
            setCurrent(-300);
          }}
          active={active}
          bg={content[2].overlay}
          onClick={() => {
            setCurrent(-200);
            setActive(2);
          }}
        >
          <Image alt="logo" src={content[2].icon} width={180} height={150} />
        </BottomElementThree>
        <BottomElementFour
          onAnimationEnd={() => {
            setActive(0);
            setCurrent(0);
          }}
          active={active}
          bg={content[3].overlay}
          onClick={() => {
            setCurrent(-300);
            setActive(3);
          }}
        >
          <Image alt="logo" src={content[3].icon} width={120} height={120} />
        </BottomElementFour>
      </MainContainer>
    </Container>
  );
};

export default GridContainer;
