// welcom.jsx
import welcomeImg from "../../../assets/welcome.png";
import { WelContainer, WelImg } from "./Welcom.Styles";

const Welcom = () => {
  return (
    <WelContainer>
      <WelImg src={welcomeImg} alt="웰컴" />
    </WelContainer>
  );
};

export default Welcom;
