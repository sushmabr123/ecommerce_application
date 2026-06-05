import { gql } from "@apollo/client";
import { useMutation } from "@apollo/client/react";
import { useState } from 'react';

const ADD_USER = gql`
  mutation AddUser($name: String!, $email: String!) {
    addUser(name: $name, email: $email) {
      id
      name
    }
  }
`;

export default function Packages() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  
  // returns a mutate function and state object
  const [addUser, { loading, error }] = useMutation(ADD_USER, {
    refetchQueries: ['GetUsers'] // Refetches user list automatically after success
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addUser({ variables: { name, email } });
    setName('');
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={name} onChange={e => setName(e.target.value)} placeholder="Name" />
      <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
      <button type="submit" disabled={loading}>Add User</button>
      {error && <p>Error saving user.</p>}
    </form>
  );
}
