export const useDevice = () => {
  const isLaptop: boolean = window.outerWidth > 425;
  return {isLaptop};
};
