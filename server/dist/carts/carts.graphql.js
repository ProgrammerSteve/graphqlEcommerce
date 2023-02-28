"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
exports.typeDefs = `#graphql
type Query {
  getCartByCartId(cartId: ID!): Cart
  getCartIdByEmail(email:String!):CartId
}

type Mutation {
  updateCartItem(
    itemId: ID!
    cartId:ID!
    quantity:Int!
  ): Cart

  addCartItem(
    itemId: ID!
    cartId:ID!
    quantity:Int!
  ):CartItem

  RemoveCartItem(
    cartId: ID!
    itemId: ID!
  ): Cart
}

type Cart {
  cartId: String!
  cartItems: [CartItem]
}

type CartItem {
  quantity: Int!
  itemId: ID!
  id: ID!
  cartId: ID!
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

type CartId{
  cartId:String!
}
`;
