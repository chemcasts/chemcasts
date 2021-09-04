import { gql } from "@apollo/client";

const GET_SUBJECT = gql`
  query subject($slug: String) {
    subjects(where: { Slug: $slug }) {
      id
      Name
      Slug
      Description
      Image {
        url
      }
      Chapters {
        id
        Name
        Slug
        Description
      }
    }
  }
`;

export default GET_SUBJECT;
