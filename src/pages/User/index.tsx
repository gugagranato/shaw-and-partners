import React, { useState, FormEvent, useEffect } from 'react';

import { Link } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';
import api from '../../services/api';

import { Title, Container, Form, Repositories, Error, IdUser } from './styles';

interface User {
  id: number;
  login: string;
  // eslint-disable-next-line camelcase
  avatar_url: string;
  // eslint-disable-next-line camelcase
  html_url: string;
}
const User: React.FC = () => {
  const [newUser, setNewUser] = useState('');
  const [users, setUsers] = useState<User[]>([]);
  // const [newRepo, setNewRepo] = useState('');
  const [inputError, setInputError] = useState('');

  useEffect(() => {
    api.get(`users`).then(res => {
      setUsers(res.data);
    });
  }, [setUsers]);

  async function handleAddRepository(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    if (!newUser) {
      setInputError('Digite o autor/nome do repositório');
      return;
    }

    try {
      const response = await api.get(`users/${newUser}`);

      const user = response.data;

      setUsers([...users, user]);
      setNewUser('');
      setInputError('');
    } catch (error) {
      setInputError('Erro na busca por esse repositório');
    }
  }

  return (
    <Container>
      <Title>User list</Title>
      <Form hasError={!!inputError} onSubmit={handleAddRepository}>
        <input
          value={newUser}
          onChange={e => setNewUser(e.target.value)}
          placeholder="Type user"
        />
        <button type="submit">Pesquisar</button>
      </Form>
      {inputError && <Error>{inputError}</Error>}
      <Repositories>
        {users.map(user => (
          <Link key={user.id} to={`/detail/${user.login}`}>
            <img src={user.avatar_url} alt={user.login} />
            <div>
              <strong>{user.login}</strong>
              <p>{user.html_url}</p>
            </div>
            <FiChevronRight size={20} />
          </Link>
        ))}
        {users.map(user => (
          <Link key={user.id} to={`/detail/${user.login}`}>
            <img src={user.avatar_url} alt={user.login} />
            <div>
              <strong>{user.login}</strong>
              <p>{user.html_url}</p>
            </div>
            <IdUser>{`ID: ${user.id}`}</IdUser>
            <FiChevronRight size={20} />
          </Link>
          // <article key={user.id}>
          //   <strong>{`${user.id} - ${user.login}`}</strong>
          // </article>
        ))}
      </Repositories>
    </Container>
  );
};

export default User;
