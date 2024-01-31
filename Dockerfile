FROM node:18-alpine

WORKDIR /autovision

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

# Define the command to run the app
CMD ["npm", "run", "dev"]
