import styled, { keyframes } from "styled-components/macro";
import Logo from "./../images/logo.svg";
import { IoMenuOutline } from "react-icons/io5";
import { HiOutlineXMark } from "react-icons/hi2";
import { useState } from "react";
const MobileMenu = () => {
  const [isMenuPopupOpen, setIsMenuPopupOpen] = useState<boolean>(false);
  const [shouldHaveFadeAnimation, setShouldHaveFadeAnimation] =
    useState<boolean>(false);
  console.log("farzam shouldHaveFadeAnimation ===", shouldHaveFadeAnimation);
  return (
    <Container>
      <MenuLogo src={Logo} alt="site-logo" />
      <MenuIcon
        onClick={() => {
          setShouldHaveFadeAnimation(false);
          setIsMenuPopupOpen(true);
        }}
      />
      {isMenuPopupOpen && (
        <>
          <GrayArea
            onClick={() => {
              setShouldHaveFadeAnimation(true);
              setTimeout(() => setIsMenuPopupOpen(false), 500);
            }}
          />
          <PopupContent shouldHaveFadeAnimation={shouldHaveFadeAnimation}>
            <CrossIcon />
            <ItemWrapper>
              <Item>Home</Item>
              <Item>New</Item>
              <Item>Popular</Item>
              <Item>Trending</Item>
              <Item>Categories</Item>
            </ItemWrapper>
          </PopupContent>
        </>
      )}
    </Container>
  );
};
export default MobileMenu;
const ComingMenuAnimation = keyframes`
0%{
  right:-100%;
}
100%{
  right:0;
}
`;
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
const MenuIcon = styled(IoMenuOutline)`
  width: 4rem;
  height: auto;
`;
const GrayArea = styled.div`
  background-color: black;
  opacity: 0.4;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
`;
const PopupContent = styled.div<{ shouldHaveFadeAnimation: boolean }>`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding-top: 5rem;
  background-color: white;
  z-index: 2;
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 70%;
  max-width: 16rem;
  animation: ${ComingMenuAnimation} 0.5s;
  transition: all 0.5s ease;
  box-shadow: 0px 0px 10px 0px var(--color-text1);
  ${({ shouldHaveFadeAnimation }) => shouldHaveFadeAnimation && `right:-100%;`}
`;
const CrossIcon = styled(HiOutlineXMark)`
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: auto;
  height: 2.5rem;
`;
const ItemWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  gap: 2rem;
  padding: 0 1rem;
  margin: 0;
`;
const Item = styled.li`
  list-style-type: none;
  height: 100%;
  width: 100%;
  text-align: left;
  font-size: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  :hover {
    color: var(--color-primary);
  }
`;
