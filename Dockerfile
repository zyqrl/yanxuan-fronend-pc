FROM node:14.20-bullseye
WORKDIR /workload

COPY nuxt.config.js /workload/nuxt.config.js
COPY package.json /workload/package.json
COPY .nuxt /workload/.nuxt
COPY static /workload/static

RUN npm install

EXPOSE 3000
CMD npm run start
