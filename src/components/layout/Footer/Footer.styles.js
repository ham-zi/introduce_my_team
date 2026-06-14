import { theme } from "../../../styles/theme";
import styled from "styled-components";

export const Wrap = styled.footer`
  width: 100%;
  border-top: 1px solid ${theme.color.border};
  background: #fceae7;
`;

export const Copy = styled.p`
  text-align: center;
  margin-top: 30px;
  padding-bottom: 30px;
  font-size: 15px;
  color: ${theme.color.sub};
`;
