FROM node:10
# Create app directory
WORKDIR /usr/src/app
# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

# If you are building your code for production
RUN npm i

# Bundle app source
COPY . .

RUN npm run build

# Expose port 5000
EXPOSE 5000

# run npm start
CMD "serve -s build"