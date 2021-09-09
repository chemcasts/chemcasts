import { gql } from "@apollo/client";

const GET_CHAPTER = gql`
  query chapter($slug: String, $note: String) {
    chapters(where: { Slug: $slug }) {
      id
      Name
      Slug
      Description
      Subject {
        id
        Name
        Slug
      }
      Notes {
        id
        Name
        Slug
      }
    }
    notes(where: { Slug: $note }) {
      id
      Name
      Slug
      Body
    }
  }
`;

export default GET_CHAPTER;
