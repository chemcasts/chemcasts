import { gql } from "@apollo/client";

const GET_SUBJECT_STATE = gql`
  query subject($slug: String) {
    subjects(where: { Slug: $slug }) {
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

export default GET_SUBJECT_STATE;
