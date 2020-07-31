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
      <Title>a</Title>
      {user && (
        <Container>
          <Details>
            <Wrapper>
              <WrapperImg>
                <img
                  src="https://avatars2.githubusercontent.com/u/20743785?s=460&u=cecbd33854c50e4858e8a54f78c2e4897d2e18c0&v=4"
                  alt="{repository.owner.login}"
                />
              </WrapperImg>

              <WrapperDetails>
                <strong>{user.login}</strong>
                <p>Login</p>
                <p>Profile</p>
                <p>Creation Login</p>
              </WrapperDetails>
              <FiChevronRight size={20} />
            </Wrapper>
          </Details>
        </Container>
      )}
    </>
  );
};

export default UserDetail;
