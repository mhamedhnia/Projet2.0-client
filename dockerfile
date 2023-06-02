FROM node:alpine as build
WORKDIR /usr/local/app
COPY ./ /usr/local/app/
RUN npm install --force

RUN npm run build

FROM nginx:latest
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /usr/local/app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]