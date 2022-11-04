import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";

const SmartMenu = () => {
  if(window.outerWidth >=1024){
    return  <DesktopMenu />;

  }
  return <MobileMenu />
};
export default SmartMenu;
