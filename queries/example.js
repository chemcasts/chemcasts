import { gql } from "@apollo/client";

const GET_EXAMPLE = gql`
  query example($slug: String) {
    examples(where: { Slug: $slug }) {
      id
      Slug
      Level
      Problem
      Solution
      Chapter {
        id
        Name
        Slug
        Description
      }
    }
  }
`;

export default GET_EXAMPLE;
