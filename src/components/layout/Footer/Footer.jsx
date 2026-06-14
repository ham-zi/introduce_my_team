import { Copy, Wrap } from "./Footer.styles";

const Footer = () => {
  return (
    <Wrap>
      <Copy>
        ©{new Date().getFullYear()} I-SO Unknown Food Recipe All Right Reserved
      </Copy>
    </Wrap>
  );
};

export default Footer;
