# build step
FROM node:16.13.2-alpine as build

WORKDIR /app

COPY package.json ./

RUN yarn install

COPY . ./

RUN yarn build

# release step
FROM nginx:1.21.5-alpine as release

COPY --from=build /app/out /usr/share/nginx/html/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
