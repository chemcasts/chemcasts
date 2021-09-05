import { gql } from "@apollo/client";

const GET_CHAPTER = gql`
  query chapter($slug: String) {
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
  }
`;

export default GET_CHAPTER;
