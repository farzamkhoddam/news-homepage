import styled from "styled-components/macro";
import imageWeb3Desktop from "../images/image-web-3-desktop.jpg";
import { useDevice } from "../useDevice";
import NewItem from "./NewItem";
import imageWeb3Mobile from "../images/image-web-3-mobile.jpg";
import { device } from "../consts";
const Hero = () => {
  const { isLaptop } = useDevice();
  return (
    <Container>
      <LeftSide>
        <ImageWrapper>
          {isLaptop ? (
            <HeroImage src={imageWeb3Desktop} alt={"hero image"} />
          ) : (
            <HeroImage src={imageWeb3Mobile} alt={"hero image"} />
          )}
        </ImageWrapper>
        <HeroTextWrapper>
          <Title>
            the bright {isLaptop && <br />}
            future of
            {isLaptop && <br />} web 3.0?
          </Title>
          <DeskAndButtonWrapper>
            <Desc>
              We dive into the next evolution of the web that claims to put the
              power of the platforms back into the hands of the people. But is
              it realy fulfilling its promise?
            </Desc>
            <ReadMoreButton>read more</ReadMoreButton>
          </DeskAndButtonWrapper>
        </HeroTextWrapper>
      </LeftSide>
      <RightSide>
        <New>New</New>
        <NewItem
          title="Hydrogen VS Electric Cars"
          desc="will hydrogen-fueled cars ever catch up to EVs?"
        />
        <NewItem
          title="The DownSides of AI Artistry"
          desc="What are the possible adverse effects of on-demand AI image generation"
        />
        <NewItem
          title="Is VC Funding Drying Up"
          desc="Private funding by VC firms is down 50% YOY. We take a look at what that means"
          hasBottomBorder={false}
        />
      </RightSide>
    </Container>
  );
};
export default Hero;
const Container = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 3rem;
  @media ${device.tabletL} {
    flex-direction: column;
    align-items: center;
  }
`;
const LeftSide = styled.div`
  width: 65%;

  @media ${device.tabletL} {
    width: 100%;
  }
`;
const ImageWrapper = styled.div`
  width: 100%;
  margin-bottom: 1rem;
`;
const HeroImage = styled.img`
  width: 100%;
  object-fit: cover;
`;
const HeroTextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  @media ${device.tabletL} {
    flex-direction: column;
    justify-content: center;
  }
`;
const Title = styled.h1`
  text-transform: capitalize;
  font-size: 60px;
  text-align: left;
  margin: 0;
  @media ${device.tabletL} {
    font-size: 50px;
  }
`;
const DeskAndButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  width: 55%;
  @media ${device.tabletL} {
    width: 100%;
    margin-bottom: 1.5rem;
  }
`;
const Desc = styled.p`
  color: var(--color-text1);
  text-align: left;
  font-size: 20px;
  line-height: 28px;
  letter-spacing: 0.2px;
  margin: 0;
  @media ${device.tabletL} {
    margin: 1.5rem 0;
    font-size: 16px;
    line-height: 20px;
  }
`;
const ReadMoreButton = styled.button`
  padding: 1rem 2rem;
  color: white;
  background-color: var(--color-button);
  border: none;
  font-size: 16px;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: bold;
  overflow: hidden;
  position: relative;
  z-index: 0;
  transition: all 0.5s ease;
  :before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    background-color: black;
    height: 100%;
    width: 100%;
    z-index: -1;
    transition: all 0.6s ease;
    transform: rotateX(90deg);
  }

  :hover {
    color: white;
    :before {
      transform: rotateX(0deg);
    }
  }
`;
const RightSide = styled.div`
  width: 26%;
  background-color: black;
  padding: 1rem 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  @media ${device.tabletL} {
    width: unset;
  }
`;
const New = styled.h2`
  color: var(--color-secondary);
  width: fit-content;
  margin: 0;
  margin-bottom: 1.5rem;
  font-size: 40px;
  @media ${device.tabletL} {
    font-size: 35px;
    margin-bottom: 0.5rem;
  }
`;
