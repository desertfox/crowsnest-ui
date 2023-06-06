FROM node:19 AS build

WORKDIR /tmp

COPY . .

RUN npm install .

RUN npm run build

FROM scratch

COPY --from=build /tmp/build /build

ENTRYPOINT [ "/bin/sh" ]