FROM node:19 AS build

ARG API_URL=localhost:8080

ENV API_URL=${API_URL}

WORKDIR /tmp

COPY . .

RUN npm install .

RUN npm run build

FROM scratch

COPY --from=build /tmp/build /build

ENTRYPOINT [ "/bin/sh" ]