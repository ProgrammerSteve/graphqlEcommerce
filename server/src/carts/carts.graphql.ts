export const typeDefs = `#graphql
type Query {
  cart(cartId: ID!): [CartItem]
}

type Mutation {
  upsertCartItem(
    cartItemId: ID!
    cartId:ID!
    quantity:Int!
  ): Cart

  RemoveCartItem(
    cartId: ID!
    cartItemId: ID!
  ): Cart
}

type Cart {
  cartId: String!
  cartItems: CartItem[]
}

type CartItem {
  quantity: Int!
  cartItemId: String!
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
`