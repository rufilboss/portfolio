# Build stage
FROM node:22-alpine AS build

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

RUN yarn build

# Release step
FROM nginx:2.0.0-alpine AS release

COPY --from=build /app/out /usr/share/nginx/html/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
