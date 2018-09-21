FROM mhart/alpine-node

# Set the default working directory
WORKDIR /

# Install dependencies
COPY package.json ./
RUN yarn

# Copy the relevant files to the working directory
COPY . .

# Build and export the app
RUN yarn build && yarn export -o /