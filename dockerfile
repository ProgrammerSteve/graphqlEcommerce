FROM node:lts-alpine
WORKDIR /app 

# Download Webpack for building
COPY package*.json ./
RUN npm run install-root --omit=dev

# Download client
COPY client/package*.json client/
RUN npm run install-client --omit=dev

# Download Server
COPY server/package*.json server/
RUN npm run install-server --omit=dev

# Copy project files
COPY client/ client/
COPY server/ server/

#Run webpack to build client
RUN npm run build --prefix client


USER node

CMD ["npm","start","--prefix","server"]
EXPOSE 8000