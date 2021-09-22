import { gql } from "@apollo/client";

const GET_CHAPTER_EXAMPLES = gql`
  query chapterExamples($slug: String) {
    chapters(where: { Slug: $slug }) {
      id
      Name
      Slug
      Description
      Examples {
        id
        Slug
        Level
        Problem
      }
    }
  }
`;

export default GET_CHAPTER_EXAMPLES;
