import { gql } from "@apollo/client";

export const GET_ITEMS = gql`
  query GetItems {
    items {
      id
      name
      src
      price
      alt
      stock
      description
      length
      width
      height
      weight
      discontinued
      category
    }
  }
`;
