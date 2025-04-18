FROM node:12.13.1
WORKDIR /workload

COPY nuxt.config.js /workload/nuxt.config.js
COPY package.json /workload/package.json
COPY .nuxt /workload/.nuxt
COPY static /workload/static

RUN npm install

EXPOSE 3000
CMD npm run start
