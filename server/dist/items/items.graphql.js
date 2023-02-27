"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
exports.typeDefs = `#graphql
type Query {
  items: [Item]
  itemById(id: ID!): Item
  itemsByPrice(min: Float!, max: Float!): [Item]
}

type Mutation {
  addNewItem(
    name: String!
    src: String!
    price: Float!
    alt: String!
    stock: Int!
    description: String!
    length: Float!
    width: Float!
    height: Float!
    weight: Float!
    discontinued: Boolean!
    category: String!
  ): Item

  updateItem(
    id: ID!
    name: String!
    src: String!
    price: Float!
    alt: String!
    stock: Int!
    description: String!
    length: Float!
    width: Float!
    height: Float!
    weight: Float!
    discontinued: Boolean!
    category: String!
  ): Item
}

type Item {
  id: ID!
  name: String!
  src: String!
  price: Float!
  alt: String!
  stock: Int!
  description: String!
  length: Float!
  width: Float!
  height: Float!
  weight: Float!
  discontinued: Boolean!
  category: String!
}
`;
