import { gql } from "@apollo/client";

const GET_NOTE = gql`
  query note($slug: String) {
    notes(where: { Slug: $slug }) {
      id
      Name
      Slug
      Body
      Chapter {
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
  }
`;

export default GET_NOTE;
