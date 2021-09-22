import { gql } from "@apollo/client";

const GET_EXAMPLES_PATHS = gql`
  query examplesPaths {
    examples {
      id
      Slug
      Chapter {
        id
        Slug
        Subject {
          id
          Slug
        }
      }
    }
  }
`;

export default GET_EXAMPLES_PATHS;
