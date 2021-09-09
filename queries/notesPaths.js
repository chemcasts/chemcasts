import { gql } from "@apollo/client";

const GET_NOTES_PATHS = gql`
  query notesPaths {
    notes {
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

export default GET_NOTES_PATHS;
