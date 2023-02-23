# Links
- website hosted at: https://misty-night-9009.fly.dev/
- graphql: https://misty-night-9009.fly.dev/graphql
- dockerhub: https://hub.docker.com/repository/docker/programmingsteve105/ecommerce-backend/general
- github: https://github.com/ProgrammerSteve/graphqlEcommerce

# Docker stuff
- docker build . -t programmingsteve105/ecommerce-backend
- docker run -it -p 8000:8000 programmingsteve105/ecommerce-backend
- docker push programmingsteve105/ecommerce-backend

# Fly.io stuff
- fly auth login
- flyctl launch --image programmingsteve105/ecommerce-backend:latest
- flyctl deploy

# Prisma stuff
- npx prisma db push

# Tasks to complete
## Completed
- ~~Make apollo client refetch data after mutation queries~~
- ~~Add L,W,H and weight to Item object~~
- ~~Add itemDiscontinued(bool) and category section for Item object~~
- ~~category handler will be for text and make all text lowercase~~
- ~~Alter the Graphql schema to accomadate~~
- ~~Update the queries~~
- ~~Make text unselectable for buttons~~
- ~~Add sorting feature, Aa, $~~
- ~~Add a hamburger menu for mobile view~~
- ~~Add sideMenu component for mobile view~~
- ~~set up flex-col for mobile view of itemCard and newItemCard~~
- ~~Make ItemCard and NewItemCard responsive~~
- ~~Add dockerfile~~ 
- ~~upload to dockerhub~~
- ~~Organize inputs into separate folder~~
- ~~Organize SVGs into separate folder~~
- ~~organize pages components~~
- ~~Adjust display for itemDisplay~~
- ~~make itemPreview corners rounded until the navbar loses the margin gap~~
- ~~fix the spacing on the components in the side bar vertically~~
- ~~Add onClick handler to Link elements to close sidebar~~
- ~~make newItem page responsive~~
- ~~make individual page for edit item from newItem page~~
- ~~Add option to exit or finish editing an item on EditItemCard~~
- ~~Make Add item button in Sidebar work~~
- ~~Turned backend into typescript~~
- ~~Connect to prisma database~~
- ~~Add prisma schema~~
- ~~Add seed script to set up database~~
- ~~update queries for database and prisma operations~~

## In Progress
- Turn frontend to typescript
- Update dockerfile to reflect typescript changes
- Make a dual input range component for the min/max price

## To do
- Add error/validation for inputs
- Turn TextAreaInput into a presentation component that uses the InputWrapper
- Turn the ConfirmSvg into a presentation component by moving the logic to the Input Wrapper
- Add tests on backend
- Add test on frontend

## Long Term Tasks
- make queries for Cart/CartItem, User
- make queries Orders/OrderItem queries
- make queries for Users
- Add Tabs on navigation to go from Item/cart/orders/users
- design UI for cart/orders/users

