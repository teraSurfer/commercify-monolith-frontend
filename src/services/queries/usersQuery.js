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

export {
    usersQuery
}
