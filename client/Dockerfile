# develop stage
FROM node:13.14-alpine as develop-stage
WORKDIR /geolynked
COPY package*.json ./
RUN yarn global add @quasar/cli
COPY . .

# build stage
FROM develop-stage as build-stage
RUN yarn
RUN quasar build

# production stage
FROM nginx:1.17.5-alpine as production-stage
COPY --from=build-stage /geolynked/dist/spa /usr/share/nginx/html
EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]
