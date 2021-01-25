import styled, { createGlobalStyle } from "styled-components";

export const Description = styled.h4`
  text-align: center;
`;

export const DetailWrapper = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 80%;

  img {
    width: 35%;
    float: left;
    margin-bottom: 2%;
    padding-right: 2%;
  }

  p {
    vertical-align: middle;
  }

  h1 {
    margin-top: 2%;
    font-size: 120%;
    text-align: left;
  }
`;

export const GlobalStyle = createGlobalStyle`
  body {
    color: ${(props) => props.theme.mainColor};
    background-color: ${(props) => props.theme.backgroundColor}
  }
`;

export const ListWrapper = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
`;

export const ProductWrapper = styled.div`
  margin: 20px;

  img {
    width: 200px;
    height: 200px;
  }

  p {
    text-align: center;

    &.product-price {
      color: ${(props) => props.theme.pink};
    }
  }
`;

export const SearchBarStyled = styled.input`
  padding: 0.5rem;
  margin: 1rem auto;
  display: block;
  width: 40%;
`;

export const ShopImage = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
`;

export const ThemeButton = styled.button`
  font-size: 1em;
  margin: 1.25em;
  padding: 16px 32px;
  text-align: center;
  padding: 0.25em 1em;
  border-radius: 3px;
  background-color: ${(props) => props.theme.mainColor};
  color: ${(props) => props.theme.backgroundColor};
`;

export const BackButton = styled.button`
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.mainColor};
  border: 2px solid ${(props) => props.theme.mainColor};
  padding: 16px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  transition-duration: 0.4s;
  cursor: pointer;
  margin: 0 auto;
  display: block;
  float: left;
  margin-right: 1%;

  &:hover {
    background-color: ${(props) => props.theme.mainColor};
    color: ${(props) => props.theme.backgroundColor};
  }
`;

export const Title = styled.h1`
  text-align: center;
`;

export const DeleteButtonStyled = styled.button`
  background-color: white;
  color: black;
  border: 2px solid #f44336;
  padding: 16px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  transition-duration: 0.4s;
  cursor: pointer;
  margin: 0 auto;
  display: block;

  &:hover {
    background-color: #f44336;
    color: white;
  }
`;

export const DeleteButtonStyledDetailed = styled.button`
  background-color: white;
  color: black;
  border: 2px solid #f44336;
  padding: 16px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  transition-duration: 0.4s;
  cursor: pointer;
  margin: 0 auto;
  display: block;
  float: left;

  &:hover {
    background-color: #f44336;
    color: white;
  }
`;
