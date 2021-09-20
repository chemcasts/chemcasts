import { gql } from "@apollo/client";

const GET_SUBJECT_BOOKS = gql`
  query subject($slug: String) {
    subjects(where: { Slug: $slug }) {
      id
      Name
      Slug
      Description
      Image {
        url
      }
      Books {
        id
        Slug
        Name
        Description
        Authors
        Edition
        Cover {
          url
          alternativeText
          caption
        }
      }
    }
  }
`;

export default GET_SUBJECT_BOOKS;
