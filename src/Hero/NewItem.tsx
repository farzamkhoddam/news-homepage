import styled from "styled-components/macro";
import { device } from "../consts";

interface Props {
  desc: string;
  hasBottomBorder?: boolean;
  title: string;
}
const NewItem: React.FC<Props> = ({ desc, hasBottomBorder = true, title }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Desc>{desc}</Desc>
      {hasBottomBorder && <hr />}
    </Container>
  );
};
export default NewItem;
const Container = styled.div`
  cursor: pointer;
`;
const Title = styled.h3`
  color: white;
  text-align: left;
  font-size: 21px;
  transition: all 0.3s ease;
  @media ${device.tabletL} {
    font-size: 16px;
    margin-bottom: 0.5rem;
  }
  ${Container}:hover & {
    color: var(--color-secondary);
  }
`;
const Desc = styled.p`
  color: var(--color-text2);
  text-align: left;
  margin-bottom: 2.5rem;
  @media ${device.tabletL} {
    font-size: 14px;
    margin-bottom: 0.5rem;
  }
`;
