# Stage 1: Use Node.js to build the React app
FROM node:16-alpine as build

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files for better build caching
COPY package.json package-lock.json ./

# Install dependencies using npm
RUN npm ci

# Copy the rest of the app's source code
COPY . .

# Build the React app for production
RUN npm run build

# Stage 2: Use an official Nginx image to serve the React app
FROM nginx:alpine

# Remove the default Nginx static assets
RUN rm -rf /usr/share/nginx/html/*

# Copy the React build output from the previous stage to Nginx's static assets directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 to the outside world
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
