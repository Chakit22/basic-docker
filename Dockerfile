FROM node:25-alpine
WORKDIR /app
COPY . .
RUN npm install
CMD ["node", "server.js"]
