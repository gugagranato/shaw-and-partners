import styled from 'styled-components';

export const Container = styled.div`
  width: 350px;
  margin: 0 auto;
`;

export const Title = styled.h1`
  font-size: 28px;

  color: #fffc;
  max-width: 450px;
  line-height: 56px;

  margin-top: 80px;
`;

export const Details = styled.div`
  margin-top: 60px;
  max-width: 100%;
  justify-content: center;
  align-items: center;
  img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    margin-bottom: 50px;
  }
`;

export const Wrapper = styled.div`
  background: #fff;
  border-radius: 5px;
  width: 100%;
  padding: 24px;
  display: flex;
  text-decoration: none;
  /* transition: transform 0.2s; */
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const WrapperImg = styled.div`
  justify-content: center;
  align-items: center;
`;

export const WrapperDetails = styled.div`
  color: #312e38;
  /* justify-content: center;
  align-items: center; */
`;

export const TextInfo = styled.p`
  font-size: 18px;
  font-weight: 500;
`;
