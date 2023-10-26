ARG NODEJS_VERSION

FROM node:${NODEJS_VERSION}

WORKDIR /app
COPY ./app /app
RUN npm install

CMD ["npm", "start"]