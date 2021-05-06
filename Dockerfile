FROM node:14-alpine
WORKDIR /usr/src/app
COPY package*.json app.js ./
RUN npm install
EXPOSE 5000
CMD ["node", "app.js"]