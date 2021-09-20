import { gql } from "@apollo/client";

const GET_SUBJECTS = gql`
  query allsubject {
    subjects {
      id
      Name
      Slug
      Description
      Image {
        url
        alternativeText
      }
      Books {
        id
      }
      Chapters {
        Examples {
          id
        }
        Notes {
          id
        }
      }
    }
  }
`;

export default GET_SUBJECTS;
