FROM node:8.9-alpine
ENV NODE_ENV dev
ENV NPM_CONFIG_LOGLEVEL info
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --silent && mv node_modules ../
COPY . .
EXPOSE 8080
CMD npm start