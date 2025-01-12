# Step 1: Use an official Node.js image as a base
FROM node:18 AS build

# Step 2: Set the working directory
WORKDIR /app

# Step 3: Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the rest of the application source code
COPY . .

# Step 6: Build the application for production
RUN npm run build

# Step 7: Use a lightweight web server for the production build
FROM nginx:alpine AS production

# Step 8: Copy the build output to Nginx's HTML directory
COPY --from=build /app/dist /usr/share/nginx/html

# Step 9: Expose the port
EXPOSE 80

# Step 10: Start Nginx
CMD ["nginx", "-g", "daemon off;"]
