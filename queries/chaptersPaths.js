import { gql } from "@apollo/client";

const GET_CHAPTERS_PATHS = gql`
  query chaptersPaths {
    chapters {
      id
      Slug
      Subject {
        id
        Slug
      }
    }
  }
`;

export default GET_CHAPTERS_PATHS;
