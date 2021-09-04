import { gql } from "@apollo/client";

const GET_SUBJECTS_PATHS = gql`
  query subjectsPaths {
    subjects {
      id
      Slug
    }
  }
`;

export default GET_SUBJECTS_PATHS;
