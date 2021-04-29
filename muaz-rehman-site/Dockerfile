# Stage 0, Build Stage
# Using Node.js to compile frontend
FROM node:14 as build-stage

WORKDIR /app

COPY package*.json /app/

RUN npm install

COPY ./ /app/

RUN npm run build

# Stage 1, Deployment Stage
# Using Nginx

FROM nginx:1.15

COPY --from=build-stage /app/build/ /usr/share/nginx/html

# Copy default nginx.conf from tiangolo/node-frontend:10
COPY --from=tiangolo/node-frontend:10 /nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80