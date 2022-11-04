import styled from "styled-components/macro";
import Logo from "./../images/logo.svg";

const DesktopMenu = () => {
  return (
    <Container>
      <MenuLogo src={Logo} alt="site-logo" />
      <ItemWrapper>
        <Item>Home</Item>
        <Item>New</Item>
        <Item>Popular</Item>
        <Item>Trending</Item>
        <Item>Categories</Item>
      </ItemWrapper>
    </Container>
  );
};
export default DesktopMenu;
const Container = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const MenuLogo = styled.img`
  padding: 2rem 0;
`;
const ItemWrapper = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  justify-content: space-between;
  gap: 2rem;
`;
const Item = styled.li`
  list-style-type: none;
  height: 100%;
  cursor: pointer;
  color: var(--color-text1);
  transition: all 0.3s ease;
  :hover {
    color: var(--color-primary);
  }
`;
