import React, { useState, useEffect } from 'react';

import { useRouteMatch } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';
import api from '../../services/api';

import {
  Title,
  Container,
  Details,
  WrapperImg,
  Wrapper,
  WrapperDetails,
  TextInfo,
} from './styles';

interface UserParams {
  userDetail: string;
}

interface User {
  id: number;
  login: string;
  // eslint-disable-next-line camelcase
  html_url: string;
  // eslint-disable-next-line camelcase
  created_at: string;
  // eslint-disable-next-line camelcase
  avatar_url: string;
}

const UserDetail: React.FC = () => {
  const { params } = useRouteMatch<UserParams>();
  const [user, setUser] = useState<User>();

  console.log(params);
  useEffect(() => {
    api.get(`users/${params.userDetail}`).then(res => {
      console.log('res.data', res.data);
      console.log(res.data.id);
      setUser(res.data);
    });
  }, [setUser, params.userDetail]);

  return (
    <>
      <Title>User Details</Title>
      {user && (
        <Container>
          <Details>
            <Wrapper>
              <WrapperImg>
                <img src={user.avatar_url} alt={user.login} />
              </WrapperImg>

              <WrapperDetails>
                <TextInfo>{`ID: ${user.id}`}</TextInfo>
                <TextInfo>{`Login: ${user.login}`}</TextInfo>
                <TextInfo>{`Profile: ${user.html_url}`}</TextInfo>
                <TextInfo>{`Creation Date: ${user.created_at}`}</TextInfo>
              </WrapperDetails>
            </Wrapper>
          </Details>
        </Container>
      )}
    </>
  );
};

export default UserDetail;
