# base image
FROM node:alpine

# create & set working directory
RUN mkdir -p /usr/src
WORKDIR /usr/src/app

# copy source files
COPY . /usr/src
COPY package*.json ./
# install dependencies
RUN npm install
COPY . .
# start app
RUN npm run build

EXPOSE 80
CMD ["npm", "start"]