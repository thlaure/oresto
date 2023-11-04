ARG NODEJS_VERSION
ARG NGINX_VERSION

# Stage 1: Build the React app
FROM node:${NODEJS_VERSION} AS builder

WORKDIR /app
COPY app/package.json .
RUN npm install
COPY ./app .
RUN npm run build

# Stage 2: Create a lightweight production image
FROM nginx:${NGINX_VERSION}

COPY oresto-nginx.conf /etc/nginx/conf.d/
COPY --from=builder /app/dist /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]