import styled from "styled-components/macro";
import { device } from "../consts";

interface Props {
  title: string;
  subtitle: string;
  image: string;
  order: number;
}
const Item: React.FC<Props> = ({ title, subtitle, image, order }) => {
  return (
    <Container>
      <ImageWrapper>
        <Img src={image} alt={"news image"} />
      </ImageWrapper>
      <TextWrapper>
        <OrderNumber>{order <= 10 ? `0${order + 1}` : order + 1}</OrderNumber>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </TextWrapper>
    </Container>
  );
};
export default Item;
const Container = styled.div`
  display: flex;
  width: 30%;
  cursor: pointer;
  @media ${device.tabletL} {
    width: 100%;
    margin-bottom: 2rem;
  }
`;
const ImageWrapper = styled.div`
  height: 10rem;
  width: 10rem;
  @media ${device.tabletL} {
    flex-shrink: 0;
    width: 7rem;
    height: 100%;
  }
`;
const Img = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;
const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 1rem;
`;
const OrderNumber = styled.h2`
  color: var(--color-text3);
  font-size: 45px;
  margin: 0;
  @media ${device.tabletL} {
    font-size: 35px;
  }
`;
const Title = styled.h3`
  text-align: left;
  transition: all 0.3s ease;
  @media ${device.tabletL} {
    font-size: 16px;
  }
  ${Container}:hover & {
    color: var(--color-primary);
  }
`;
const Subtitle = styled.p`
  text-align: left;
  margin-top: 0;
  @media ${device.tabletL} {
    font-size: 14px;
  }
`;
