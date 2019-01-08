# base image
FROM node:alpine

# workspace
RUN adduser -DS workspace
WORKDIR /home/workspace
USER workspace

# install dependencies
COPY . .
# RUN npm install

# run web app
CMD npm start
