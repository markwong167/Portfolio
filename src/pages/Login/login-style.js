import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export const Heading1 = styled.div`
  font-size: 2.5rem;
  color: ${(props) => props.theme.pageTitleColour};
  padding-bottom: 1rem;
  padding-top: 1rem;
  font-weight: bold;
`;
export const SocialLoginDiv = styled.div`
  margin-bottom: 10px;
`;
export const SocialLoginButton = styled.button`
  padding: 0px 5px;
  width: 3rem;
  height: 3rem;
  margin: 8px;
  border-radius: 50%;
  border: 1px #dddddd solid;
  cursor: pointer;
  font-size: 1.6rem;
`;
export const FieldInput = styled.input`
  padding: 10px;
  font-size: 100%;
  background: #dedede;
  outline: none;
  width: 230px;
  border: none;
`;
export const FieldIcon = styled(FontAwesomeIcon)`
  color: gray;
`;

export const LinkSpan = styled.div`
  text-decoration: underline;
  font-size: 90%;
  cursor: pointer;
`;
export const SubmitInput = styled.input`
  font-size: 100%;
  width: 150px;
  padding: 10px;
  cursor: pointer;
  border-radius: 10px;
`;
