import gql from 'graphql-tag';

export const GET_USERS = gql`
  query getUsers {
    users @rest(type: "Users", path: "users") {
      id
      name
      username
      email
    }
  }
`;

export const ADD_POST = gql`
  mutation addPost($input: newPost!) {
    addPost(input: $newPost)
      @rest(type: "Post", path: "posts", method: "POST") {
      userId
      id
      title
      body
    }
  }
`;
