import {gql} from "@apollo/client";

const usersQuery = gql`
  query GetUsers {
    user {
      uid
      firstName
      lastName
      email
      password
      role
    }
  }
`;

const registerUserMutation = gql`
  mutation RegUser($user: CreateUserInput!) {
    registerUser(user: $user) {
      uid,
      firstName,
      lastName,
      role
    }
  }
`;

export {
    usersQuery,
    registerUserMutation
}
