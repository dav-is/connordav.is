FROM cypress/base:10

# Set the default working directory
WORKDIR /usr/src

# Install dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm i --silent

# Copy the relevant files to the working directory
COPY . .

# Export and run tests
RUN npm run test

# The tests have passed on our files so we can copy them
RUN mv ./out /
RUN mv /out /public
