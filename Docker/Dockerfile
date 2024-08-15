# Use an official Node runtime as the parent image
FROM node:16-alpine3.16 as build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install project dependencies
RUN npm ci

# Copy the current directory contents into the container at /app
COPY . .

ARG _ENV
# Build the Angular app in production mode
RUN npm run build -- --configuration=${_ENV}

# Use Nginx for serving the app
FROM nginx:1.23.0-alpine


# Expose port 80
EXPOSE 8080


COPY Docker/nginx.conf /etc/nginx/nginx.conf

# Copy the built app to the Nginx server root directory
COPY --from=build /app/dist/du-web /usr/share/nginx/html
