import styled from "styled-components/macro";
import imageRetroPC from "../images/image-retro-pcs.jpg";
import imageLaptop from "../images/image-top-laptops.jpg";
import imageGamingGrowth from "../images/image-gaming-growth.jpg";
import Item from "./Item";
import { device } from "../consts";
const NewsItems = () => {
  interface ItemsData {
    title: string;
    subtitle: string;
    image: string;
  }
  const mockData: ItemsData[] = [
    {
      title: "reviving retro PCs",
      subtitle: "What happens when old PCs are given moden upgrades",
      image: imageRetroPC,
    },
    {
      title: "top 10 laptops of 2022",
      subtitle: "Our best picks for various needs and budgets",
      image: imageLaptop,
    },
    {
      title: "the growth of gaming",
      subtitle: "How the pandemic has sparked fresh opportunities",
      image: imageGamingGrowth,
    },
  ];
  return (
    <Container>
      {mockData.map(({ title, subtitle, image }, index) => {
        return (
          <Item title={title} subtitle={subtitle} image={image} order={index} />
        );
      })}
    </Container>
  );
};
export default NewsItems;
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media ${device.tabletL} {
    flex-direction: column;
  }
`;
