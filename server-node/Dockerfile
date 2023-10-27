ARG NODEJS_VERSION
ARG ENV

FROM node:${NODEJS_VERSION}

WORKDIR /app
COPY ./app /app
RUN npm install

CMD ["sh", "-c", "npm run $ENV"]