import styled from "styled-components";

export const SignInFormContainer = styled.div`
  width: 400px;
`;
export const SignInButton = styled.button`
  width: 100%;
  margin: 20px auto;
  padding: 10px 20px;
  cursor: pointer;
  border: 1px solid #1d1a18;
  background-color: #1d1a18;
  color: white;
  font: inherit;
  transition: all 0.8s ease-in-out;
  border-radius: 4px;

  &:hover {
    opacity: 0.75;
  }
`;