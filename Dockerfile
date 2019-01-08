# base image
FROM node:alpine

# workspace
RUN adduser -DS workspace
WORKDIR /home/workspace
USER workspace

# install dependencies
COPY ./package.json ./
COPY ./package-lock.json ./
# COPY ./node_modules ./
RUN npm install

COPY ./ ./

# run web app
CMD npm start
