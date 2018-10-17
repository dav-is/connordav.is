FROM cypress/base:10

# Set the default working directory
WORKDIR /usr/src

# Install dependencies
COPY package.json ./
RUN npm i --silent

# Copy the relevant files to the working directory
COPY . .

RUN npm run test

# Build and export the app
RUN npm run export && mv ./public /