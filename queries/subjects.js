import {gql} from "@apollo/client";

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
    }
  }
`;

export default GET_SUBJECTS;
