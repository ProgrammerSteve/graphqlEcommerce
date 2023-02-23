FROM node:lts-alpine
WORKDIR /app 

# Get packages
COPY package*.json ./
COPY client/package*.json client/
COPY server/package*.json server/
COPY server/prisma server/prisma/ 

# Download Client
COPY client/ client/
RUN npm run install-client
RUN npm run build --prefix client 
RUN npm prune --production --prefix client 

# Download Server
COPY server/ server/
RUN npm run install-server
RUN npm run build --prefix server 
RUN npm prune --production --prefix server 

USER node

CMD ["npm","start","--prefix","server"]
EXPOSE 8000