import { render } from 'react-dom';
import { RestLink } from 'apollo-link-rest';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo';
import FormContainer from './containers/FormContainer';
// import './index.css';
import { AppContainer } from './styles';

const link: any = new RestLink({
  uri: 'https://jsonplaceholder.typicode.com/'
});

const client = new ApolloClient({
  link,
  cache: new InMemoryCache()
});

render(
  <AppContainer>
    <ApolloProvider client={client}>
      <FormContainer />
    </ApolloProvider>
  </AppContainer>,
  document.getElementById('root')
);
