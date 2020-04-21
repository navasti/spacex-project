import React from 'react';
import './App.css';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import Launches from './components/Launches';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql'
})

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="container">
        <h1 style={{ textAlign: 'center' }}>SpaceX</h1>
        <Launches />
      </div>
    </ApolloProvider>
  );
}

export default App;
