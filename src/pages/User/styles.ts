import styled, { css } from 'styled-components';

import { shade } from 'polished';

interface FormProps {
  hasError: boolean;
}

export const Container = styled.div``;

export const Title = styled.h1`
  font-size: 30px;
  font-weight: 500;
  color: #3d3d4d;
  max-width: 450px;
  line-height: 56px;

  margin-top: 80px;
`;

export const Form = styled.form<FormProps>`
  margin-top: 40px;
  max-width: 100%;

  display: flex;

  input {
    flex: 1;
    height: 50px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px;
    font-size: 16px;
    font-weight: 500;
    border: 1px solid #fff;

    ${props =>
      props.hasError &&
      css`
        border-color: #c53030;
      `}

    &::placeholder {
      color: #cecece;
    }
  }

  button {
    width: 210px;
    height: 50px;
    background: #cecece;
    border-radius: 0px 5px 5px 0px;
    border: 0;
    color: #312e38;
    font-weight: bold;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#cecece')};
    }
  }
`;

export const Repositories = styled.div`
  margin-top: 60px;
  max-width: 100%;

  a {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;
    transition: transform 0.2s;
    display: flex;
    align-items: center;

    & + a {
      margin-top: 5px;
    }
    &:hover {
      transform: translateX(10px);
    }
  }

  img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
  }

  div {
    margin-left: 16px;
    flex: 1;

    strong {
      font-size: 20px;
      color: #3d3d4d;
    }

    p {
      font-size: 18px;
      color: #a8a8b3;
      margin-top: 4px;
    }
  }

  svg {
    margin-left: auto;
    color: #3d3d4d;
  }
`;

export const Error = styled.p`
  color: #c53030;
  display: block;
  margin-top: 5px;
  font-weight: 500;
  font-size: 14px;
`;

export const IdUser = styled.p`
  margin-left: auto;
  color: #3d3d4d;
  margin-right: 20px;
  font-weight: 500;
`;
