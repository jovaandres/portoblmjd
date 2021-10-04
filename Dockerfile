FROM node:alpine as build

WORKDIR /portofolio

COPY package*.json ./
RUN npm install
COPY . ./
RUN npm run build

FROM nginx:1.19

COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /portofolio/build /usr/share/nginx/html