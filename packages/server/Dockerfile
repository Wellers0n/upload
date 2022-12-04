FROM node:18

EXPOSE 3001

# Create app directory
WORKDIR /usr/src/server

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./
COPY yarn*.lock ./

RUN yarn
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

CMD [ "yarn", "dev" ]